> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/usesfontpanel](https://developer.apple.com/documentation/appkit/nstextview/usesfontpanel)

# usesFontPanel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.

## Declaration

```swift
var usesFontPanel: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to make the text views sharing the receiver’s layout manager respond to messages from the Font panel and from the Font menu, and update the Font panel with the selection font whenever it changes, [false](https://developer.apple.com/documentation/swift/false) to disallow character attribute changes.

## See Also

### Related Documentation

- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.

### Working with panels

- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction(\_:)](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel(\_:)](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel(\_:)](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel(\_:)](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel(\_:)](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel(\_:)](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

# usesFontPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.

## Declaration

```objectivec
@property BOOL usesFontPanel;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) to make the text views sharing the receiver’s layout manager respond to messages from the Font panel and from the Font menu, and update the Font panel with the selection font whenever it changes, [false](https://developer.apple.com/documentation/swift/false) to disallow character attribute changes.

## See Also

### Related Documentation

- [rangeForUserCharacterAttributeChange](rangeforusercharacterattributechange.md): The range of characters affected by an action method that changes character (not paragraph) attributes.

### Working with panels

- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction:](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel:](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel:](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel:](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel:](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel:](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.
