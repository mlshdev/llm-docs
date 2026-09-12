> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallcallcapabilityunsupportedreason](https://developer.apple.com/documentation/intents/instartcallcallcapabilityunsupportedreason)

# INStartCallCallCapabilityUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the reason the app can’t support starting the call.

## Declaration

```swift
enum INStartCallCallCapabilityUnsupportedReason
```

## Topics

### Constants

- [INStartCallCallCapabilityUnsupportedReason.videoCallUnsupported](instartcallcallcapabilityunsupportedreason/videocallunsupported.md): The app doesn’t support video calls.
- [INStartCallCallCapabilityUnsupportedReason.microphoneNotAccessible](instartcallcallcapabilityunsupportedreason/microphonenotaccessible.md): The microphone isn’t accessible.
- [INStartCallCallCapabilityUnsupportedReason.cameraNotAccessible](instartcallcallcapabilityunsupportedreason/cameranotaccessible.md): The camera isn’t accessible.

### Initializers

- [init(rawValue:)](instartcallcallcapabilityunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result Object

- [init(callCapabilityResolutionResult:)](instartcallcallcapabilityresolutionresult/init%28callcapabilityresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified capabilities.
- [unsupported(forReason:)](instartcallcallcapabilityresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.

# INStartCallCallCapabilityUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the reason the app can’t support starting the call.

## Declaration

```objectivec
enum INStartCallCallCapabilityUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INStartCallCallCapabilityUnsupportedReasonVideoCallUnsupported](instartcallcallcapabilityunsupportedreason/videocallunsupported.md): The app doesn’t support video calls.
- [INStartCallCallCapabilityUnsupportedReasonMicrophoneNotAccessible](instartcallcallcapabilityunsupportedreason/microphonenotaccessible.md): The microphone isn’t accessible.
- [INStartCallCallCapabilityUnsupportedReasonCameraNotAccessible](instartcallcallcapabilityunsupportedreason/cameranotaccessible.md): The camera isn’t accessible.

## See Also

### Creating a Resolution Result Object

- [initWithCallCapabilityResolutionResult:](instartcallcallcapabilityresolutionresult/init%28callcapabilityresolutionresult_%29.md): Creates an object whose resolution involves the succesful start of a call with the specified capabilities.
- [unsupportedForReason:](instartcallcallcapabilityresolutionresult/unsupported%28forreason_%29.md): Creates an object specifying that resolution of the parameter wasn’t supported, for the specified reason.
