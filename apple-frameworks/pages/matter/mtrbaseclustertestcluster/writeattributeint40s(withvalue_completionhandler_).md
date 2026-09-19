> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/writeattributeint40s(withvalue:completionhandler:)

# writeAttributeInt40s(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeInt40sWithValue:completion:

## Declaration

```swift
func writeAttributeInt40s(withValue value: NSNumber, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeInt40s(withValue value: NSNumber) async throws
```

# writeAttributeInt40sWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeInt40sWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeInt40sWithValue:(NSNumber *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
