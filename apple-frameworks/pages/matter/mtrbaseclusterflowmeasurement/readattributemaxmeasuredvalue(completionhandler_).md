> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterflowmeasurement/readattributemaxmeasuredvalue(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterflowmeasurement/readattributemaxmeasuredvalue(completionhandler:))

# readAttributeMaxMeasuredValue(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMaxMeasuredValueWithCompletion:

## Declaration

```swift
func readAttributeMaxMeasuredValue(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeMaxMeasuredValue() async throws -> NSNumber
```

# readAttributeMaxMeasuredValueWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeMaxMeasuredValueWithCompletion:

## Declaration

```objectivec
- (void) readAttributeMaxMeasuredValueWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
