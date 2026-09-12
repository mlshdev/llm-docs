> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlevelcontrol/writeattributedefaultmoverate(withvalue:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlevelcontrol/writeattributedefaultmoverate(withvalue:params:completionhandler:))

# writeAttributeDefaultMoveRate(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeDefaultMoveRateWithValue:params:completion:

## Declaration

```swift
func writeAttributeDefaultMoveRate(withValue value: NSNumber?, params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeDefaultMoveRate(withValue value: NSNumber?, params: MTRWriteParams?) async throws
```

# writeAttributeDefaultMoveRateWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeDefaultMoveRateWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeDefaultMoveRateWithValue:(NSNumber *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
