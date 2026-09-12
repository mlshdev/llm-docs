> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/unlockdoor(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/unlockdoor(with:completion:))

# unlockDoor(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func unlockDoor(with params: MTRDoorLockClusterUnlockDoorParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unlockDoor(with params: MTRDoorLockClusterUnlockDoorParams?) async throws
```

# unlockDoorWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) unlockDoorWithParams:(MTRDoorLockClusterUnlockDoorParams *) params completion:(MTRStatusCompletion) completion;
```
