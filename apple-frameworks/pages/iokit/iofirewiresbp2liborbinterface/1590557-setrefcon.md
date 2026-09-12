> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590557-setrefcon](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590557-setrefcon)

# setRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the ORB refCon.

## Declaration

```objectivec
void (*setRefCon)(void *self, void *refCon);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `refCon`: a user defined value.

<a id="discussion"></a>

## Discussion

Sets a user defined value on the ORB that can be retrieved later with the method getRefCon.
