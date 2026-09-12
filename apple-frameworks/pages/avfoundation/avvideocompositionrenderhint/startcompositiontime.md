> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrenderhint/startcompositiontime](https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint/startcompositiontime)

# startCompositionTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The start time of the upcoming composition requests.

## Declaration

```swift
var startCompositionTime: CMTime { get }
```

## See Also

### Managing composition timing

- [endCompositionTime](endcompositiontime.md): The end time of the upcoming composition requests.

# startCompositionTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The start time of the upcoming composition requests.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime startCompositionTime;
```

## See Also

### Managing composition timing

- [endCompositionTime](endcompositiontime.md): The end time of the upcoming composition requests.
