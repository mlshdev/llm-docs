> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_workloop_create](https://developer.apple.com/documentation/dispatch/dispatch_workloop_create)

# dispatch_workloop_create

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates a new workloop with the specified label.

## Declaration

```objectivec
extern dispatch_workloop_tdispatch_workloop_create(const char *label);
```

## Parameters

- `label`: A string label to attach to the queue to uniquely identify it in debugging tools such as Instruments, `sample`, stackshots, and crash reports.  Because apps, libraries, and frameworks can all create their own dispatch queues, a reverse-DNS naming style (`com.example.myqueue`) is recommended.  This parameter is optional and can be `NULL`.

<a id="return-value"></a>

## Return Value

The newly created workloop.

<a id="Discussion"></a>

## Discussion

The returned workloop is active, and you may submit blocks to it immediately.

## See Also

### Creating a Dispatch Workloop

- [dispatch_workloop_create_inactive](dispatch_workloop_create_inactive.md): Creates a new inactive workloop with the specified label.
- [dispatch_workloop_t](dispatch_workloop_t.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.
- [OS_dispatch_workloop](os_dispatch_workloop.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.
