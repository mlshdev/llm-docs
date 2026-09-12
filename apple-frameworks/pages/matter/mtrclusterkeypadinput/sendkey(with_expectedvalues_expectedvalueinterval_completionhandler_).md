> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterkeypadinput/sendkey(with:expectedvalues:expectedvalueinterval:completionhandler:)](https://developer.apple.com/documentation/matter/mtrclusterkeypadinput/sendkey(with:expectedvalues:expectedvalueinterval:completionhandler:))

# sendKey(with:expectedValues:expectedValueInterval:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use sendKeyWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```swift
func sendKey(with params: MTRKeypadInputClusterSendKeyParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completionHandler: @escaping @Sendable (MTRKeypadInputClusterSendKeyResponseParams?, (any Error)?) -> Void)
```

```swift
func sendKey(with params: MTRKeypadInputClusterSendKeyParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRKeypadInputClusterSendKeyResponseParams
```

# sendKeyWithParams:expectedValues:expectedValueInterval:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use sendKeyWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```objectivec
- (void) sendKeyWithParams:(MTRKeypadInputClusterSendKeyParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completionHandler:(void (^)(MTRKeypadInputClusterSendKeyResponseParams *data, NSError *error)) completionHandler;
```
