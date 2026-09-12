> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasicinformation/writeattributelocation(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasicinformation/writeattributelocation(withvalue:params:completion:))

# writeAttributeLocation(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeLocation(withValue value: String, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLocation(withValue value: String, params: MTRWriteParams?) async throws
```

# writeAttributeLocationWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeLocationWithValue:(NSString *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
