> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_c_anon_flag](https://developer.apple.com/documentation/gss/gss_c_anon_flag)

# GSS_C_ANON_FLAG (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A flag that ensures the initiator remains anonymous to the acceptor.

## Declaration

```swift
var GSS_C_ANON_FLAG: Int32 { get }
```

## See Also

### Flags

- [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md): A flag that permits delegation of the initiator’s credentials by the acceptor.
- [GSS_C_MUTUAL_FLAG](gss_c_mutual_flag.md): A flag that authenticates the credentials of both initiator and acceptor.
- [GSS_C_REPLAY_FLAG](gss_c_replay_flag.md): A flag that detects repeated messages.
- [GSS_C_SEQUENCE_FLAG](gss_c_sequence_flag.md): A flag that detects out of sequence messages.
- [GSS_C_CONF_FLAG](gss_c_conf_flag.md): A flag that makes confidentiality services (that is, encryption) available for transferred messages.
- [GSS_C_INTEG_FLAG](gss_c_integ_flag.md): A flag that makes integrity services (that is, cryptographic signatures) available for transferred messages.
- [GSS_C_PROT_READY_FLAG](gss_c_prot_ready_flag.md): A flag that provides an early indication of the availability of confidentiality and integrity services.
- [GSS_C_TRANS_FLAG](gss_c_trans_flag.md): A flag that indicates that a context can is exportable, for example to transfer it to another process on the same machine.
- [GSS_C_DCE_STYLE](gss_c_dce_style.md): A flag that causes an extra AP reply to be sent from the client back to the server after receiving the server’s AP reply.
- [GSS_C_IDENTIFY_FLAG](gss_c_identify_flag.md): A flag that indicates identification of the client by name and ID only.
- [GSS_C_EXTENDED_ERROR_FLAG](gss_c_extended_error_flag.md): A flag that indicates that the client wants to be informed of extended error information.
- [GSS_C_DELEG_POLICY_FLAG](gss_c_deleg_policy_flag.md): A flag that indicates delegation is permissible if the mechanism policy allows it.

# GSS_C_ANON_FLAG (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A flag that ensures the initiator remains anonymous to the acceptor.

## Declaration

```objectivec
#define GSS_C_ANON_FLAG
```

## See Also

### Flags

- [GSS_C_DELEG_FLAG](gss_c_deleg_flag.md): A flag that permits delegation of the initiator’s credentials by the acceptor.
- [GSS_C_MUTUAL_FLAG](gss_c_mutual_flag.md): A flag that authenticates the credentials of both initiator and acceptor.
- [GSS_C_REPLAY_FLAG](gss_c_replay_flag.md): A flag that detects repeated messages.
- [GSS_C_SEQUENCE_FLAG](gss_c_sequence_flag.md): A flag that detects out of sequence messages.
- [GSS_C_CONF_FLAG](gss_c_conf_flag.md): A flag that makes confidentiality services (that is, encryption) available for transferred messages.
- [GSS_C_INTEG_FLAG](gss_c_integ_flag.md): A flag that makes integrity services (that is, cryptographic signatures) available for transferred messages.
- [GSS_C_PROT_READY_FLAG](gss_c_prot_ready_flag.md): A flag that provides an early indication of the availability of confidentiality and integrity services.
- [GSS_C_TRANS_FLAG](gss_c_trans_flag.md): A flag that indicates that a context can is exportable, for example to transfer it to another process on the same machine.
- [GSS_C_DCE_STYLE](gss_c_dce_style.md): A flag that causes an extra AP reply to be sent from the client back to the server after receiving the server’s AP reply.
- [GSS_C_IDENTIFY_FLAG](gss_c_identify_flag.md): A flag that indicates identification of the client by name and ID only.
- [GSS_C_EXTENDED_ERROR_FLAG](gss_c_extended_error_flag.md): A flag that indicates that the client wants to be informed of extended error information.
- [GSS_C_DELEG_POLICY_FLAG](gss_c_deleg_policy_flag.md): A flag that indicates delegation is permissible if the mechanism policy allows it.
