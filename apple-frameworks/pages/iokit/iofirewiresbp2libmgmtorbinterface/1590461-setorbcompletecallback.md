> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libmgmtorbinterface/1590461-setorbcompletecallback

# setORBCompleteCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the ORB completion routine.

## Declaration

```objectivec
void (*setORBCompleteCallback)(void *self, void *refCon, IOFWSBP2ORBCompleteCallback callback);
```

## Parameters

- `self`: Pointer to a IOFireWireSBP2LibMgmtORBInterface.
- `refCon`: refCon passed as first argument to completion routine

<a id="discussion"></a>

## Discussion

Sets the completion routine to be called when the ORB finishes execution. The refCon set with setRefCon will also be passed as the third argument to the completion handler.
