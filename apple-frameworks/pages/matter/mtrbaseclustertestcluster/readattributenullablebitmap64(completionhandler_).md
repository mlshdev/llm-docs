> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/readattributenullablebitmap64(completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/readattributenullablebitmap64(completionhandler:))

# readAttributeNullableBitmap64(completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeNullableBitmap64WithCompletion:

## Declaration

```swift
func readAttributeNullableBitmap64(completionHandler: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeNullableBitmap64() async throws -> NSNumber
```

# readAttributeNullableBitmap64WithCompletionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use readAttributeNullableBitmap64WithCompletion:

## Declaration

```objectivec
- (void) readAttributeNullableBitmap64WithCompletionHandler:(void (^)(NSNumber *value, NSError *error)) completionHandler;
```
