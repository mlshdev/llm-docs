> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(venuedescriptor:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/send(venuedescriptor:))

# send(venueDescriptor:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends a venue descriptor to all connected receivers.

## Declaration

```swift
func send(venueDescriptor: VenueDescriptor) async throws
```

<a id="discussion"></a>

## Discussion

- venueDescriptor: The `venueDescriptor` to send to all clients.

> **Throws**

> This function throws if anything fails while sending the venue descriptor.
