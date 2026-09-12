> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/writeattributenullablecharstring(withvalue:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/writeattributenullablecharstring(withvalue:completion:))

# writeAttributeNullableCharString(withValue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func writeAttributeNullableCharString(withValue value: String?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func writeAttributeNullableCharString(withValue value: String?) async throws
```

# writeAttributeNullableCharStringWithValue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) writeAttributeNullableCharStringWithValue:(NSString *) value completion:(MTRStatusCompletion) completion;
```
