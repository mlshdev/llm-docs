> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590529-setrefcon

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

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.
- `refCon`: a user defined value.

<a id="discussion"></a>

## Discussion

Sets a user defined value on the ORB that can be retrieved later with the method getRefCon.
