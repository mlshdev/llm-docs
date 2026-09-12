> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclustericdmanagement/readattributeuseractivemodetriggerinstruction(completion:))

# readAttributeUserActiveModeTriggerInstruction(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
func readAttributeUserActiveModeTriggerInstruction(completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
func readAttributeUserActiveModeTriggerInstruction() async throws -> String
```

# readAttributeUserActiveModeTriggerInstructionWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) readAttributeUserActiveModeTriggerInstructionWithCompletion:(void (^)(NSString *value, NSError *error)) completion;
```
