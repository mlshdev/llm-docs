> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterbasicinformation/writeattributelocation(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterbasicinformation/writeattributelocation(withvalue:completion:))

# writeAttributeLocation(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeLocation(withValue value: String, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeLocation(withValue value: String) async throws
```

# writeAttributeLocationWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeLocationWithValue:(NSString *) value completion:(MTRStatusCompletion) completion;
```
