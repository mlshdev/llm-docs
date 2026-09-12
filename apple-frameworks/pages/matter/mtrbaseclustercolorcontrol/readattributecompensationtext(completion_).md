> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustercolorcontrol/readattributecompensationtext(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustercolorcontrol/readattributecompensationtext(completion:))

# readAttributeCompensationText(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeCompensationText(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeCompensationText() async throws -> String
```

# readAttributeCompensationTextWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeCompensationTextWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
