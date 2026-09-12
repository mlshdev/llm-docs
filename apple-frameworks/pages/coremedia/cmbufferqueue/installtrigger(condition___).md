> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/installtrigger(condition:_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueue/installtrigger(condition:_:))

# installTrigger(condition:\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Installs a trigger on the queue.

## Declaration

```swift
func installTrigger(condition: CMBufferQueue.TriggerCondition, _ body: CMBufferQueueTriggerHandler? = nil) throws -> CMBufferQueue.TriggerToken
```

## See Also

### Managing Triggers

- [removeTrigger(\_:)](removetrigger%28__%29.md): Removes a trigger from the queue.
- [testTrigger(\_:)](testtrigger%28__%29.md): Tests a trigger condition.
- [CMBufferQueue.TriggerToken](triggertoken.md): A type alias for a trigger token.
- [CMBufferQueue.TriggerCondition](triggercondition.md): An enumeration of trigger conditions.
