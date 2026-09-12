> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/performfindpanelaction(_:)](https://developer.apple.com/documentation/appkit/nstextview/performfindpanelaction(_:))

# performFindPanelAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs a find panel action specified by the sender’s tag.

## Declaration

```swift
func performFindPanelAction(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message. This method sends the [tag](../nscontrol/tag.md) method to determine what operation to perform. The list of possible tags is provided in Constants.

<a id="Discussion"></a>

## Discussion

This is the generic action method for the find menu and find panel, and can be overridden to implement a custom find panel.

## See Also

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [orderFrontLinkPanel(\_:)](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel(\_:)](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel(\_:)](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel(\_:)](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel(\_:)](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.

# performFindPanelAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs a find panel action specified by the sender’s tag.

## Declaration

```objectivec
- (void) performFindPanelAction:(id) sender;
```

## Parameters

- `sender`: The control sending the message. This method sends the [tag](../nscontrol/tag.md) method to determine what operation to perform. The list of possible tags is provided in Constants.

<a id="Discussion"></a>

## Discussion

This is the generic action method for the find menu and find panel, and can be overridden to implement a custom find panel.

## See Also

### Working with panels

- [usesFontPanel](usesfontpanel.md): A Boolean value that controls whether the text views sharing the receiver’s layout manager use the Font panel and Font menu.
- [usesFindPanel](usesfindpanel.md): A Boolean value that indicates whether the receiver allows for a find panel.
- [orderFrontLinkPanel:](orderfrontlinkpanel%28__%29.md): Brings forward a panel allowing the user to manipulate links in the text view.
- [orderFrontListPanel:](orderfrontlistpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text lists in the text view.
- [orderFrontSpacingPanel:](orderfrontspacingpanel%28__%29.md): Brings forward a panel allowing the user to manipulate text line heights, interline spacing, and paragraph spacing, in the text view.
- [orderFrontTablePanel:](orderfronttablepanel%28__%29.md): Brings forward a panel allowing the user to manipulate text tables in the text view.
- [orderFrontSubstitutionsPanel:](orderfrontsubstitutionspanel%28__%29.md): Brings forward a panel allowing the user to specify string substitutions in the text view.
