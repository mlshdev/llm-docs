> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/simplestructechorequest(with:completion:)

# simpleStructEchoRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func simpleStructEchoRequest(with params: MTRUnitTestingClusterSimpleStructEchoRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterSimpleStructResponseParams?, (any Error)?) -> Void)
```

```swift
func simpleStructEchoRequest(with params: MTRUnitTestingClusterSimpleStructEchoRequestParams) async throws -> MTRUnitTestingClusterSimpleStructResponseParams
```

# simpleStructEchoRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) simpleStructEchoRequestWithParams:(MTRUnitTestingClusterSimpleStructEchoRequestParams *) params completion:(void (^)(MTRUnitTestingClusterSimpleStructResponseParams *data, NSError *error)) completion;
```
