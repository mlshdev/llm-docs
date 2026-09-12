> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/sendvenuedescriptor(at:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/sendvenuedescriptor(at:))

# sendVenueDescriptor(at:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sends an AIME to all connected receivers.

## Declaration

```swift
func sendVenueDescriptor(at url: URL) async throws
```

## Parameters

- `url`: The url containing a valid venue descriptor file with extension `.aime`.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails while sending the venue descriptor, for example, if the url is invalid.
