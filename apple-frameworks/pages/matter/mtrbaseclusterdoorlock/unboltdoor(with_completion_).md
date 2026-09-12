> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/unboltdoor(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/unboltdoor(with:completion:))

# unboltDoor(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command UnboltDoor

## Declaration

```swift
func unboltDoor(with params: MTRDoorLockClusterUnboltDoorParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unboltDoor(with params: MTRDoorLockClusterUnboltDoorParams?) async throws
```

<a id="discussion"></a>

## Discussion

This command causes the lock device to unlock the door without pulling the latch.

# unboltDoorWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command UnboltDoor

## Declaration

```objectivec
- (void) unboltDoorWithParams:(MTRDoorLockClusterUnboltDoorParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command causes the lock device to unlock the door without pulling the latch.
