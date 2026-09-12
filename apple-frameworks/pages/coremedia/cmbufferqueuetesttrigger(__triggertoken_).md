> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuetesttrigger(_:triggertoken:)](https://developer.apple.com/documentation/coremedia/cmbufferqueuetesttrigger(_:triggertoken:))

# CMBufferQueueTestTrigger(\_:triggerToken:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Tests whether the trigger condition is true for the specified buffer queue.

## Declaration

```swift
func CMBufferQueueTestTrigger(_ queue: CMBufferQueue, triggerToken: CMBufferQueueTriggerToken) -> Bool
```

## Parameters

- `queue`: `CMBufferQueue` on which the trigger is tested.
- `triggerToken`: Trigger to test.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the trigger condition is True.

<a id="Discussion"></a>

## Discussion

[CMBufferQueue](cmbufferqueue-api.md) always returns the condition’s current status. The trigger callback will only be called when the condition goes from false to true. The `triggerToken` must be one that has been installed on this queue.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:)](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

# CMBufferQueueTestTrigger (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Tests whether the trigger condition is true for the specified buffer queue.

## Declaration

```objectivec
extern Boolean CMBufferQueueTestTrigger(CMBufferQueueRef queue, CMBufferQueueTriggerToken triggerToken);
```

## Parameters

- `queue`: `CMBufferQueue` on which the trigger is tested.
- `triggerToken`: Trigger to test.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the trigger condition is True.

<a id="Discussion"></a>

## Discussion

[CMBufferQueue](cmbufferqueue-api.md) always returns the condition’s current status. The trigger callback will only be called when the condition goes from false to true. The `triggerToken` must be one that has been installed on this queue.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.
