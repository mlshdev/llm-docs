> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustergroupkeymanagement/writeattributegroupkeymap(withvalue:params:completionhandler:)

# writeAttributeGroupKeyMap(withValue:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeGroupKeyMapWithValue:params:completion:

## Declaration

```swift
func writeAttributeGroupKeyMap(withValue value: [Any], params: MTRWriteParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeGroupKeyMap(withValue value: [Any], params: MTRWriteParams?) async throws
```

# writeAttributeGroupKeyMapWithValue:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use writeAttributeGroupKeyMapWithValue:params:completion:

## Declaration

```objectivec
- (void) writeAttributeGroupKeyMapWithValue:(NSArray *) value params:(MTRWriteParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
