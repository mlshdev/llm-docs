> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueueinstalltriggerhandler(_:_:_:_:_:)](https://developer.apple.com/documentation/coremedia/cmbufferqueueinstalltriggerhandler(_:_:_:_:_:))

# CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Installs a trigger with a handler on a buffer queue.

## Declaration

```swift
func CMBufferQueueInstallTriggerHandler(_ queue: CMBufferQueue, _ condition: CMBufferQueueTriggerCondition, _ time: CMTime, _ triggerTokenOut: UnsafeMutablePointer<CMBufferQueueTriggerToken?>?, _ handler: CMBufferQueueTriggerHandler?) -> OSStatus
```

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:)](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

# CMBufferQueueInstallTriggerHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

Installs a trigger with a handler on a buffer queue.

## Declaration

```objectivec
extern OSStatus CMBufferQueueInstallTriggerHandler(CMBufferQueueRef queue, CMBufferQueueTriggerCondition condition, CMTime time, CMBufferQueueTriggerToken*triggerTokenOut, CMBufferQueueTriggerHandler handler);
```

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCallback](cmbufferqueuetriggercallback.md): A callback for the system to invoke when a trigger condition becomes true.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.
