> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/readattributelongcharstring(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/readattributelongcharstring(completion:))

# readAttributeLongCharString(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLongCharString(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeLongCharString() async throws -> String
```

# readAttributeLongCharStringWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLongCharStringWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
