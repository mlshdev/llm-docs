> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590530-createlogin

# createLogin

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new IOFireWireSBP2LibLoginInterface object.

## Declaration

```objectivec
IUnknownVTbl **(*createLogin)(void *self, REFIID iid);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.
- `iid`: UUID for desired type of IOFireWireSBP2LibLoginInterface.

<a id="return_value"></a>

## Return Value

Returns a pointer to a new IOFireWireSBP2LibLoginInterface.

<a id="discussion"></a>

## Discussion

Creates a new IOFireWireSBP2LibLoginInterface object for the LUN. Login objects supply most of the SBP2 APIs related to login maintenance and Normal Command ORB execution.
