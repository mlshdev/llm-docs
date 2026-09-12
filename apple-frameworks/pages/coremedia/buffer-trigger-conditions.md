> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/buffer-trigger-conditions](https://developer.apple.com/documentation/coremedia/buffer-trigger-conditions)

# Buffer Trigger Conditions (Swift)

**Framework:** Core Media  
**Kind:** API Collection

The trigger conditions the framework supports.

## Topics

### Constants

- [kCMBufferQueueTrigger_WhenDurationBecomesLessThan](kcmbufferqueuetrigger_whendurationbecomeslessthan.md): Trigger fires when queue duration becomes less than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesLessThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomeslessthanorequalto.md): Trigger fires when queue duration becomes less than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthan.md): Trigger fires when queue duration becomes greater than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequalto.md): Trigger fires when queue duration becomes greater than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenMinPresentationTimeStampChanges](kcmbufferqueuetrigger_whenminpresentationtimestampchanges.md): Trigger fires when the minimum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges](kcmbufferqueuetrigger_whenmaxpresentationtimestampchanges.md): Trigger fires when the maximum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenDataBecomesReady](kcmbufferqueuetrigger_whendatabecomesready.md): Trigger fires when next dequeueable buffer becomes ready (that is, [CMBufferQueueDequeueIfDataReady(\_:)](cmbufferqueuedequeueifdataready%28__%29.md) will now succeed). (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenEndOfDataReached](kcmbufferqueuetrigger_whenendofdatareached.md): Trigger fires when CMBufferQueueIsAtEndOfData’s condition becomes true. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenReset](kcmbufferqueuetrigger_whenreset.md): Trigger fires when CMBufferQueueReset called. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenBufferCountBecomesLessThan](kcmbufferqueuetrigger_whenbuffercountbecomeslessthan.md): Trigger fires when buffer count becomes less than the specified threshold number.
- [kCMBufferQueueTrigger_WhenBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whenbuffercountbecomesgreaterthan.md): Trigger fires when buffer count becomes \> the specified threshold number.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualToAndBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequaltoandbuffercountbecomesgreaterthan.md)

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:)](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

# Buffer Trigger Conditions (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

The trigger conditions the framework supports.

## Topics

### Constants

- [kCMBufferQueueTrigger_WhenDurationBecomesLessThan](kcmbufferqueuetrigger_whendurationbecomeslessthan.md): Trigger fires when queue duration becomes less than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesLessThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomeslessthanorequalto.md): Trigger fires when queue duration becomes less than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthan.md): Trigger fires when queue duration becomes greater than the specified duration.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualTo](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequalto.md): Trigger fires when queue duration becomes greater than or equal to the specified duration.
- [kCMBufferQueueTrigger_WhenMinPresentationTimeStampChanges](kcmbufferqueuetrigger_whenminpresentationtimestampchanges.md): Trigger fires when the minimum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenMaxPresentationTimeStampChanges](kcmbufferqueuetrigger_whenmaxpresentationtimestampchanges.md): Trigger fires when the maximum presentation timestamp changes (triggerDuration is ignored).
- [kCMBufferQueueTrigger_WhenDataBecomesReady](kcmbufferqueuetrigger_whendatabecomesready.md): Trigger fires when next dequeueable buffer becomes ready (that is, [CMBufferQueueDequeueIfDataReadyAndRetain](cmbufferqueuedequeueifdataready%28__%29.md) will now succeed). (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenEndOfDataReached](kcmbufferqueuetrigger_whenendofdatareached.md): Trigger fires when CMBufferQueueIsAtEndOfData’s condition becomes true. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenReset](kcmbufferqueuetrigger_whenreset.md): Trigger fires when CMBufferQueueReset called. (triggerDuration is ignored.)
- [kCMBufferQueueTrigger_WhenBufferCountBecomesLessThan](kcmbufferqueuetrigger_whenbuffercountbecomeslessthan.md): Trigger fires when buffer count becomes less than the specified threshold number.
- [kCMBufferQueueTrigger_WhenBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whenbuffercountbecomesgreaterthan.md): Trigger fires when buffer count becomes \> the specified threshold number.
- [kCMBufferQueueTrigger_WhenDurationBecomesGreaterThanOrEqualToAndBufferCountBecomesGreaterThan](kcmbufferqueuetrigger_whendurationbecomesgreaterthanorequaltoandbuffercountbecomesgreaterthan.md)

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.
