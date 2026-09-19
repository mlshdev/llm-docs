> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/writeattributenullablebitmap64(withvalue:completion:)

# writeAttributeNullableBitmap64(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeNullableBitmap64(withValue value: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeNullableBitmap64(withValue value: NSNumber?) async throws
```

# writeAttributeNullableBitmap64WithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeNullableBitmap64WithValue:(NSNumber *) value completion:(MTRStatusCompletion) completion;
```
