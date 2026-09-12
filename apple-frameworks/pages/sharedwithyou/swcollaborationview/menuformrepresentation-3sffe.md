> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/menuformrepresentation-3sffe](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/menuformrepresentation-3sffe)

# menuFormRepresentation

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** macOS 13.1+

Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.

## Declaration

```swift
@MainActor @objc @preconcurrency dynamic var menuFormRepresentation: NSMenuItem { get }
```

<a id="discussion"></a>

## Discussion

If this [SWCollaborationView](../swcollaborationview.md) instance is being set on an [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem), assign this property to the item’s `menuFormRepresentation` property.

## See Also

### Accessing view attributes

- [activeParticipantCount](activeparticipantcount.md): The number of participants in a collaboration.
- [cloudSharingDelegate](cloudsharingdelegate.md): The delegate object for the cloud-sharing controller.
- [delegate](delegate.md): The delegate object for the collaboration view.
- [headerImage](headerimage.md): The image that the system displays in the header.
- [headerSubtitle](headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
