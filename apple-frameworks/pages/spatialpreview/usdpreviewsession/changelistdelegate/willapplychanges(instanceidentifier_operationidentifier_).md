> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/changelistdelegate/willapplychanges(instanceidentifier:operationidentifier:)](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/changelistdelegate/willapplychanges(instanceidentifier:operationidentifier:))

# willApplyChanges(instanceIdentifier:operationIdentifier:)

**Framework:** SpatialPreview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

An event emitted to the ChangeListDelegate indicating the start of a USD change.

## Declaration

```swift
@MainActor func willApplyChanges(instanceIdentifier: String, operationIdentifier: UInt)
```

## Parameters

- `instanceIdentifier`: The Spatial Preview receiver instance making the change.
- `operationIdentifier`: Multiple changes with the same operation identifier can be grouped together.
