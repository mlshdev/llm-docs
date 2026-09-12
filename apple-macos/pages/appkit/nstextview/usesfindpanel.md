> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/usesfindpanel](https://developer.apple.com/documentation/appkit/nstextview/usesfindpanel)

# usesFindPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver allows for a find panel.

## Declaration

```swift
var usesFindPanel: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the use of a find panel, [false](https://developer.apple.com/documentation/swift/false) otherwise. A text view can use either a find panel or a find bar. If [usesFindPanel](usesfindpanel.md) is set to [true](https://developer.apple.com/documentation/swift/true), [usesFindBar](usesfindbar.md) is set to [false](https://developer.apple.com/documentation/swift/false) and vice versa.

## See Also

### Related Documentation

- [usesFindBar](usesfindbar.md): A Boolean value that indicates whether to use the find bar for this text view.

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [performFindPanelAction(\_:)](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel(\_:)](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel(\_:)](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel(\_:)](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel(\_:)](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel(\_:)](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

# usesFindPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the receiver allows for a find panel.

## Declaration

```objectivec
@property BOOL usesFindPanel;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to allow the use of a find panel, [false](https://developer.apple.com/documentation/swift/false) otherwise. A text view can use either a find panel or a find bar. If [usesFindPanel](usesfindpanel.md) is set to [true](https://developer.apple.com/documentation/swift/true), [usesFindBar](usesfindbar.md) is set to [false](https://developer.apple.com/documentation/swift/false) and vice versa.

## See Also

### Related Documentation

- [usesFindBar](usesfindbar.md): A Boolean value that indicates whether to use the find bar for this text view.

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [performFindPanelAction:](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel:](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel:](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel:](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel:](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel:](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.
