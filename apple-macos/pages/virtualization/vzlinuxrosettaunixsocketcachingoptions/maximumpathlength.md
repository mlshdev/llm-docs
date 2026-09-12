> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxrosettaunixsocketcachingoptions/maximumpathlength](https://developer.apple.com/documentation/virtualization/vzlinuxrosettaunixsocketcachingoptions/maximumpathlength)

# maximumPathLength

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 14.0+

The maximum allowed length of the path to the UNIX domain socket.

## Declaration

```objectivec
@property (class, readonly) NSUInteger maximumPathLength;
```

<a id="Discussion"></a>

## Discussion

The `sockaddr_un` structure in Linux defines the maximum length for this path.
