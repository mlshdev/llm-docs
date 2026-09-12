> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusteraccountlogin/getsetuppin(with:expectedvalues:expectedvalueinterval:completion:)](https://developer.apple.com/documentation/matter/mtrclusteraccountlogin/getsetuppin(with:expectedvalues:expectedvalueinterval:completion:))

# getSetupPIN(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getSetupPIN(with params: MTRAccountLoginClusterGetSetupPINParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRAccountLoginClusterGetSetupPINResponseParams?, (any Error)?) -> Void)
```

```swift
func setupPIN(with params: MTRAccountLoginClusterGetSetupPINParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRAccountLoginClusterGetSetupPINResponseParams
```

# getSetupPINWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getSetupPINWithParams:(MTRAccountLoginClusterGetSetupPINParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRAccountLoginClusterGetSetupPINResponseParams *data, NSError *error)) completion;
```
