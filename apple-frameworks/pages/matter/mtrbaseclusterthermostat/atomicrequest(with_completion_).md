> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/atomicrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/atomicrequest(with:completion:))

# atomicRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AtomicRequest

## Declaration

```swift
func atomicRequest(with params: MTRThermostatClusterAtomicRequestParams, completion: @escaping @Sendable (MTRThermostatClusterAtomicResponseParams?, (any Error)?) -> Void)
```

```swift
func atomicRequest(with params: MTRThermostatClusterAtomicRequestParams) async throws -> MTRThermostatClusterAtomicResponseParams
```

<a id="discussion"></a>

## Discussion

Begins, Commits or Cancels an atomic write

# atomicRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command AtomicRequest

## Declaration

```objectivec
- (void) atomicRequestWithParams:(MTRThermostatClusterAtomicRequestParams *) params completion:(void (^)(MTRThermostatClusterAtomicResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

Begins, Commits or Cancels an atomic write
