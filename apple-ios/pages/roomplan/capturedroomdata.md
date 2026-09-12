> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroomdata](https://developer.apple.com/documentation/roomplan/capturedroomdata)

# CapturedRoomData

**Framework:** RoomPlan  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An opaque object that holds the raw results of a scan.

## Declaration

```swift
struct CapturedRoomData
```

<a id="overview"></a>

## Overview

When your app completes a scan session by calling [stop()](roomcapturesession/stop%28%29.md), the framework provides your app with raw scan results in one of the following ways:

- The [captureView(shouldPresent:error:)](roomcaptureviewdelegate/captureview%28shouldpresent_error_%29.md) callback for an app that scans rooms using the framework-provided view ([RoomCaptureView](roomcaptureview.md))
- The [captureSession(\_:didEndWith:error:)](roomcapturesessiondelegate/capturesession%28__didendwith_error_%29.md) callback for an app that implements its own room-scanning view

With an instance of this structure, your app can:

- Process the raw data into a detailed captured room object ([CapturedRoom](capturedroom.md)) by creating a room builder ([RoomBuilder](roombuilder.md)) and calling its [capturedRoom(from:)](roombuilder/capturedroom%28from_%29.md) function.
- Serialize to an encoder object, for example, to defer processing to a later date or to defer processing to another device.

## Topics

### Deserializing a prior scan

- [init(from:)](capturedroomdata/init%28from_%29.md): Creates captured room data by deserializing the decoder of a prior scan.

### Serializing a prior scan

- [encode(to:)](capturedroomdata/encode%28to_%29.md): Serializes captured room data to the specified encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Captured Data

- [Merging multiple scans into a single structure](merging-multiple-scans-into-a-single-structure.md): Export a 3D model that consists of multiple rooms captured in the same physical vicinity.
- [Scanning the rooms of a single structure](scanning-the-rooms-of-a-single-structure.md): Create an AR experience that enables people to scan a building that contains multiple rooms.
- [CapturedRoom](capturedroom.md): A structure that provides the key details of a scanned room.
- [CapturedStructure](capturedstructure.md): An object that holds the results of the merger of multiple capture sessions.
- [Captured Object Attributes](captured-object-attributes.md): Determine details about the objects and surfaces that the framework identifies in a scan.
