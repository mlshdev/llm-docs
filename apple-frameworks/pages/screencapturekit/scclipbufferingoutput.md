> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scclipbufferingoutput](https://developer.apple.com/documentation/screencapturekit/scclipbufferingoutput)

# SCClipBufferingOutput (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
class SCClipBufferingOutput
```

<a id="overview"></a>

## Overview

SCClipBufferingOutput

SCClipBufferingOutput represents a clip buffering session on a SCStream.

## Topics

### Initializers

- [init(delegate:)](scclipbufferingoutput/init%28delegate_%29.md)

### Instance Methods

- [exportClip(to:duration:completionHandler:)](scclipbufferingoutput/exportclip%28to_duration_completionhandler_%29.md)

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

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.

# SCClipBufferingOutput (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@interface SCClipBufferingOutput : NSObject
```

<a id="overview"></a>

## Overview

SCClipBufferingOutput

SCClipBufferingOutput represents a clip buffering session on a SCStream.

## Topics

### Instance Methods

- [exportClipToURL:duration:completionHandler:](scclipbufferingoutput/exportclip%28to_duration_completionhandler_%29.md)
- [initWithDelegate:](scclipbufferingoutput/init%28delegate_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Output processing

- [SCStreamOutput](scstreamoutput.md): A delegate protocol your app implements to receive capture stream output events.
- [SCStreamOutputType](scstreamoutputtype.md): Constants that represent output types for a stream frame.
- [SCStreamFrameInfo](scstreamframeinfo.md): An instance that defines metadata keys for a stream frame.
- [SCFrameStatus](scframestatus.md): Status values for a frame from a stream.
