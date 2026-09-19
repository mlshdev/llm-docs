> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/roomplan/capturedroomdata/encode(to:)

# encode(to:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Serializes captured room data to the specified encoder.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: An object that the captured room data serializes to.

<a id="discussion"></a>

## Discussion

An app might serialize a [CapturedRoomData](../capturedroomdata.md) object to defer processing to a later date or to defer processing to another device.
