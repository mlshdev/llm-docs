> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterpowersource/readattributebatreplacementdescription(completion:)

# readAttributeBatReplacementDescription(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeBatReplacementDescription(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeBatReplacementDescription() async throws -> String
```

# readAttributeBatReplacementDescriptionWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeBatReplacementDescriptionWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
