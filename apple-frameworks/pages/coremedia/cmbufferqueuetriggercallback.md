> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbufferqueuetriggercallback](https://developer.apple.com/documentation/coremedia/cmbufferqueuetriggercallback)

# CMBufferQueueTriggerCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A callback for the system to invoke when a trigger condition becomes true.

## Declaration

```swift
typealias CMBufferQueueTriggerCallback = (UnsafeMutableRawPointer?, CMBufferQueueTriggerToken) -> Void
```

<a id="Callback-Parameters"></a>

### Callback Parameters

- **triggerRefcon**: The contextual data.
- **triggerToken**: The trigger whose condition became true.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold(\_:\_:\_:\_:\_:)](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger(\_:triggerToken:)](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger(\_:callback:refcon:condition:time:triggerTokenOut:)](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold(\_:callback:refcon:condition:threshold:triggerTokenOut:)](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.

# CMBufferQueueTriggerCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A callback for the system to invoke when a trigger condition becomes true.

## Declaration

```objectivec
typedef void (*)(void *, struct opaqueCMBufferQueueTriggerToken *) CMBufferQueueTriggerCallback;
```

<a id="Callback-Parameters"></a>

### Callback Parameters

- **triggerRefcon**: The contextual data.
- **triggerToken**: The trigger whose condition became true.

## See Also

### Managing Triggers

- [CMBufferQueueInstallTriggerHandler](cmbufferqueueinstalltriggerhandler%28__________%29.md): Installs a trigger with a handler on a buffer queue.
- [CMBufferQueueInstallTriggerHandlerWithIntegerThreshold](cmbufferqueueinstalltriggerhandlerwithintegerthreshold%28__________%29.md): Installs a trigger with a handler and threshold on a buffer queue.
- [CMBufferQueueTriggerHandler](cmbufferqueuetriggerhandler.md): A type alias for a trigger handler.
- [CMBufferQueueTriggerToken](cmbufferqueuetriggertoken.md): A type alias for a trigger token.
- [Buffer Trigger Conditions](buffer-trigger-conditions.md): The trigger conditions the framework supports.
- [CMBufferQueueTestTrigger](cmbufferqueuetesttrigger%28__triggertoken_%29.md): Tests whether the trigger condition is true for the specified buffer queue.
- [CMBufferQueueInstallTrigger](cmbufferqueueinstalltrigger%28__callback_refcon_condition_time_triggertokenout_%29.md): Installs a trigger with a callback on a buffer queue.
- [CMBufferQueueInstallTriggerWithIntegerThreshold](cmbufferqueueinstalltriggerwithintegerthreshold%28__callback_refcon_condition_threshold_triggertokenout_%29.md): Installs a trigger with a callback and threshold on a buffer queue.
- [CMBufferQueueTriggerCondition](cmbufferqueuetriggercondition.md): A type to specify conditions to associate with a buffer queue trigger.
