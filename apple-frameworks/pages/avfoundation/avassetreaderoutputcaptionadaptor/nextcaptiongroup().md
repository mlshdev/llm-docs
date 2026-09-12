> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutputcaptionadaptor/nextcaptiongroup()](https://developer.apple.com/documentation/avfoundation/avassetreaderoutputcaptionadaptor/nextcaptiongroup())

# nextCaptionGroup() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Returns the next caption group.

> Use AVAssetReader.outputCaptionProvider(for:validationDelegate:) instead

## Declaration

```swift
func nextCaptionGroup() -> AVCaptionGroup?
```

<a id="return-value"></a>

## Return Value

The caption group, or `nil` of there are no more groups.

## See Also

### Reading caption groups

- [captionsNotPresentInPreviousGroups(in:)](captionsnotpresentinpreviousgroups%28in_%29.md): Deprecated. Returns the set of captions in the caption group that weren’t vended by the adaptor.

# nextCaptionGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Returns the next caption group.

## Declaration

```objectivec
- (AVCaptionGroup *) nextCaptionGroup;
```

<a id="return-value"></a>

## Return Value

The caption group, or `nil` of there are no more groups.

## See Also

### Reading caption groups

- [captionsNotPresentInPreviousGroupsInCaptionGroup:](captionsnotpresentinpreviousgroups%28in_%29.md): Deprecated. Returns the set of captions in the caption group that weren’t vended by the adaptor.
