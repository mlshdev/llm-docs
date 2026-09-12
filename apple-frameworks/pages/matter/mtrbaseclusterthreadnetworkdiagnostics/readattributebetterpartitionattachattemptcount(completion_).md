> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributebetterpartitionattachattemptcount(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterthreadnetworkdiagnostics/readattributebetterpartitionattachattemptcount(completion:))

# readAttributeBetterPartitionAttachAttemptCount(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func readAttributeBetterPartitionAttachAttemptCount(completion: @escaping @Sendable (NSNumber?, (any Error)?) -> Void)
```

```swift
func readAttributeBetterPartitionAttachAttemptCount() async throws -> NSNumber
```

# readAttributeBetterPartitionAttachAttemptCountWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) readAttributeBetterPartitionAttachAttemptCountWithCompletion:(void (^)(NSNumber *value, NSError *error)) completion;
```
