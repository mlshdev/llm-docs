> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/captionreceiver/appendimmediately(_:)-9uy14](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/appendimmediately(_:)-9uy14)

# appendImmediately(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Appends the caption synchronously if the input is ready for more media data.

## Declaration

```swift
func appendImmediately(_ caption: AVCaption) throws -> Bool
```

## Parameters

- `caption`: The caption to be appended.

<a id="return-value"></a>

## Return Value

Returns true if the append was successful, false if the input was not ready for more media data.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending captions

- [append(\_:)](append%28__%29-4opbd.md): Suspends until the input is ready for more media data, then appends the caption group.
- [append(\_:)](append%28__%29-4wpi2.md): Suspends until the input is ready for more media data, then appends the caption.
- [appendImmediately(\_:)](appendimmediately%28__%29-7q21r.md): Appends the caption group synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.
