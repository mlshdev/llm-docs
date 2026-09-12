> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493253-setremovalcallback](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493253-setremovalcallback)

# setRemovalCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Sets callback to be used when device is removed.

## Declaration

```objectivec
IOReturn (*setRemovalCallback)(void *self, IOHIDCallbackFunction removalCallback, void *removalTarget, void *removalRefcon);
```

## Parameters

- `removalCallback`: Called when the device is removed.
- `removalTarget`: Passed to the callback.
- `removalRefcon`: Passed to the callback.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.
