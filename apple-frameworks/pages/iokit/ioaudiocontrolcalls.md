> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioaudiocontrolcalls

# IOAudioControlCalls

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

The set of constants passed to IOAudioControlUserClient::getExternalMethodForIndex() when making calls from the IOAudioFamily user client code.

## Declaration

```objectivec
typedef enum _IOAudioControlCalls : unsigned int {
    ...
} IOAudioControlCalls;
```

## Topics

### Constants

- [kIOAudioControlCallSetValue](ioaudiocontrolcalls/kioaudiocontrolcallsetvalue.md)
- [kIOAudioControlCallGetValue](ioaudiocontrolcalls/kioaudiocontrolcallgetvalue.md)
