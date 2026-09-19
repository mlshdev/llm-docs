> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding/accessoryliveactivitieshandler/messagereceived(_:)

# messageReceived(\_:)

**Framework:** Accessory Live Activities  
**Kind:** Instance Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Delivers a message from the paired accessory to your data provider extension.

## Declaration

```swift
func messageReceived(_ message: TransportMessage)
```

## Parameters

- `message`: The message received from the accessory.
