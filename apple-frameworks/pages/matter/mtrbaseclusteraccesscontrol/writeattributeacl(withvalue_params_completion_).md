> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteraccesscontrol/writeattributeacl(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteraccesscontrol/writeattributeacl(withvalue:params:completion:))

# writeAttributeACL(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeACL(withValue value: [Any], params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeACL(withValue value: [Any], params: MTRWriteParams?) async throws
```

# writeAttributeACLWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeACLWithValue:(NSArray *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
