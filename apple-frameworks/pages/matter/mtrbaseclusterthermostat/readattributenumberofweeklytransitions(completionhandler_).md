> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributenumberofweeklytransitions(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributenumberofweeklytransitions(completionhandler:))

# readAttributeNumberOfWeeklyTransitions(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeNumberOfWeeklyTransitionsWithCompletion:

## Declaration

```swift
func readAttributeNumberOfWeeklyTransitions(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeNumberOfWeeklyTransitions() async throws -> NSNumber
```

# readAttributeNumberOfWeeklyTransitionsWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeNumberOfWeeklyTransitionsWithCompletion:

## Declaration

```objectivec
- (void) readAttributeNumberOfWeeklyTransitionsWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
