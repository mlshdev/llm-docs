> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement/registerclient(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement/registerclient(with:completion:))

# registerClient(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RegisterClient

## Declaration

```swift
func registerClient(with params: MTRICDManagementClusterRegisterClientParams, completion: @escaping @Sendable (MTRICDManagementClusterRegisterClientResponseParams?, (any Error)?) -> Void)
```

```swift
func registerClient(with params: MTRICDManagementClusterRegisterClientParams) async throws -> MTRICDManagementClusterRegisterClientResponseParams
```

<a id="discussion"></a>

## Discussion

This command allows a client to register itself with the ICD to be notified when the device is available for communication.

# registerClientWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command RegisterClient

## Declaration

```objectivec
- (void) registerClientWithParams:(MTRICDManagementClusterRegisterClientParams *) params completion:(void (^)(MTRICDManagementClusterRegisterClientResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command allows a client to register itself with the ICD to be notified when the device is available for communication.
