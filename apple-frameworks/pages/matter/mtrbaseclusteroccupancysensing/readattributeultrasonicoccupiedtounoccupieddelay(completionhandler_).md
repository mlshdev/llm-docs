> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroccupancysensing/readattributeultrasonicoccupiedtounoccupieddelay(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroccupancysensing/readattributeultrasonicoccupiedtounoccupieddelay(completionhandler:))

# readAttributeUltrasonicOccupiedToUnoccupiedDelay(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeUltrasonicOccupiedToUnoccupiedDelayWithCompletion:

## Declaration

```swift
func readAttributeUltrasonicOccupiedToUnoccupiedDelay(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeUltrasonicOccupiedToUnoccupiedDelay() async throws -> NSNumber
```

# readAttributeUltrasonicOccupiedToUnoccupiedDelayWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeUltrasonicOccupiedToUnoccupiedDelayWithCompletion:

## Declaration

```objectivec
- (void) readAttributeUltrasonicOccupiedToUnoccupiedDelayWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
