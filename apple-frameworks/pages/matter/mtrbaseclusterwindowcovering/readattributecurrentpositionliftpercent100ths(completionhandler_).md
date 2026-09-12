> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwindowcovering/readattributecurrentpositionliftpercent100ths(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwindowcovering/readattributecurrentpositionliftpercent100ths(completionhandler:))

# readAttributeCurrentPositionLiftPercent100ths(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeCurrentPositionLiftPercent100thsWithCompletion:

## Declaration

```swift
func readAttributeCurrentPositionLiftPercent100ths(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeCurrentPositionLiftPercent100ths() async throws -> NSNumber
```

# readAttributeCurrentPositionLiftPercent100thsWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeCurrentPositionLiftPercent100thsWithCompletion:

## Declaration

```objectivec
- (void) readAttributeCurrentPositionLiftPercent100thsWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
