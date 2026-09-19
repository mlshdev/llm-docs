> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterpumpconfigurationandcontrol/writeattributelifetimerunninghours(withvalue:completionhandler:)

# writeAttributeLifetimeRunningHours(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeLifetimeRunningHoursWithValue:completion:

## Declaration

```swift
func writeAttributeLifetimeRunningHours(withValue value: NSNumber?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLifetimeRunningHours(withValue value: NSNumber?) async throws
```

# writeAttributeLifetimeRunningHoursWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeLifetimeRunningHoursWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeLifetimeRunningHoursWithValue:(NSNumber *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
