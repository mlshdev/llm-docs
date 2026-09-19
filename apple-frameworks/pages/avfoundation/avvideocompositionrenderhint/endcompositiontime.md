> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint/endcompositiontime

# endCompositionTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The end time of the upcoming composition requests.

## Declaration

```swift
var endCompositionTime: CMTime { get }
```

## See Also

### Managing composition timing

- [startCompositionTime](startcompositiontime.md): The start time of the upcoming composition requests.

# endCompositionTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The end time of the upcoming composition requests.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime endCompositionTime;
```

## See Also

### Managing composition timing

- [startCompositionTime](startcompositiontime.md): The start time of the upcoming composition requests.
