> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesessionhandler/sessionstarted(_:)

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

- `session`: The session that starts. Hold a weak reference to this parameter because the [makeFeatureSession(\_:)](../accessorytransportsession/makefeaturesession%28__%29.md) caller owns it.

## Mentioned In

- [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md)

<a id="discussion"></a>

## Discussion

The system calls this method once the session activates and your app enrolls the feature.

## See Also

### Handling the session life cycle

- [sessionInvalidated(error:)](sessioninvalidated%28error_%29.md): Beta. Notifies the handler when its feature session ends.
