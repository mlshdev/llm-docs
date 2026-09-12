> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributelanguage(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributelanguage(completion:))

# readAttributeLanguage(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeLanguage(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeLanguage() async throws -> String
```

# readAttributeLanguageWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeLanguageWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
