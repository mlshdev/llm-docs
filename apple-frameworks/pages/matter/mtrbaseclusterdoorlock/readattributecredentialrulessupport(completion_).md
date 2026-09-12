> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/readattributecredentialrulessupport(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/readattributecredentialrulessupport(completion:))

# readAttributeCredentialRulesSupport(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCredentialRulesSupport(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeCredentialRulesSupport() async throws -> NSNumber
```

# readAttributeCredentialRulesSupportWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCredentialRulesSupportWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
