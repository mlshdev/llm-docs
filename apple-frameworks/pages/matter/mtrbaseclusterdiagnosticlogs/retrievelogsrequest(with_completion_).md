> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdiagnosticlogs/retrievelogsrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdiagnosticlogs/retrievelogsrequest(with:completion:))

# retrieveLogsRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func retrieveLogsRequest(with params: MTRDiagnosticLogsClusterRetrieveLogsRequestParams, completion: @escaping @Sendable (MTRDiagnosticLogsClusterRetrieveLogsResponseParams?, (any Error)?) -> Void)
```

```swift
func retrieveLogsRequest(with params: MTRDiagnosticLogsClusterRetrieveLogsRequestParams) async throws -> MTRDiagnosticLogsClusterRetrieveLogsResponseParams
```

# retrieveLogsRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) retrieveLogsRequestWithParams:(MTRDiagnosticLogsClusterRetrieveLogsRequestParams *) params completion:(void (^)(MTRDiagnosticLogsClusterRetrieveLogsResponseParams *data, NSError *error)) completion;
```
