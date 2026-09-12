> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteraccesscontrol/writeattributeacl(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteraccesscontrol/writeattributeacl(withvalue:completion:))

# writeAttributeACL(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeACL(withValue value: [Any], completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeACL(withValue value: [Any]) async throws
```

# writeAttributeACLWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeACLWithValue:(NSArray *) value completion:(MTRStatusCompletion) completion;
```
