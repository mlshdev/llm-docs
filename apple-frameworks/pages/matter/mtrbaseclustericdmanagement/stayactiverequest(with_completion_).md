> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement/stayactiverequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement/stayactiverequest(with:completion:))

# stayActiveRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StayActiveRequest

## Declaration

```swift
func stayActiveRequest(with params: MTRICDManagementClusterStayActiveRequestParams, completion: @escaping @Sendable (MTRICDManagementClusterStayActiveResponseParams?, (any Error)?) -> Void)
```

```swift
func stayActiveRequest(with params: MTRICDManagementClusterStayActiveRequestParams) async throws -> MTRICDManagementClusterStayActiveResponseParams
```

<a id="discussion"></a>

## Discussion

This command allows a client to request that the server stays in active mode for at least a given time duration (in milliseconds) from when this command is received.

# stayActiveRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command StayActiveRequest

## Declaration

```objectivec
- (void) stayActiveRequestWithParams:(MTRICDManagementClusterStayActiveRequestParams *) params completion:(void (^)(MTRICDManagementClusterStayActiveResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command allows a client to request that the server stays in active mode for at least a given time duration (in milliseconds) from when this command is received.
