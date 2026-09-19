> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmbufferqueue/removetrigger(_:)

# removeTrigger(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Removes a trigger from the queue.

## Declaration

```swift
func removeTrigger(_ triggerToken: CMBufferQueue.TriggerToken) throws
```

## See Also

### Managing Triggers

- [installTrigger(condition:\_:)](installtrigger%28condition___%29.md): Installs a trigger on the queue.
- [testTrigger(\_:)](testtrigger%28__%29.md): Tests a trigger condition.
- [CMBufferQueue.TriggerToken](triggertoken.md): A type alias for a trigger token.
- [CMBufferQueue.TriggerCondition](triggercondition.md): An enumeration of trigger conditions.
