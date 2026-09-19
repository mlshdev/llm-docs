> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508816-makep2pinputconnection

# makeP2PInputConnection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Increments the point-to-point connection count of a unit input plug.

## Declaration

```objectivec
IOReturn (*makeP2PInputConnection)(void *self, UInt32 inputPlug, UInt32 chan);
```

<a id="discussion"></a>

## Discussion

This function is only available if the interface version is \> 3.
