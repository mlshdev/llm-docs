> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1576409-wsmethodinvocationunschedulefrom](https://developer.apple.com/documentation/coreservices/1576409-wsmethodinvocationunschedulefrom)

# WSMethodInvocationUnscheduleFromRunLoop

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Unschedules a method invocation from a run loop.

## Declaration

```objectivec
void WSMethodInvocationUnscheduleFromRunLoop(WSMethodInvocationRef invocation, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `invocation`: The method invocation reeference.
- `runLoop`: The run loop from which to unschedule the invocation.
- `runLoopMode`: The run loop mode.

<a id="discussion"></a>

## Discussion

Unschedules the invocation from a given run loop and mode.  If the invocation has not yet completed, its callback will not be called.
