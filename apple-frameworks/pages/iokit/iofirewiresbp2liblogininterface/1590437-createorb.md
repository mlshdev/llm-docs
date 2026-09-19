> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590437-createorb

# createORB

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a new IOFireWireSBP2ORB for this login.

## Declaration

```objectivec
IUnknownVTbl **(*createORB)(void *self, REFIID iid);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.
- `iid`: UUID for the desired type of IOFireWireSBP2LibLoginInterface.

<a id="return_value"></a>

## Return Value

Returns a pointer to the new ORB object.

<a id="discussion"></a>

## Discussion

Create a new IOFireWireSBP2ORB for this login. It can be configured with it's accessors and executed with submitORB below.
