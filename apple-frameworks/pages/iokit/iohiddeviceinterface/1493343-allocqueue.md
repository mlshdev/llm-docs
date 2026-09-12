> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493343-allocqueue](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493343-allocqueue)

# allocQueue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Wrapper to return instances of the IOHIDQueueInterface.

## Declaration

```objectivec
IOHIDQueueInterface **(*allocQueue)(void *self);
```

<a id="return_value"></a>

## Return Value

Returns the created IOHIDQueueInterface.
