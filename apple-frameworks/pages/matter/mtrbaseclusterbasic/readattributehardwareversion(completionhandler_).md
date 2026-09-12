> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasic/readattributehardwareversion(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasic/readattributehardwareversion(completionhandler:))

# readAttributeHardwareVersion(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeHardwareVersionWithCompletion:

## Declaration

```swift
func readAttributeHardwareVersion(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeHardwareVersion() async throws -> NSNumber
```

# readAttributeHardwareVersionWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeHardwareVersionWithCompletion:

## Declaration

```objectivec
- (void) readAttributeHardwareVersionWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
