> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_c_qop_default](https://developer.apple.com/documentation/gss/gss_c_qop_default)

# GSS_C_QOP_DEFAULT (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The default Quality of Protection for per-message services.

## Declaration

```swift
var GSS_C_QOP_DEFAULT: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

An implementation that offers multiple levels of QOP may define this value to be either zero (as done here) to mean “default protection,” or to a specific explicit QOP value. However, a value of 0 is always interpreted by a GSS-API implementation as a request for the default protection level.

## See Also

### Quality of Protection Constants

- [GSS_KRB5_CONF_C_QOP_DES](gss_krb5_conf_c_qop_des.md): The Kerberos 5 Qualty of Service 56-bit DES encryption.
- [GSS_KRB5_CONF_C_QOP_DES3_KD](gss_krb5_conf_c_qop_des3_kd.md): The Kerberos 5 Qualty of Service 168-bit DES3 encryption with key derivation.

# GSS_C_QOP_DEFAULT (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The default Quality of Protection for per-message services.

## Declaration

```objectivec
#define GSS_C_QOP_DEFAULT
```

<a id="Discussion"></a>

## Discussion

An implementation that offers multiple levels of QOP may define this value to be either zero (as done here) to mean “default protection,” or to a specific explicit QOP value. However, a value of 0 is always interpreted by a GSS-API implementation as a request for the default protection level.

## See Also

### Quality of Protection Constants

- [GSS_KRB5_CONF_C_QOP_DES](gss_krb5_conf_c_qop_des.md): The Kerberos 5 Qualty of Service 56-bit DES encryption.
- [GSS_KRB5_CONF_C_QOP_DES3_KD](gss_krb5_conf_c_qop_des3_kd.md): The Kerberos 5 Qualty of Service 168-bit DES3 encryption with key derivation.
