> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iotimerdispatchsource/timeroccurred](https://developer.apple.com/documentation/driverkit/iotimerdispatchsource/timeroccurred)

# TimerOccurred

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Executes custom code when the timer fires.

## Declaration

```objectivec
virtual void TimerOccurred(OSAction *action, uint64_t time);
```

## Parameters

- `action`: The action object being executed.
- `time`: The actual time at which the timer fired. The system calls [mach_absolute_time](../mach_absolute_time.md) precisely when the timer fires and passes that value to this parameter.

<a id="Discussion"></a>

## Discussion

Use this method as a prototype for declaring your own custom timer handlers. When declaring your method, use the [TYPE](../type.md) macro to indicate that your method has the same parameters and return value as this method.

Use the implementation of your method to perform any custom actions related to the timer’s expiration.

## See Also

### Declaring Actions

- [CheckForWork](checkforwork.md): Checks for events to handle.
