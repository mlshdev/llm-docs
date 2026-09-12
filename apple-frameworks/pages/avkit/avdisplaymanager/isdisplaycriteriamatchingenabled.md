> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avdisplaymanager/isdisplaycriteriamatchingenabled](https://developer.apple.com/documentation/avkit/avdisplaymanager/isdisplaycriteriamatchingenabled)

# isDisplayCriteriaMatchingEnabled (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether the user has enabled display critera matching.

## Declaration

```swift
var isDisplayCriteriaMatchingEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the user’s current Match Content settings, which they set in the Settings app under Video and Audio \> Match Content.

## See Also

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [isDisplayModeSwitchInProgress](isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.

# displayCriteriaMatchingEnabled (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.3+ · visionOS 1.0+

A Boolean value that indicates whether the user has enabled display critera matching.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDisplayCriteriaMatchingEnabled) BOOL displayCriteriaMatchingEnabled;
```

<a id="Discussion"></a>

## Discussion

This value reflects the user’s current Match Content settings, which they set in the Settings app under Video and Audio \> Match Content.

## See Also

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [displayModeSwitchInProgress](isdisplaymodeswitchinprogress.md): A Boolean value that indicates whether a display mode switch is in progress.
