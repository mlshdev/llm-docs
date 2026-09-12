> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/metadatareceiver/finish()](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadatareceiver/finish())

# finish()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

## Declaration

```swift
func finish()
```

## See Also

### Appending metadata

- [append(\_:)](append%28__%29.md): Suspends until the input is ready for more media data, then appends the timed metadata group.
- [appendImmediately(\_:)](appendimmediately%28__%29.md): Appends the timed metadata group synchronously if the input is ready for more media data.
