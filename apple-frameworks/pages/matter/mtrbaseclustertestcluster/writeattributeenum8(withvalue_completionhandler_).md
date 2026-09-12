> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/writeattributeenum8(withvalue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/writeattributeenum8(withvalue:completionhandler:))

# writeAttributeEnum8(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeEnum8WithValue:completion:

## Declaration

```swift
func writeAttributeEnum8(withValue value: NSNumber, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeEnum8(withValue value: NSNumber) async throws
```

# writeAttributeEnum8WithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeEnum8WithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeEnum8WithValue:(NSNumber *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
