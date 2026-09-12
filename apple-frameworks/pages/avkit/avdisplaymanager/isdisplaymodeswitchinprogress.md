> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avdisplaymanager/isdisplaymodeswitchinprogress](https://developer.apple.com/documentation/avkit/avdisplaymanager/isdisplaymodeswitchinprogress)

# isDisplayModeSwitchInProgress (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+

A Boolean value that indicates whether a display mode switch is in progress.

## Declaration

```swift
var isDisplayModeSwitchInProgress: Bool { get }
```

<a id="Discussion"></a>

## Discussion

While this property value is `true`, your app should behave as if the display is currently changing modes, and may be temporarily blank. The accuracy of this property value depends on the TV hardware and the nature of the mode switch. When displaying temporary content or user interface elements, such as hints or tips, leave them visible for longer than the mode switch takes, to ensure the user sees them.

This property is key-value observable.

## See Also

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [isDisplayCriteriaMatchingEnabled](isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.

# displayModeSwitchInProgress (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** tvOS 11.2+

A Boolean value that indicates whether a display mode switch is in progress.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDisplayModeSwitchInProgress) BOOL displayModeSwitchInProgress;
```

<a id="Discussion"></a>

## Discussion

While this property value is `true`, your app should behave as if the display is currently changing modes, and may be temporarily blank. The accuracy of this property value depends on the TV hardware and the nature of the mode switch. When displaying temporary content or user interface elements, such as hints or tips, leave them visible for longer than the mode switch takes, to ensure the user sees them.

This property is key-value observable.

## See Also

### Matching a Video’s Native Display Mode

- [preferredDisplayCriteria](preferreddisplaycriteria.md): A hint for the TV to set the display mode to best match the currently playing content’s display criteria.
- [displayCriteriaMatchingEnabled](isdisplaycriteriamatchingenabled.md): A Boolean value that indicates whether the user has enabled display critera matching.
