> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/orderfrontlistpanel(_:)](https://developer.apple.com/documentation/appkit/nstextview/orderfrontlistpanel(_:))

# orderFrontListPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Brings forward a panel allowing the user to manipulate text lists in the text view.

## Declaration

```swift
func orderFrontListPanel(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message. May be `nil`.

## See Also

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction(\_:)](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel(\_:)](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontSpacingPanel(\_:)](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel(\_:)](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel(\_:)](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

# orderFrontListPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Brings forward a panel allowing the user to manipulate text lists in the text view.

## Declaration

```objectivec
- (void) orderFrontListPanel:(id) sender;
```

## Parameters

- `sender`: The control sending the message. May be `nil`.

## See Also

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [performFindPanelAction:](performfindpanelaction%28__%29.md): Performs a find panel action specified by the sender’s tag.
- [orderFrontLinkPanel:](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontSpacingPanel:](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel:](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel:](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.
