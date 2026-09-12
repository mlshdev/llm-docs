> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinatorplaybackcontrolcommand/originator](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorplaybackcontrolcommand/originator)

# originator (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The participant that causes the coordinator to issue the command.

## Declaration

```swift
var originator: AVCoordinatedPlaybackParticipant? { get }
```

<a id="Discussion"></a>

## Discussion

Only commands that the system issues on behalf of another participant contain an originator. Local commands to coordinate rate change, or those that originate from a call to [reapplyCurrentItemStateToPlaybackControlDelegate()](../avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md), don’t.

> **Note**

>  You can use the existance of an originator value to show a user interface that indicates another partipant’s action.

## See Also

### Accessing command details

- [expectedCurrentItemIdentifier](expectedcurrentitemidentifier.md): An item identifier the coordinator issues the command for.

# originator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The participant that causes the coordinator to issue the command.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVCoordinatedPlaybackParticipant * originator;
```

<a id="Discussion"></a>

## Discussion

Only commands that the system issues on behalf of another participant contain an originator. Local commands to coordinate rate change, or those that originate from a call to [reapplyCurrentItemStateToPlaybackControlDelegate](../avdelegatingplaybackcoordinator/reapplycurrentitemstatetoplaybackcontroldelegate%28%29.md), don’t.

> **Note**

>  You can use the existance of an originator value to show a user interface that indicates another partipant’s action.

## See Also

### Accessing command details

- [expectedCurrentItemIdentifier](expectedcurrentitemidentifier.md): An item identifier the coordinator issues the command for.
