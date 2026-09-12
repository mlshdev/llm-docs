> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/images/next()](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/next())

# next()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the next element in the sequence.

## Declaration

```swift
mutating func next() async -> AVAssetImageGenerator.Images.Element?
```

<a id="return-value"></a>

## Return Value

The next element, or `nil` if no more exist.

## See Also

### Iterating elements

- [AVAssetImageGenerator.Images.Element](element.md): An element that provides the result of an image generation request.
