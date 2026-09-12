> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/writeattributewriteonlyint8u(withvalue:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/writeattributewriteonlyint8u(withvalue:params:completionhandler:))

# writeAttributeWriteOnlyInt8u(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use writeAttributeWriteOnlyInt8uWithValue:params:completion:

## Declaration

```swift
func writeAttributeWriteOnlyInt8u(withValue value: NSNumber, params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeWriteOnlyInt8u(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeWriteOnlyInt8uWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use writeAttributeWriteOnlyInt8uWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeWriteOnlyInt8uWithValue:(NSNumber *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
