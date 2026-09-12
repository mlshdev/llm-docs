> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioupsplugininterface/1560778-seteventcallback](https://developer.apple.com/documentation/iokit/ioupsplugininterface/1560778-seteventcallback)

# setEventCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Set the callback that should be called to handle an event from the UPS.

## Declaration

```objectivec
IOReturn (*setEventCallback)(void *thisPointer, IOUPSEventCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```

## Parameters

- `thisPointer`: The UPS Interface to use.
- `callback`: A callback handler of type IOUPSEventCallbackFunction.
- `callbackTarget`: The address to be targeted by this callback.
- `callbackRefcon`: A user specified reference value. This will be passed to all callback functions.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

The proivided callback method should be called whenever there is a change of state in the UPS. This should be used in conjunction with createAsyncEventSource.
