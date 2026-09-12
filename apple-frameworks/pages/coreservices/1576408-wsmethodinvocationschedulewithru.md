> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576408-wsmethodinvocationschedulewithru](https://developer.apple.com/documentation/coreservices/1576408-wsmethodinvocationschedulewithru)

# WSMethodInvocationScheduleWithRunLoop

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Schedule a method invocation for asynchronous execution on a run loop.

## Declaration

```objectivec
void WSMethodInvocationScheduleWithRunLoop(WSMethodInvocationRef invocation, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `invocation`: The method invocation reference.
- `runLoop`: The run loop upon which to schedule the invocation.
- `runLoopMode`: The run loop mode.

<a id="discussion"></a>

## Discussion

Schedules the invocation to execute on the run loop. You must also set a callback to handle the response, using `WSMethodInvocationSetCallBack`. This is the recommended way to invoke web services, due to the unpredictable network delays inherent in such operations.
