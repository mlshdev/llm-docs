> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/systemcoordinator](https://developer.apple.com/documentation/groupactivities/groupsession/systemcoordinator)

# systemCoordinator

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The system coordinator associated with an active session.

## Declaration

```swift
final var systemCoordinator: SystemCoordinator? { get async }
```

<a id="discussion"></a>

## Discussion

After you join an activity, access this property to determine if a system coordinator object is available. The system coordinator informs you when the device supports spatial Personas, and when the current participant’s spatial Persona is available to use in the current activity. When a spatial Persona is available, update the information you share for the activity and how you present that content. For more information, see [SystemCoordinator](../systemcoordinator.md).
