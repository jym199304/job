// JavaScript Document

$('#dosubmit').click(function() {
  var info = {}
  info.province1 = $('#province1').val()
  info.city1 = $('#city1').val()
  info.name1 = $('#name1').val()
  info.tel1 = $('#tel1').val()
  info.yanzhengma1 = $('#yanzhengma1').val()
  info.school1 = $('#school1').val()
  info.zhuanye1 = $('#zhuanye1').val()
  info.zjh = $('#zjh').val()
  info.zkz = $('#zkz').val()
  info.QQ1 = $('#QQ1').val()
  info.mail1 = $('#mail1').val()
  info.from1 = $('#from1').val()
  if (info.name1 == '') {
    alert('����д����')
    return false
  }

  if (info.tel1 == '') {
    alert('����д�ֻ���')
    return false
  }

  var reg = /^0?1[3465789]\d{9}$/ //�ֻ�������
  if (!reg.test(info.tel1)) {
    //��֤�ֻ����Ƿ���ȷ
    alert('����д��ȷ���ֻ��ţ�')
    return false
  }

  $.ajax({
    url:
      'http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=show&formid=72&action=jsonp&siteid=1&verify=true',
    data: { info },
    dataType: 'jsonp',
    type: 'GET',
    success: function(json) {
      if (json.status == 1) {
        alert('�ύ��Ϣ�ɹ�')
        $('#name1').val('')
        $('#tel1').val('')
        $('#yanzhengma1').val('')
      } else if (json.status == -1) {
        alert('����ԤԼ�ɹ��������ظ��ύ')
        $('#name1').val('')
        $('#tel1').val('')
        $('#yanzhengma1').val('')
      } else {
        alert(json.msg)
      }
    }
  })
})

$('#getyzm').click(function(event) {
  var phone = $('#tel1').val()
  if (phone == '') {
    alert('����д�ֻ���')
    return false
  }
  var reg = /^0?1[3465789]\d{9}$/ //�ֻ�������
  if (!reg.test(phone)) {
    //��֤�ֻ����Ƿ���ȷ
    alert('����д��ȷ���ֻ��ţ�')
    return false
  }
  $('#select').show()
  var s = WIDGETS.imgSmoothCheck({
    selector: '#select',
    data: ['images/yz1.jpg', 'images/yz2.jpg', 'images/yz3.jpg'],
    imgHeight: 100,
    imgWidth: 200,
    allowableErrorValue: 3,
    success: function() {
      $.ajax({
        url:
          'http://www.kaoyan365.cn/index.php?m=formguide&c=forms&a=sendmsg&phone=' +
          phone +
          '&formid=72&pro=mg',
        type: 'GET',
        dataType: 'jsonp',
        data: { phone: phone },
        success: function(json) {
          $('#select').hide()
          if (json.status == 1) {
            $('#daojishi').css('display', 'inline-block')
            $('#hqyzm').css('display', 'none')
            runcount(60)
            alert('���ͳɹ�')
          } else {
            alert(json.msg)
          }
        }
      })
    },
    error: function(res) {
      alert(res)
    }
  })
  $('.refresh').on('click', function() {
    s.refresh()
  })
})

function runcount(t) {
  if (t == 0) {
    $('#daojishi').css('display', 'none')
    $('#getyzm').show()
  } else {
    document.getElementById('daojishi').innerHTML = t + 'S'
    t--
    setTimeout(function() {
      runcount(t)
    }, 1000)
    // $('#getyzm').hide()
  }
}
