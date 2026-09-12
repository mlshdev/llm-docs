> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508816-makep2pinputconnection](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508816-makep2pinputconnection)

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
