> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_quic_use_legacy_codepoint](https://developer.apple.com/documentation/security/sec_protocol_options_set_quic_use_legacy_codepoint)

# sec_protocol_options_set_quic_use_legacy_codepoint

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function

## Declaration

```objectivec
void sec_protocol_options_set_quic_use_legacy_codepoint(sec_protocol_options_t options, bool quic_use_legacy_codepoint);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `quic_use_legacy_codepoint`: A boolean to enable/disable the legacy codepoint.

<a id="discussion"></a>

## Discussion

Set QUIC to use the legacy codepoint. Defaults to true.
