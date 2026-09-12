> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liblogininterface/1590544-setrefcon](https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590544-setrefcon)

# setRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the login refCon.

## Declaration

```objectivec
void (*setRefCon)(void *self, void *refCon);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `refCon`: a user defined value.

<a id="discussion"></a>

## Discussion

Sets a user defined value on the login that can be retrieved later with the method getRefCon.
