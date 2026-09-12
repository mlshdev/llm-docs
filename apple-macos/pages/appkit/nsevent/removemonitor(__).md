> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/removemonitor(_:)](https://developer.apple.com/documentation/appkit/nsevent/removemonitor(_:))

# removeMonitor(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Removes the specified event monitor.

## Declaration

```swift
class func removeMonitor(_ eventMonitor: Any)
```

## Parameters

- `eventMonitor`: The event handler object to remove.

<a id="Discussion"></a>

## Discussion

You must ensure that `eventMonitor` is removed only once. Removing the same `eventMonitor` instance multiple times results in an over-release condition, even in a Garbage Collected environment

## See Also

### Monitoring app events

- [addGlobalMonitorForEvents(matching:handler:)](addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [addLocalMonitorForEvents(matching:handler:)](addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.

# removeMonitor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Removes the specified event monitor.

## Declaration

```objectivec
+ (void) removeMonitor:(id) eventMonitor;
```

## Parameters

- `eventMonitor`: The event handler object to remove.

<a id="Discussion"></a>

## Discussion

You must ensure that `eventMonitor` is removed only once. Removing the same `eventMonitor` instance multiple times results in an over-release condition, even in a Garbage Collected environment

## See Also

### Monitoring app events

- [addGlobalMonitorForEventsMatchingMask:handler:](addglobalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to other applications.
- [addLocalMonitorForEventsMatchingMask:handler:](addlocalmonitorforevents%28matching_handler_%29.md): Installs an event monitor that receives copies of events the system posts to this app prior to their dispatch.
