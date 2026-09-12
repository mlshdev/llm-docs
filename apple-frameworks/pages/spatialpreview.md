> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview](https://developer.apple.com/documentation/spatialpreview)

# Spatial Preview

**Framework:** Spatial Preview  
**Kind:** Framework  
**Availability:** macOS 27.0+ · visionOS 27.0+

Preview spatial content from a macOS app on a connected visionOS device.

<a id="Overview"></a>

## Overview

Use Spatial Preview to work with spatial content from a macOS app to a connected visionOS device in real time. The framework centers on two abstractions: [SpatialPreviewEndpoint](spatialpreview/spatialpreviewendpoint.md), which identifies the target visionOS device, and [SpatialPreviewSession](spatialpreview/spatialpreviewsession.md), which manages the active preview connection and the flow of content. The [USDPreviewSession](spatialpreview/usdpreviewsession.md) and [DocumentPreviewSession](spatialpreview/documentpreviewsession.md) objects adopt `SpatialPreviewSession` and support visionOS previews of Universal Scene Description (USD) content and general file content, respectively. [USDKit](usdkit.md) is recommended for Spatial Preview because it works without any additional setup. If you want to use your own OpenUSD library, see the documentation below on how to bridge OpenUSD to [USDKit](usdkit.md).

## Topics

### Essentials

- [Working with content from your Mac app using Spatial Preview](spatialpreview/working-with-content-from-your-mac-app-using-spatial-preview.md): Send and update documents, and work with 3D content live from your Mac app to a visionOS device.
- [Bridging an external USD runtime to Spatial Preview](spatialpreview/bridging-an-external-usd-runtime-to-spatial-preview.md): Sync edits between an app with its own OpenUSD runtime and a Spatial Preview session using a shared layer as the exchange mechanism.

### Nearby devices

- [SpatialPreviewEndpoint](spatialpreview/spatialpreviewendpoint.md): An endpoint representing a visionOS device you can connect to for spatial preview.
- [SpatialPreviewDevicePicker](spatialpreview/spatialpreviewdevicepicker.md): Presents nearby companion devices and allows the user to make a selection.
- [ConnectedSpatialEndpointObserver](spatialpreview/connectedspatialendpointobserver.md): An observer that provides access to the endpoint for a device connected via Mac Virtual Display.

### Preview sessions

- [SpatialPreviewSession](spatialpreview/spatialpreviewsession.md): A session that manages the lifecycle and connection state of a spatial preview on a visionOS device.
- [DocumentPreviewSession](spatialpreview/documentpreviewsession.md): A session that streams document content to a connected visionOS device for spatial preview.
- [USDPreviewSession](spatialpreview/usdpreviewsession.md): A session that enables you to present the contents of a Universal Scene Description (USD) stage.

### Session state and errors

- [SpatialPreviewSessionState](spatialpreview/spatialpreviewsessionstate.md): Indicates the state of the session and the health of the underlying connection.
- [SpatialPreviewSessionError](spatialpreview/spatialpreviewsessionerror.md)
- [ConnectedSpatialEndpointObserver.UnavailableError](spatialpreview/connectedspatialendpointobserver/unavailableerror.md): An error thrown when accessing the [endpoint](spatialpreview/connectedspatialendpointobserver/endpoint.md) property while no Mac Virtual Display device is available.
- [USDPreviewSession.Error](spatialpreview/usdpreviewsession/error.md): Errors that can occur during a USD preview session
- [USDPreviewSession.Event](spatialpreview/usdpreviewsession/event.md): Events emitted during a USD preview session
