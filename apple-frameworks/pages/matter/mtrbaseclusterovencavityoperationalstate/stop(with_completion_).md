> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterovencavityoperationalstate/stop(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterovencavityoperationalstate/stop(with:completion:))

# stop(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Stop

## Declaration

```swift
func stop(with params: MTROvenCavityOperationalStateClusterStopParams?, completion: @escaping @Sendable (MTROvenCavityOperationalStateClusterOperationalCommandResponseParams?, (any Error)?) -> Void)
```

```swift
func stop(with params: MTROvenCavityOperationalStateClusterStopParams?) async throws -> MTROvenCavityOperationalStateClusterOperationalCommandResponseParams
```

<a id="discussion"></a>

## Discussion

This command SHALL be supported if the device supports remotely stopping the operation.

# stopWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command Stop

## Declaration

```objectivec
- (void) stopWithParams:(MTROvenCavityOperationalStateClusterStopParams *) params completion:(void (^)(MTROvenCavityOperationalStateClusterOperationalCommandResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command SHALL be supported if the device supports remotely stopping the operation.
