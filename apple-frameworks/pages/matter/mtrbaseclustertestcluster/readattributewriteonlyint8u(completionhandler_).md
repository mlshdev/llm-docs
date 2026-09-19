> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/readattributewriteonlyint8u(completionhandler:)

# readAttributeWriteOnlyInt8u(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use readAttributeWriteOnlyInt8uWithCompletion:

## Declaration

```swift
func readAttributeWriteOnlyInt8u(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeWriteOnlyInt8u() async throws -> NSNumber
```

# readAttributeWriteOnlyInt8uWithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ (deprecated in 16.4) · iPadOS 16.2+ (deprecated in 16.4) · Mac Catalyst 16.2+ (deprecated in 16.4) · macOS 13.1+ (deprecated in 13.3) · tvOS 16.2+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.2+ (deprecated in 9.4)

> Please use readAttributeWriteOnlyInt8uWithCompletion:

## Declaration

```objectivec
- (void) readAttributeWriteOnlyInt8uWithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
