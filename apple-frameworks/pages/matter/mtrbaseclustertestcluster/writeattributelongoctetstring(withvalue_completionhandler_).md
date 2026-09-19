> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/writeattributelongoctetstring(withvalue:completionhandler:)

# writeAttributeLongOctetString(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeLongOctetStringWithValue:completion:

## Declaration

```swift
func writeAttributeLongOctetString(withValue value: Data, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLongOctetString(withValue value: Data) async throws
```

# writeAttributeLongOctetStringWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeLongOctetStringWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeLongOctetStringWithValue:(NSData *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
