> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraccountlogin/getsetuppin(with:expectedvalues:expectedvalueinterval:completionhandler:)](https://developer.apple.com/documentation/matter/mtrclusteraccountlogin/getsetuppin(with:expectedvalues:expectedvalueinterval:completionhandler:))

# getSetupPIN(with:expectedValues:expectedValueInterval:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getSetupPINWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```swift
func getSetupPIN(with params: MTRAccountLoginClusterGetSetupPINParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completionHandler: @escaping @Sendable (MTRAccountLoginClusterGetSetupPINResponseParams?, (any Error)?) -> Void)
```

```swift
func setupPIN(with params: MTRAccountLoginClusterGetSetupPINParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRAccountLoginClusterGetSetupPINResponseParams
```

# getSetupPINWithParams:expectedValues:expectedValueInterval:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getSetupPINWithParams:expectedValues:expectedValueInterval:completion:

## Declaration

```objectivec
- (void) getSetupPINWithParams:(MTRAccountLoginClusterGetSetupPINParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completionHandler:(void (^)(MTRAccountLoginClusterGetSetupPINResponseParams *data, NSError *error)) completionHandler;
```
