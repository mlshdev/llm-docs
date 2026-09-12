> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueinstalltriggerwithintegerthreshold(_:callback:refcon:condition:threshold:triggertokenout:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueinstalltriggerwithintegerthreshold(_:callback:refcon:condition:threshold:triggertokenout:))

# CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Installs a trigger with a callback and threshold on a buffer queue.

## Declaration

```swift
func CMBufferQueueInstallTriggerWithIntegerThreshold(_ queue: CMBufferQueue, callback: CMBufferQueueTriggerCallback?, refcon: UnsafeMutableRawPointer?, condition: CMBufferQueueTriggerCondition, threshold: CMItemCount, triggerTokenOut: UnsafeMutablePointer<CMBufferQueueTriggerToken?>?) -> OSStatus
```

## Parameters

- `queue`: `CMBufferQueue` on which the trigger is being set.
- `callback`: Callback to be called when the trigger condition becomes true. Can be `NULL`, if client intends only to explicitly test the condition.  Cannot be `NULL` if triggerTokenOut is NULL, otherwise the trigger would be meaningless.
- `refcon`: Refcon to be passed to the triggerCallback. Can be `NULL` if the callback doesn’t need it, or is                                    itself `NULL`.\`\`
- `condition`: The condition to be tested when evaluating the trigger. Must be a valid condition for an integer threshold.
- `threshold`: The integer value to compare against when evaluating the trigger.
- `triggerTokenOut`: Address where created trigger token will be written. Can be `NULL`, if client has no need to explicitly test or remove the trigger. Cannot be `NULL` if triggerCallback is NULL, since the trigger would be meaningless then.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

This function behaves the same way as [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md) except the trigger is evaluated against the integer value rather than the time value.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

# CMBufferQueueInstallTriggerWithIntegerThreshold (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Installs a trigger with a callback and threshold on a buffer queue.

## Declaration

```objectivec
extern OSStatus CMBufferQueueInstallTriggerWithIntegerThreshold(CMBufferQueueRef queue, CMBufferQueueTriggerCallback callback, void *refcon, CMBufferQueueTriggerCondition condition, CMItemCount threshold, CMBufferQueueTriggerToken*triggerTokenOut);
```

## Parameters

- `queue`: `CMBufferQueue` on which the trigger is being set.
- `callback`: Callback to be called when the trigger condition becomes true. Can be `NULL`, if client intends only to explicitly test the condition.  Cannot be `NULL` if triggerTokenOut is NULL, otherwise the trigger would be meaningless.
- `refcon`: Refcon to be passed to the triggerCallback. Can be `NULL` if the callback doesn’t need it, or is                                    itself `NULL`.\`\`
- `condition`: The condition to be tested when evaluating the trigger. Must be a valid condition for an integer threshold.
- `threshold`: The integer value to compare against when evaluating the trigger.
- `triggerTokenOut`: Address where created trigger token will be written. Can be `NULL`, if client has no need to explicitly test or remove the trigger. Cannot be `NULL` if triggerCallback is NULL, since the trigger would be meaningless then.

<a id="return-value"></a>

## Return Value

A result code. See `Result Codes`

<a id="Discussion"></a>

## Discussion

This function behaves the same way as [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md) except the trigger is evaluated against the integer value rather than the time value.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.
