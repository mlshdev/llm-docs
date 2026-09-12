> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/provider/captionsnotpresentinpreviousgroups(in:)](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/provider/captionsnotpresentinpreviousgroups(in:))

# captionsNotPresentInPreviousGroups(in:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Returns the set of captions that are present in the given group but were not present in any group previously vended by calls to next().

## Declaration

```swift
func captionsNotPresentInPreviousGroups(in captionGroup: AVCaptionGroup) -> [AVCaption]
```

## Parameters

- `captionGroup`: The group containing the captions of interest.

<a id="return-value"></a>

## Return Value

An array of AVCaption objects.

## See Also

### Reading media data

- [next()](next%28%29.md): Returns the next piece of media data.
