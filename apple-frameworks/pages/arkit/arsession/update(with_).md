> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/update(with:)](https://developer.apple.com/documentation/arkit/arsession/update(with:))

# update(with:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Updates your session with information about the physical environment that is collected by another user.

## Declaration

```swift
func update(with collaborationData: ARSession.CollaborationData)
```

<a id="Discussion"></a>

## Discussion

Call this function to update a session when the app receives collaboration data from other users that are participating in a multiuser AR experience. Your app receives this data when multiple users scan different parts of an environment and share that information with your app over the network. For more information, see [isCollaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

Collaboration is supported for world tracking configurations only.

## See Also

### Managing collaboration

- [ARSession.CollaborationData](collaborationdata.md): An object that holds information that a user has collected about the physical environment.

# updateWithCollaborationData: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Updates your session with information about the physical environment that is collected by another user.

## Declaration

```objectivec
- (void) updateWithCollaborationData:(ARCollaborationData *) collaborationData;
```

<a id="Discussion"></a>

## Discussion

Call this function to update a session when the app receives collaboration data from other users that are participating in a multiuser AR experience. Your app receives this data when multiple users scan different parts of an environment and share that information with your app over the network. For more information, see [collaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

Collaboration is supported for world tracking configurations only.

## See Also

### Managing collaboration

- [ARCollaborationData](collaborationdata.md): An object that holds information that a user has collected about the physical environment.
