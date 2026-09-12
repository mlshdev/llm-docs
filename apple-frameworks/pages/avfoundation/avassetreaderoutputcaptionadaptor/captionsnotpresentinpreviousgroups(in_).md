> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor/captionsnotpresentinpreviousgroups(in:)](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/captionsnotpresentinpreviousgroups(in:))

# captionsNotPresentInPreviousGroups(in:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Returns the set of captions in the caption group that weren’t vended by the adaptor.

> Use AVAssetReader.outputCaptionProvider(for:validationDelegate:) instead

## Declaration

```swift
func captionsNotPresentInPreviousGroups(in captionGroup: AVCaptionGroup) -> [AVCaption]
```

## Parameters

- `captionGroup`: The caption group to query.

<a id="return-value"></a>

## Return Value

An array of captions not previously vended by the adaptor, or an empty array if there are none.

## See Also

### Reading caption groups

- [nextCaptionGroup()](nextcaptiongroup%28%29.md): Deprecated. Returns the next caption group.

# captionsNotPresentInPreviousGroupsInCaptionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the set of captions in the caption group that weren’t vended by the adaptor.

## Declaration

```objectivec
- (NSArray<AVCaption *> *) captionsNotPresentInPreviousGroupsInCaptionGroup:(AVCaptionGroup *) captionGroup;
```

## Parameters

- `captionGroup`: The caption group to query.

<a id="return-value"></a>

## Return Value

An array of captions not previously vended by the adaptor, or an empty array if there are none.

## See Also

### Reading caption groups

- [nextCaptionGroup](nextcaptiongroup%28%29.md): Deprecated. Returns the next caption group.
