> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteractions/readattributesetupurl(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteractions/readattributesetupurl(completion:))

# readAttributeSetupURL(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeSetupURL(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeSetupURL() async throws -> String
```

# readAttributeSetupURLWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeSetupURLWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
