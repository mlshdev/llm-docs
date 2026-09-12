> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avdisplaymanager/preferreddisplaycriteria](https://developer.apple.com/documentation/avkit/avdisplaymanager/preferreddisplaycriteria)

# preferredDisplayCriteria (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A hint for the TV to set the display mode to best match the currently playing content’s display criteria.

## Declaration

```swift
@NSCopying var preferredDisplayCriteria: AVDisplayCriteria? { get set }
```

<a id="Discussion"></a>

## Discussion

The display manager uses the preferred display criteria only when user settings allow. Set this property to `nil` to allow the system to guide you to a display mode that’s suitable for a wide range of video and nonvideo content.

## See Also

### Matching a Video’s Native Display Mode

- [isDisplayCriteriaMatchingEnabled](isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [isDisplayModeSwitchInProgress](isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

# preferredDisplayCriteria (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+ · visionOS 1.0+

A hint for the TV to set the display mode to best match the currently playing content’s display criteria.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVDisplayCriteria * preferredDisplayCriteria;
```

<a id="Discussion"></a>

## Discussion

The display manager uses the preferred display criteria only when user settings allow. Set this property to `nil` to allow the system to guide you to a display mode that’s suitable for a wide range of video and nonvideo content.

## See Also

### Matching a Video’s Native Display Mode

- [displayCriteriaMatchingEnabled](isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
- [displayModeSwitchInProgress](isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.
