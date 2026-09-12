> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/lockdoor(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/lockdoor(completion:))

# lockDoor(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
func lockDoor(completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func lockDoor() async throws
```

# lockDoorWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) lockDoorWithCompletion:(MTRStatusCompletion) completion;
```
