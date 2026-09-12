> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributeunoccupiedsetback(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributeunoccupiedsetback(completionhandler:))

# readAttributeUnoccupiedSetback(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeUnoccupiedSetbackWithCompletion:

## Declaration

```swift
func readAttributeUnoccupiedSetback(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeUnoccupiedSetback() async throws -> NSNumber
```

# readAttributeUnoccupiedSetbackWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeUnoccupiedSetbackWithCompletion:

## Declaration

```objectivec
- (void) readAttributeUnoccupiedSetbackWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
