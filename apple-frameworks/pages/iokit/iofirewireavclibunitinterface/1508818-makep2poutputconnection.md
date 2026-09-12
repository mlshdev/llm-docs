> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508818-makep2poutputconnection](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508818-makep2poutputconnection)

# makeP2POutputConnection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Increments the point-to-point connection count of a unit output plug.

## Declaration

```objectivec
IOReturn (*makeP2POutputConnection)(void *self, UInt32 outputPlug, UInt32 chan, IOFWSpeed speed);
```

<a id="discussion"></a>

## Discussion

This function is only available if the interface version is \> 3.
