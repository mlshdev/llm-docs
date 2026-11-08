> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeaturesessionhandler/sessionstarted(_:)

# sessionStarted(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Notifies the handler when its feature session starts.

## Declaration

```swift
func sessionStarted(_ session: Self.Session)
```

## Parameters

- `session`: The session that starts. Hold this parameter with a weak reference because the system owns it.

## Mentioned In

- [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md)

<a id="discussion"></a>

## Discussion

Save this session so your app can send data to the transport extension at a later time.

## See Also

### Handling the session life cycle

- [sessionInvalidated(error:)](sessioninvalidated%28error_%29.md): Beta. Notifies the handler when its feature session ends.
