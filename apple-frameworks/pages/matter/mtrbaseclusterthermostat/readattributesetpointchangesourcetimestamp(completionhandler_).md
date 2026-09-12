> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthermostat/readattributesetpointchangesourcetimestamp(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthermostat/readattributesetpointchangesourcetimestamp(completionhandler:))

# readAttributeSetpointChangeSourceTimestamp(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSetpointChangeSourceTimestampWithCompletion:

## Declaration

```swift
func readAttributeSetpointChangeSourceTimestamp(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeSetpointChangeSourceTimestamp() async throws -> NSNumber
```

# readAttributeSetpointChangeSourceTimestampWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeSetpointChangeSourceTimestampWithCompletion:

## Declaration

```objectivec
- (void) readAttributeSetpointChangeSourceTimestampWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
