> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590455-getrefcon

# getRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the refCon set with setRefCon.

## Declaration

```objectivec
void *(*getRefCon)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.

<a id="return_value"></a>

## Return Value

Returns the previously stored user defined value.

<a id="discussion"></a>

## Discussion

Returns the user defined value previously stored in the ORB with setRefCon.
