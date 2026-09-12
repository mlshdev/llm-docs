> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteraccesscontrol/readattributesubjectsperaccesscontrolentry(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteraccesscontrol/readattributesubjectsperaccesscontrolentry(completion:))

# readAttributeSubjectsPerAccessControlEntry(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeSubjectsPerAccessControlEntry(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeSubjectsPerAccessControlEntry() async throws -> NSNumber
```

# readAttributeSubjectsPerAccessControlEntryWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeSubjectsPerAccessControlEntryWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
