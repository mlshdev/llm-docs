> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/requestedtime

# requestedTime

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A time in the video timeline at which you request an image.

## Declaration

```swift
var requestedTime: CMTime { get }
```

## See Also

### Accessing image data

- [image](image.md): An image for a requested time.
- [actualTime](actualtime.md): The actual time in the video timeline at which the image generator creates the image.
