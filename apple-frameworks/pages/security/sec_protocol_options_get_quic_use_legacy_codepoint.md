> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_protocol_options_get_quic_use_legacy_codepoint

# sec_protocol_options_get_quic_use_legacy_codepoint

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function

## Declaration

```objectivec
bool sec_protocol_options_get_quic_use_legacy_codepoint(sec_protocol_options_t options);
```

<a id="return-value"></a>

## Return Value

A boolean that indicates whether or not the QUIC legacy codepoint has been enabled.

<a id="discussion"></a>

## Discussion

Check whether the QUIC legacy codepoint has been enabled.
