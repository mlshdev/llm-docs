> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1545841-iohidqueueschedulewithrunloop](https://developer.apple.com/documentation/iokit/1545841-iohidqueueschedulewithrunloop)

# IOHIDQueueScheduleWithRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Schedules queue with run loop.

## Declaration

```objectivec
void IOHIDQueueScheduleWithRunLoop(IOHIDQueueRef queue, CFRunLoopRef runLoop, CFStringRef runLoopMode);
```

## Parameters

- `queue`: IOHIDQueue object to be modified.
- `runLoop`: RunLoop to be used when scheduling any asynchronous activity.
- `runLoopMode`: Run loop mode to be used when scheduling any asynchronous activity.

<a id="discussion"></a>

## Discussion

Formally associates queue with client's run loop. Scheduling this queue with the run loop is necessary before making use of any asynchronous APIs.

## See Also

### Miscellaneous

- [IOHIDQueueAddElement](1545835-iohidqueueaddelement.md): Adds an element to the queue
- [IOHIDQueueContainsElement](1545842-iohidqueuecontainselement.md): Queries the queue to determine if elemement has been added.
- [IOHIDQueueCopyNextValue](1545844-iohidqueuecopynextvalue.md): Dequeues a retained copy of an element value from the head of an IOHIDQueue.
- [IOHIDQueueCopyNextValueWithTimeout](1545832-iohidqueuecopynextvaluewithtimeo.md): Dequeues a retained copy of an element value from the head of an IOHIDQueue. This method will block until either a value is available or it times out.
- [IOHIDQueueCreate](1545840-iohidqueuecreate.md): Creates an IOHIDQueue object for the specified device.
- [IOHIDQueueGetDepth](1545833-iohidqueuegetdepth.md): Obtain the depth of the queue.
- [IOHIDQueueGetDevice](1545839-iohidqueuegetdevice.md): Obtain the device associated with the queue.
- [IOHIDQueueGetTypeID](1545836-iohidqueuegettypeid.md): Returns the type identifier of all IOHIDQueue instances.
- [IOHIDQueueRegisterValueAvailableCallback](1545829-iohidqueueregistervalueavailable.md): Sets callback to be used when the queue transitions to non-empty.
- [IOHIDQueueRemoveElement](1545838-iohidqueueremoveelement.md): Removes an element from the queue
- [IOHIDQueueSetDepth](1545846-iohidqueuesetdepth.md): Sets the depth of the queue. @disussion Set the appropriate depth value based on the number of elements contained in a queue.
- [IOHIDQueueStart](1545843-iohidqueuestart.md): Starts element value delivery to the queue.
- [IOHIDQueueStop](1545830-iohidqueuestop.md): Stops element value delivery to the queue.
- [IOHIDQueueUnscheduleFromRunLoop](1545834-iohidqueueunschedulefromrunloop.md): Unschedules queue with run loop.
