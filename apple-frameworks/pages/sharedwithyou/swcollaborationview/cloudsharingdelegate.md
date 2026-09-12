> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview/cloudsharingdelegate](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview/cloudsharingdelegate)

# cloudSharingDelegate (Swift)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The delegate object for the cloud-sharing controller.

## Declaration

```swift
weak var cloudSharingDelegate: (any UICloudSharingControllerDelegate)? { get set }
```

```swift
weak var cloudSharingDelegate: (any NSCloudSharingServiceDelegate)? { get set }
```

## See Also

### Accessing view attributes

- [activeParticipantCount](activeparticipantcount.md): The number of participants in a collaboration.
- [delegate](delegate.md): The delegate object for the collaboration view.
- [headerImage](headerimage.md): The image that the system displays in the header.
- [headerSubtitle](headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](menuformrepresentation-3sffe.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
- [menuFormRepresentation](menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.

# cloudSharingDelegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The delegate object for the cloud-sharing controller.

## Declaration

```objectivec
@property (nonatomic, weak) id<UICloudSharingControllerDelegate> cloudSharingDelegate;
```

```objectivec
@property (weak, nullable) id<NSCloudSharingServiceDelegate> cloudSharingDelegate;
```

## See Also

### Accessing view attributes

- [activeParticipantCount](activeparticipantcount.md): The number of participants in a collaboration.
- [delegate](delegate.md): The delegate object for the collaboration view.
- [headerImage](headerimage.md): The image that the system displays in the header.
- [headerSubtitle](headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
