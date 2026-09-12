> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateforegroundinstancemaskrequest](https://developer.apple.com/documentation/vision/vngenerateforegroundinstancemaskrequest)

# VNGenerateForegroundInstanceMaskRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that generates an instance mask of noticable objects to separate from the background.

## Declaration

```swift
class VNGenerateForegroundInstanceMaskRequest
```

## Topics

### Accessing the Results

- [results](vngenerateforegroundinstancemaskrequest/results.md): The instance masks the request observes.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNInstanceMaskObservation](vninstancemaskobservation.md): An observation that contains an instance mask that labels instances in the mask.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.

# VNGenerateForegroundInstanceMaskRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that generates an instance mask of noticable objects to separate from the background.

## Declaration

```objectivec
@interface VNGenerateForegroundInstanceMaskRequest : VNImageBasedRequest
```

## Topics

### Accessing the Results

- [results](vngenerateforegroundinstancemaskrequest/results.md): The instance masks the request observes.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNInstanceMaskObservation](vninstancemaskobservation.md): An observation that contains an instance mask that labels instances in the mask.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.
