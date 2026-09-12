> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/provider/next()](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/provider/next())

# next()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the next piece of media data.

## Declaration

```swift
nonisolated(nonsending) func next() async throws -> Payload?
```

<a id="return-value"></a>

## Return Value

Returns the next piece of media data with the specified Payload type. If no more media data is available, this method returns nil.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the underlying reader encountered an error.

## See Also

### Reading media data

- [captionsNotPresentInPreviousGroups(in:)](captionsnotpresentinpreviousgroups%28in_%29.md): Conforms when `Payload` is `AVCaptionGroup`. Returns the set of captions that are present in the given group but were not present in any group previously vended by calls to next().
