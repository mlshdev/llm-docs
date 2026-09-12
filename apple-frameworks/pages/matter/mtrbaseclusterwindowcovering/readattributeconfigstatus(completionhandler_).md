> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwindowcovering/readattributeconfigstatus(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwindowcovering/readattributeconfigstatus(completionhandler:))

# readAttributeConfigStatus(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeConfigStatusWithCompletion:

## Declaration

```swift
func readAttributeConfigStatus(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeConfigStatus() async throws -> NSNumber
```

# readAttributeConfigStatusWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeConfigStatusWithCompletion:

## Declaration

```objectivec
- (void) readAttributeConfigStatusWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
