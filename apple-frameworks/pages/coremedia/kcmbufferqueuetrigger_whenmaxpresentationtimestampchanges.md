> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmbufferqueuetrigger_whenmaxpresentationtimestampchanges](https://developer.apple.com/documentation/coremedia/kcmbufferqueuetrigger_whenmaxpresentationtimestampchanges)

# kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Trigger fires when the maximum presentation timestamp changes (triggerDuration is ignored).

## Declaration

```swift
var kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges: CMBufferQueueTriggerCondition { get }
```

## See Also

### Constants

- [kCMBufferQueueTrigger_WhenDurationBecomesLessThan](kcmbufferqueuetrigger_whendurationbecomeslessthan.md): Trigger fires when queue duration becomes less than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesLessThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomeslessthanorequalto.md): Trigger fires when queue duration becomes less than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthan.md): Trigger fires when queue duration becomes greater than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequalto.md): Trigger fires when queue duration becomes greater than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenMinPresentationTimeStampChanges](kcmbufferqueuetrigger_whenminpresentationtimestampchanges.md): Trigger fires when the minimum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenDataBecomesReady](kcmbufferqueuetrigger_whendatabecomesready.md): Trigger fires when next dequeueable buffer becomes ready (that is, [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md) will now succeed). (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenEndOfDataReached](kcmbufferqueuetrigger_whenendofdatareached.md): Trigger fires when CMBufferQueueIsAtEndOfData’s condition becomes true. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenReset](kcmbufferqueuetrigger_whenreset.md): Trigger fires when CMBufferQueueReset called. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenBufferCountBecomesLessThan](kcmbufferqueuetrigger_whenbuffercountbecomeslessthan.md): Trigger fires when buffer count becomes less than the specified threshold number.
- [kCMBufferQueueTrigger_WhenBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whenbuffercountbecomesgreaterthan.md): Trigger fires when buffer count becomes \> the specified threshold number.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualToAndBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequaltoandbuffercountbecomesgreaterthan.md)

# kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Trigger fires when the maximum presentation timestamp changes (triggerDuration is ignored).

## Declaration

```objectivec
kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges
```

## See Also

### Constants

- [kCMBufferQueueTrigger_WhenDurationBecomesLessThan](kcmbufferqueuetrigger_whendurationbecomeslessthan.md): Trigger fires when queue duration becomes less than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesLessThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomeslessthanorequalto.md): Trigger fires when queue duration becomes less than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthan.md): Trigger fires when queue duration becomes greater than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequalto.md): Trigger fires when queue duration becomes greater than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenMinPresentationTimeStampChanges](kcmbufferqueuetrigger_whenminpresentationtimestampchanges.md): Trigger fires when the minimum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenDataBecomesReady](kcmbufferqueuetrigger_whendatabecomesready.md): Trigger fires when next dequeueable buffer becomes ready (that is, [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md) will now succeed). (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenEndOfDataReached](kcmbufferqueuetrigger_whenendofdatareached.md): Trigger fires when CMBufferQueueIsAtEndOfData’s condition becomes true. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenReset](kcmbufferqueuetrigger_whenreset.md): Trigger fires when CMBufferQueueReset called. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenBufferCountBecomesLessThan](kcmbufferqueuetrigger_whenbuffercountbecomeslessthan.md): Trigger fires when buffer count becomes less than the specified threshold number.
- [kCMBufferQueueTrigger_WhenBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whenbuffercountbecomesgreaterthan.md): Trigger fires when buffer count becomes \> the specified threshold number.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualToAndBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequaltoandbuffercountbecomesgreaterthan.md)
