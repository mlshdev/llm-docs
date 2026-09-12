> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508859-getsessionref](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508859-getsessionref)

# getSessionRef

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Get the session reference.

## Declaration

```objectivec
IOFireWireSessionRef (*getSessionRef)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibUnitInterface.

<a id="return_value"></a>

## Return Value

Returns a sessionRef on success.

<a id="discussion"></a>

## Discussion

Gets the sessionRef to be used with openWithSessionRef.
