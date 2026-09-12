> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/textreplacementreason/temporary](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/textreplacementreason/temporary)

# NSWritingToolsCoordinator.TextReplacementReason.temporary (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 27.0+

An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

## Declaration

```swift
case temporary
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, in some cases the suggestion needs to be shown temporarily. Update your view’s text storage without animating the change.

# NSWritingToolsCoordinatorTextReplacementReasonTemporary (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

An option to replace the text in your view when a grammar suggestion is temporarily shown to preview the proposed change in the text.

## Declaration

```objectivec
NSWritingToolsCoordinatorTextReplacementReasonTemporary
```

<a id="discussion"></a>

## Discussion

When the user interacts with a grammar issue and the UI is shown, in some cases the suggestion needs to be shown temporarily. Update your view’s text storage without animating the change.
