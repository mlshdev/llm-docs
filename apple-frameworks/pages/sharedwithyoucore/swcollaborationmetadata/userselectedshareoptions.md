> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata/userselectedshareoptions](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/userselectedshareoptions)

# userSelectedShareOptions (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The selected collaboration options from the person who sends the invitation.

## Declaration

```swift
@NSCopying var userSelectedShareOptions: SWCollaborationShareOptions? { get set }
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing metadata attributes

- [collaborationIdentifier](collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.

# userSelectedShareOptions (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The selected collaboration options from the person who sends the invitation.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) SWCollaborationShareOptions * userSelectedShareOptions;
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

## See Also

### Accessing metadata attributes

- [collaborationIdentifier](collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.
