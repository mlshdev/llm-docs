> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508853-breakp2poutputconnection](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508853-breakp2poutputconnection)

# breakP2POutputConnection

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Decrements the point-to-point connection count of a unit output plug.

## Declaration

```objectivec
IOReturn (*breakP2POutputConnection)(void *self, UInt32 outputPlug);
```

<a id="discussion"></a>

## Discussion

This function is only available if the interface version is \> 3.
