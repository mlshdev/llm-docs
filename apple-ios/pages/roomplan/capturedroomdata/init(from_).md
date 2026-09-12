> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroomdata/init(from:)](https://developer.apple.com/documentation/roomplan/capturedroomdata/init(from:))

# init(from:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Creates captured room data by deserializing the decoder of a prior scan.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: An encoded captured room data object.

<a id="discussion"></a>

## Discussion

To serialize a scan, call [encode(to:)](encode%28to_%29.md).
