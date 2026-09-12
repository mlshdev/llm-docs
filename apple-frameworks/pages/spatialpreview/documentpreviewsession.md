> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/documentpreviewsession](https://developer.apple.com/documentation/spatialpreview/documentpreviewsession)

# DocumentPreviewSession

**Framework:** Spatial Preview  
**Kind:** Class  
**Availability:** macOS 27.0+ · visionOS

A session that streams document content to a connected visionOS device for spatial preview.

## Declaration

```swift
final class DocumentPreviewSession
```

## Mentioned In

- [Bridging an external USD runtime to Spatial Preview](bridging-an-external-usd-runtime-to-spatial-preview.md)

<a id="overview"></a>

## Overview

To start a `DocumentPreviewSession` preview, obtain an [SpatialPreviewEndpoint](spatialpreviewendpoint.md) through one of two paths:

- Use [ConnectedSpatialEndpointObserver](connectedspatialendpointobserver.md) when the visionOS device is already connected using Mac Virtual Display. Observe its [isEndpointAvailable](connectedspatialendpointobserver/isendpointavailable.md) property to know when a device is ready, then access its [endpoint](connectedspatialendpointobserver/endpoint.md) property to retrieve the endpoint.
- Use [SpatialPreviewDevicePicker](spatialpreviewdevicepicker.md), a [View](https://developer.apple.com/documentation/swiftui/view) that presents nearby companion devices and calls its closure with the chosen `SpatialPreviewEndpoint`, when you want to let someone select a device interactively.

When you have the endpoint, create a `DocumentPreviewSession`, the concrete session class that conforms to [SpatialPreviewSession](spatialpreviewsession.md) and [Sendable](https://developer.apple.com/documentation/swift/sendable). Initialize the session with a display name and the [UTType](../uniformtypeidentifiers/uttype-swift.struct.md) of the content, then call [start(endpoint:)](documentpreviewsession/start%28endpoint_%29.md) with the endpoint to open the connection:

```swift
let observer = ConnectedSpatialEndpointObserver()

// Wait for a device to become available.
let endpoint = try await observer.endpoint

// Create and start the session.
let session = DocumentPreviewSession(name: "My Spatial Content", contentType: .jpeg)

try await session.start(endpoint: endpoint)

// Push initial content, then update as the document changes.
let spatialContentURL = URL(filePath: "/path/to/spatialContent.jpeg")
try await session.updateContents(url: spatialContentURL)
```

After starting a session, use [updateContents(data:)](documentpreviewsession/updatecontents%28data_%29.md) to push a [Data](../foundation/data.md) value directly to the device; this is useful when your document content is already in memory. Use [updateContents(url:)](documentpreviewsession/updatecontents%28url_%29.md) to stream content from a file URL, which avoids loading the entire file into memory at once. Call either method each time the document changes.

Track connection changes using [SpatialPreviewSessionState](spatialpreviewsessionstate.md). When you finish, call [close()](spatialpreviewsession/close%28%29.md) to end the session cleanly.

## Topics

### Initializers

- [init(name:contentType:)](documentpreviewsession/init%28name_contenttype_%29.md): Create a new DocumentPreviewSession with the name and contentType, to be used for all content updates.

### Instance Properties

- [contentType](documentpreviewsession/contenttype.md): The content type of the document. All updates must provide documents conforming to this content type.
- [name](documentpreviewsession/name.md): The display name of the document on the spatial preview

### Instance Methods

- [start(endpoint:)](documentpreviewsession/start%28endpoint_%29.md): Connects to the specified endpoint and prepares the session to send document updates.
- [updateContents(data:)](documentpreviewsession/updatecontents%28data_%29.md): Update the contents of the document with the provided data.
- [updateContents(url:)](documentpreviewsession/updatecontents%28url_%29.md): Update the contents of the document with the provided URL.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialPreviewSession](spatialpreviewsession.md)

## See Also

### Preview sessions

- [SpatialPreviewSession](spatialpreviewsession.md): A session that manages the lifecycle and connection state of a spatial preview on a visionOS device.
- [USDPreviewSession](usdpreviewsession.md): A session that enables you to present the contents of a Universal Scene Description (USD) stage.
