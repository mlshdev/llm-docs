> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioaudioenginecalls](https://developer.apple.com/documentation/iokit/ioaudioenginecalls)

# IOAudioEngineCalls

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

The set of constants passed to IOAudioEngineUserClient::getExternalMethodForIndex() when making calls from the IOAudioFamily user client code.

## Declaration

```objectivec
typedef enum _IOAudioEngineCalls : unsigned int {
    ...
} IOAudioEngineCalls;
```

## Topics

### Constants

- [kIOAudioEngineCallGetConnectionID](ioaudioenginecalls/kioaudioenginecallgetconnectionid.md)
- [kIOAudioEngineCallGetNearestStartTime](ioaudioenginecalls/kioaudioenginecallgetneareststarttime.md)
- [kIOAudioEngineCallRegisterClientBuffer](ioaudioenginecalls/kioaudioenginecallregisterclientbuffer.md)
- [kIOAudioEngineCallStart](ioaudioenginecalls/kioaudioenginecallstart.md)
- [kIOAudioEngineCallStop](ioaudioenginecalls/kioaudioenginecallstop.md)
- [kIOAudioEngineCallUnregisterClientBuffer](ioaudioenginecalls/kioaudioenginecallunregisterclientbuffer.md)
