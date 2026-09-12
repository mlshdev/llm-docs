> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationmetadata/initiatornamecomponents](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationmetadata/initiatornamecomponents)

# initiatorNameComponents (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The name of the person who initiates the collaboration.

## Declaration

```swift
var initiatorNameComponents: PersonNameComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

The app that initiates a collaboration sets the `initiatorNameComponents` to allow the user to confirm the components before the system begins the collaboration. The value of the components will not be transmitted to recipients, and is `nil` before the system initiates a collaboration.

## See Also

### Accessing metadata attributes

- [collaborationIdentifier](collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.
- [userSelectedShareOptions](userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.

# initiatorNameComponents (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The name of the person who initiates the collaboration.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSPersonNameComponents * initiatorNameComponents;
```

<a id="Discussion"></a>

## Discussion

The app that initiates a collaboration sets the `initiatorNameComponents` to allow the user to confirm the components before the system begins the collaboration. The value of the components will not be transmitted to recipients, and is `nil` before the system initiates a collaboration.

## See Also

### Accessing metadata attributes

- [collaborationIdentifier](collaborationidentifier.md): A globally unique identifier that the app hosting the collaboration provides.
- [defaultShareOptions](defaultshareoptions.md): The collaboration options that the content supports.
- [initiatorHandle](initiatorhandle.md): The handle of the person who initiates the collaboration.
- [localIdentifier](localidentifier.md): A locally unique identifier for the item the metadata represents.
- [title](title.md): The title of the content.
- [userSelectedShareOptions](userselectedshareoptions.md): The selected collaboration options from the person who sends the invitation.
