> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/artrackedraycast/stoptracking()](https://developer.apple.com/documentation/arkit/artrackedraycast/stoptracking())

# stopTracking() (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Stops repeating the raycast query.

## Declaration

```swift
func stopTracking()
```

<a id="Discussion"></a>

## Discussion

A tracked raycast updates continuously until you stop it explicitly by calling [stopTracking()](stoptracking%28%29.md). A raycast will automatically stop when:

- ARKit calls [sessionWasInterrupted(\_:)](../arsessionobserver/sessionwasinterrupted%28__%29.md).
- You change the session’s configuration.
- You deallocate the [ARTrackedRaycast](../artrackedraycast.md).

# stopTracking (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+

Stops repeating the raycast query.

## Declaration

```objectivec
- (void) stopTracking;
```

<a id="Discussion"></a>

## Discussion

A tracked raycast updates continuously until you stop it explicitly by calling [stopTracking](stoptracking%28%29.md). A raycast will automatically stop when:

- ARKit calls [sessionWasInterrupted:](../arsessionobserver/sessionwasinterrupted%28__%29.md).
- You change the session’s configuration.
- You deallocate the [ARTrackedRaycast](../artrackedraycast.md).
