> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement/unregisterclient(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement/unregisterclient(with:completion:))

# unregisterClient(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command UnregisterClient

## Declaration

```swift
func unregisterClient(with params: MTRICDManagementClusterUnregisterClientParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unregisterClient(with params: MTRICDManagementClusterUnregisterClientParams) async throws
```

<a id="discussion"></a>

## Discussion

This command allows a client to unregister itself with the ICD.

# unregisterClientWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command UnregisterClient

## Declaration

```objectivec
- (void) unregisterClientWithParams:(MTRICDManagementClusterUnregisterClientParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command allows a client to unregister itself with the ICD.
