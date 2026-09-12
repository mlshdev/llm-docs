> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/writeattributeaveragermsundervoltagecounter(withvalue:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/writeattributeaveragermsundervoltagecounter(withvalue:params:completionhandler:))

# writeAttributeAverageRmsUnderVoltageCounter(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeAverageRmsUnderVoltageCounterWithValue:params:completion:

## Declaration

```swift
func writeAttributeAverageRmsUnderVoltageCounter(withValue value: NSNumber, params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeAverageRmsUnderVoltageCounter(withValue value: NSNumber, params: MTRWriteParams?) async throws
```

# writeAttributeAverageRmsUnderVoltageCounterWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeAverageRmsUnderVoltageCounterWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeAverageRmsUnderVoltageCounterWithValue:(NSNumber *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
