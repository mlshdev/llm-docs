> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_protocol_options_get_enable_encrypted_client_hello

# sec_protocol_options_get_enable_encrypted_client_hello

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function

## Declaration

```objectivec
bool sec_protocol_options_get_enable_encrypted_client_hello(sec_protocol_options_t options);
```

<a id="return-value"></a>

## Return Value

A boolean that indicates whether or not Encrypted Client Hello has been enabled.

<a id="discussion"></a>

## Discussion

For experimental use only. Find out whether Encrypted Client Hello has been enabled.
