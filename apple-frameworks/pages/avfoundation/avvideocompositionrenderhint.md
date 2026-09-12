> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionrenderhint](https://developer.apple.com/documentation/avfoundation/avvideocompositionrenderhint)

# AVVideoCompositionRenderHint (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Information about upcoming composition requests, such as composition start time and end time.

## Declaration

```swift
class AVVideoCompositionRenderHint
```

## Topics

### Managing composition timing

- [startCompositionTime](avvideocompositionrenderhint/startcompositiontime.md): The start time of the upcoming composition requests.
- [endCompositionTime](avvideocompositionrenderhint/endcompositiontime.md): The end time of the upcoming composition requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Preparing to render frames

- [anticipateRendering(using:)](avvideocompositing/anticipaterendering%28using_%29.md): Informs a custom video compositor about upcoming rendering requests.
- [prerollForRendering(using:)](avvideocompositing/prerollforrendering%28using_%29.md): Tells a custom video compositor to perform any work in the prerolling phase.

# AVVideoCompositionRenderHint (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Information about upcoming composition requests, such as composition start time and end time.

## Declaration

```objectivec
@interface AVVideoCompositionRenderHint : NSObject
```

## Topics

### Managing composition timing

- [startCompositionTime](avvideocompositionrenderhint/startcompositiontime.md): The start time of the upcoming composition requests.
- [endCompositionTime](avvideocompositionrenderhint/endcompositiontime.md): The end time of the upcoming composition requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Preparing to render frames

- [anticipateRenderingUsingHint:](avvideocompositing/anticipaterendering%28using_%29.md): Informs a custom video compositor about upcoming rendering requests.
- [prerollForRenderingUsingHint:](avvideocompositing/prerollforrendering%28using_%29.md): Tells a custom video compositor to perform any work in the prerolling phase.
