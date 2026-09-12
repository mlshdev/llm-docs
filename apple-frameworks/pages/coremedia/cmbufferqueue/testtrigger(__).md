> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/testtrigger(_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueue/testtrigger(_:))

# testTrigger(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Tests a trigger condition.

## Declaration

```swift
func testTrigger(_ triggerToken: CMBufferQueue.TriggerToken) -> Bool
```

## See Also

### Managing Triggers

- [installTrigger(condition:\_:)](installtrigger%28condition___%29.md): Installs a trigger on the queue.
- [removeTrigger(\_:)](removetrigger%28__%29.md): Removes a trigger from the queue.
- [CMBufferQueue.TriggerToken](triggertoken.md): A type alias for a trigger token.
- [CMBufferQueue.TriggerCondition](triggercondition.md): An enumeration of trigger conditions.
