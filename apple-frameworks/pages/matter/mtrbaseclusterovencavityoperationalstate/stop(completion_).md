> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterovencavityoperationalstate/stop(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterovencavityoperationalstate/stop(completion:))

# stop(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func stop(completion: @escaping @Sendable (MTROvenCavityOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func stop() async throws -> MTROvenCavityOperationalStateClusterOperationalCommandResponseParams
```

# stopWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) stopWithCompletion:(void (^)(MTROvenCavityOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```
