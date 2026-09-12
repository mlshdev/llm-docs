> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_enable_encrypted_client_hello](https://developer.apple.com/documentation/security/sec_protocol_options_set_enable_encrypted_client_hello)

# sec_protocol_options_set_enable_encrypted_client_hello

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function

## Declaration

```objectivec
void sec_protocol_options_set_enable_encrypted_client_hello(sec_protocol_options_t options, bool enable_encrypted_client_hello);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.

<a id="discussion"></a>

## Discussion

For experimental use only. When this is enabled, the Encrypted Client Hello extension will be sent on the Client Hello if TLS 1.3 is among the supported TLS versions. Default false.
