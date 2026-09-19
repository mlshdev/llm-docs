> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclustertestcluster/testemittesteventrequest(with:expectedvalues:expectedvalueinterval:completionhandler:)

# testEmitTestEventRequest(with:expectedValues:expectedValueInterval:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEmitTestEventRequestWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```swift
func testEmitTestEventRequest(with params: MTRTestClusterClusterTestEmitTestEventRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completionHandler: @escaping @Sendable (MTRTestClusterClusterTestEmitTestEventResponseParams?, (any Error)?) -> Void)
```

```swift
func testEmitTestEventRequest(with params: MTRTestClusterClusterTestEmitTestEventRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRTestClusterClusterTestEmitTestEventResponseParams
```

# testEmitTestEventRequestWithParams:expectedValues:expectedValueInterval:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEmitTestEventRequestWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```objectivec
- (void) testEmitTestEventRequestWithParams:(MTRTestClusterClusterTestEmitTestEventRequestParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completionHandler:(void (^)(MTRTestClusterClusterTestEmitTestEventResponseParams *data, NSError *error)) completionHandler;
```
