> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:didoutputcollaborationdata:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didoutputcollaborationdata:))

# session(\_:didOutputCollaborationData:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Provides information for nearby users about your perspective in the environment.

## Declaration

```swift
optional func session(_ session: ARSession, didOutputCollaborationData data: ARSession.CollaborationData)
```

## Parameters

- `session`: The app’s collaborative session.
- `data`: The information to share with participants.

<a id="Discussion"></a>

## Discussion

The data parameter contains information about your perspective in the physical environment. When ARKit invokes this function, send the `data` object to nearby users. The users update their session with your data to gain your app’s model of the physical environment in addition to their own. For more information, see [isCollaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

For an example app that implements this callback, see [Creating a collaborative session](../creating-a-collaborative-session.md).

# session:didOutputCollaborationData: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Provides information for nearby users about your perspective in the environment.

## Declaration

```objectivec
- (void) session:(ARSession *) session didOutputCollaborationData:(ARCollaborationData *) data;
```

## Parameters

- `session`: The app’s collaborative session.
- `data`: The information to share with participants.

<a id="Discussion"></a>

## Discussion

The data parameter contains information about your perspective in the physical environment. When ARKit invokes this function, send the `data` object to nearby users. The users update their session with your data to gain your app’s model of the physical environment in addition to their own. For more information, see [collaborationEnabled](../arworldtrackingconfiguration/iscollaborationenabled.md).

For an example app that implements this callback, see [Creating a collaborative session](../creating-a-collaborative-session.md).
