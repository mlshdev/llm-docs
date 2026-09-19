> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liblogininterface/1590447-getmaxcommandblocksize

# getMaxCommandBlockSize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the maximum command block size.

## Declaration

```objectivec
UInt32 (*getMaxCommandBlockSize)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLoginInterface object.

<a id="return_value"></a>

## Return Value

Returns a UInt32 containing the maximum command block size.

<a id="discussion"></a>

## Discussion

The device publishes an upper limit on the size of command block that it can accept. That value can be accessed via this method.
