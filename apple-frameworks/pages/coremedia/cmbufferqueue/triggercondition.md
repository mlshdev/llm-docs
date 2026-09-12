> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueue/triggercondition](https://developer.apple.com/documentation/coremedia/cmbufferqueue/triggercondition)

# CMBufferQueue.TriggerCondition

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An enumeration of trigger conditions.

## Declaration

```swift
enum TriggerCondition
```

## Topics

### Conditions

- [CMBufferQueue.TriggerCondition.whenBufferCountBecomesGreaterThan(\_:)](triggercondition/whenbuffercountbecomesgreaterthan%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenBufferCountBecomesLessThan(\_:)](triggercondition/whenbuffercountbecomeslessthan%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenDataBecomesReady](triggercondition/whendatabecomesready.md)
- [CMBufferQueue.TriggerCondition.whenDurationBecomesGreaterThan(\_:)](triggercondition/whendurationbecomesgreaterthan%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenDurationBecomesGreaterThanOrEqualTo(\_:)](triggercondition/whendurationbecomesgreaterthanorequalto%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenDurationBecomesLessThan(\_:)](triggercondition/whendurationbecomeslessthan%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenDurationBecomesLessThanOrEqualTo(\_:)](triggercondition/whendurationbecomeslessthanorequalto%28__%29.md)
- [CMBufferQueue.TriggerCondition.whenEndOfDataReached](triggercondition/whenendofdatareached.md)
- [CMBufferQueue.TriggerCondition.whenMaxPresentationTimeStampChanges](triggercondition/whenmaxpresentationtimestampchanges.md)
- [CMBufferQueue.TriggerCondition.whenMinPresentationTimeStampChanges](triggercondition/whenminpresentationtimestampchanges.md)
- [CMBufferQueue.TriggerCondition.whenReset](triggercondition/whenreset.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Triggers

- [installTrigger(condition:\_:)](installtrigger%28condition___%29.md): Installs a trigger on the queue.
- [removeTrigger(\_:)](removetrigger%28__%29.md): Removes a trigger from the queue.
- [testTrigger(\_:)](testtrigger%28__%29.md): Tests a trigger condition.
- [CMBufferQueue.TriggerToken](triggertoken.md): A type alias for a trigger token.
