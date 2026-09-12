> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/delegate](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/delegate)

# delegate (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The delegate object for the collaboration view.

## Declaration

```swift
weak var delegate: (any SWCollaborationViewDelegate)? { get set }
```

## See Also

### Accessing view attributes

- [activeParticipantCount](activeparticipantcount.md): The number of participants in a collaboration.
- [cloudSharingDelegate](cloudsharingdelegate.md): The delegate object for the cloud-sharing controller.
- [headerImage](headerimage.md): The image that the system displays in the header.
- [headerSubtitle](headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](menuformrepresentation-3sffe.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
- [menuFormRepresentation](menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.

# delegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The delegate object for the collaboration view.

## Declaration

```objectivec
@property (nonatomic, weak) id<SWCollaborationViewDelegate> delegate;
```

## See Also

### Accessing view attributes

- [activeParticipantCount](activeparticipantcount.md): The number of participants in a collaboration.
- [cloudSharingDelegate](cloudsharingdelegate.md): The delegate object for the cloud-sharing controller.
- [headerImage](headerimage.md): The image that the system displays in the header.
- [headerSubtitle](headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
