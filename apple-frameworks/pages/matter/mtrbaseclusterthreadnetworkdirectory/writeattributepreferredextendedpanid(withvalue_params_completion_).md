> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid(withvalue:params:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdirectory/writeattributepreferredextendedpanid(withvalue:params:completion:))

# writeAttributePreferredExtendedPanID(withValue:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func writeAttributePreferredExtendedPanID(withValue value: Data?, params: MTRWriteParams?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributePreferredExtendedPanID(withValue value: Data?, params: MTRWriteParams?) async throws
```

# writeAttributePreferredExtendedPanIDWithValue:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) writeAttributePreferredExtendedPanIDWithValue:(NSData *) value params:(MTRWriteParams *) params completion:(MTRStatusCompletion) completion;
```
