> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/changelistdelegate/didapplychanges(instanceidentifier:operationidentifier:)](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/changelistdelegate/didapplychanges(instanceidentifier:operationidentifier:))

# didApplyChanges(instanceIdentifier:operationIdentifier:)

**Framework:** SpatialPreview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

An event emitted to the ChangelistDelegate indicating the end of a USD change.

## Declaration

```swift
@MainActor func didApplyChanges(instanceIdentifier: String, operationIdentifier: UInt)
```

## Parameters

- `instanceIdentifier`: The Spatial Preview receiver instance making the change.
- `operationIdentifier`: Multiple changes with the same operation identifier can be grouped together.
