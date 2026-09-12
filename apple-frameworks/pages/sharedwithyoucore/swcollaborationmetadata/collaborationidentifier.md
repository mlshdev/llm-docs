> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata/collaborationidentifier](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/collaborationidentifier)

# collaborationIdentifier (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A globally unique identifier that the app hosting the collaboration provides.

## Declaration

```swift
var collaborationIdentifier: SWCollaborationIdentifier { get }
```

<a id="Discussion"></a>

## Discussion

This identifier is unique across platforms and sharing sessions.

## See Also

### Accessing metadata attributes

- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.
- [userSelectedShareOptions](userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.

# collaborationIdentifier (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A globally unique identifier that the app hosting the collaboration provides.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) SWCollaborationIdentifier collaborationIdentifier;
```

<a id="Discussion"></a>

## Discussion

This identifier is unique across platforms and sharing sessions.

## See Also

### Accessing metadata attributes

- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [initiatorNameComponents](initiatornamecomponents.md): The name of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.
- [userSelectedShareOptions](userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.
