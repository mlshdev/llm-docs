> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterpumpconfigurationandcontrol/writeattributeoperationmode(withvalue:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterpumpconfigurationandcontrol/writeattributeoperationmode(withvalue:completionhandler:))

# writeAttributeOperationMode(withValue:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOperationModeWithValue:completion:

## Declaration

```swift
func writeAttributeOperationMode(withValue value: NSNumber, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeOperationMode(withValue value: NSNumber) async throws
```

# writeAttributeOperationModeWithValue:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeOperationModeWithValue:completion:

## Declaration

```objectivec
- (void) writeAttributeOperationModeWithValue:(NSNumber *) value completionHandler:(MTRStatusCompletion) completionHandler;
```
