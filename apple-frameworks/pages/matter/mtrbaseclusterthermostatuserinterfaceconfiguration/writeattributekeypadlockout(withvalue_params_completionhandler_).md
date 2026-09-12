> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout(withvalue:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostatuserinterfaceconfiguration/writeattributekeypadlockout(withvalue:params:completionhandler:))

# writeAttributeKeypadLockout(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeKeypadLockoutWithValue:params:completion:

## Declaration

```swift
func writeAttributeKeypadLockout(withValue value: NSNumber, params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeKeypadLockout(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeKeypadLockoutWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeKeypadLockoutWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeKeypadLockoutWithValue:(NSNumber *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
