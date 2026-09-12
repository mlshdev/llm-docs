> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbinding/writeattributebinding(withvalue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbinding/writeattributebinding(withvalue:completionhandler:))

# writeAttributeBinding(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeBindingWithValue:completion:

## Declaration

```swift
func writeAttributeBinding(withValue value: [Any], completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeBinding(withValue value: [Any]) async throws
```

# writeAttributeBindingWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeBindingWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeBindingWithValue:(NSArray *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
