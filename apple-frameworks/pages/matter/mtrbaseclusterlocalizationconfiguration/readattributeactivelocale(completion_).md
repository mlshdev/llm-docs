> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlocalizationconfiguration/readattributeactivelocale(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlocalizationconfiguration/readattributeactivelocale(completion:))

# readAttributeActiveLocale(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeActiveLocale(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeActiveLocale() async throws -> String
```

# readAttributeActiveLocaleWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeActiveLocaleWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
