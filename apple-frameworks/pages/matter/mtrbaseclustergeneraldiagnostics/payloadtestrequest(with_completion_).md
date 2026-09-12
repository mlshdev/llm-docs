> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergeneraldiagnostics/payloadtestrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustergeneraldiagnostics/payloadtestrequest(with:completion:))

# payloadTestRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PayloadTestRequest

## Declaration

```swift
func payloadTestRequest(with params: MTRGeneralDiagnosticsClusterPayloadTestRequestParams, completion: @escaping @Sendable (MTRGeneralDiagnosticsClusterPayloadTestResponseParams?, (any Error)?) -> Void)
```

```swift
func payloadTestRequest(with params: MTRGeneralDiagnosticsClusterPayloadTestRequestParams) async throws -> MTRGeneralDiagnosticsClusterPayloadTestResponseParams
```

<a id="discussion"></a>

## Discussion

This command provides a means for certification tests or manufacturer’s internal tests to validate particular command handling and encoding constraints by generating a response of a given size.

# payloadTestRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command PayloadTestRequest

## Declaration

```objectivec
- (void) payloadTestRequestWithParams:(MTRGeneralDiagnosticsClusterPayloadTestRequestParams *) params completion:(void (^)(MTRGeneralDiagnosticsClusterPayloadTestResponseParams *data, NSError *error)) completion;
```

<a id="discussion"></a>

## Discussion

This command provides a means for certification tests or manufacturer’s internal tests to validate particular command handling and encoding constraints by generating a response of a given size.
