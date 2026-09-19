> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusteronoff/writeattributeoffwaittime(withvalue:params:completionhandler:)

# writeAttributeOffWaitTime(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOffWaitTimeWithValue:params:completion:

## Declaration

```swift
func writeAttributeOffWaitTime(withValue value: NSNumber, params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOffWaitTime(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeOffWaitTimeWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOffWaitTimeWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeOffWaitTimeWithValue:(NSNumber *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
