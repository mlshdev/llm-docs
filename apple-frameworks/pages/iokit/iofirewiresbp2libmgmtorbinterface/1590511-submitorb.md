> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590511-submitorb

# submitORB

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Submits this ORB for execution.

## Declaration

```objectivec
IOReturn (*submitORB)(void *self);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.

<a id="discussion"></a>

## Discussion

Submits this ORB for execution
