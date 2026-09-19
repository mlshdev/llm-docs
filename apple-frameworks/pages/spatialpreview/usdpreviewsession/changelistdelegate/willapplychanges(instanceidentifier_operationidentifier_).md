> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/changelistdelegate/willapplychanges(instanceidentifier:operationidentifier:)

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

## See Also

### Responding to changes

- [didApplyChanges(instanceIdentifier:operationIdentifier:)](didapplychanges%28instanceidentifier_operationidentifier_%29.md): An event emitted to the ChangelistDelegate indicating the end of a USD change.
