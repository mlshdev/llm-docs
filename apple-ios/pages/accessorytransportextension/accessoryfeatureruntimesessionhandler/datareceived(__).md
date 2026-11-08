> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesessionhandler/datareceived(_:)

# dataReceived(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Handles data that the data provider extension sends.

## Declaration

```swift
func dataReceived(_ data: Data) async throws
```

## Parameters

- `data`: The data that the data provider extension sends.

## Mentioned In

- [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md)
