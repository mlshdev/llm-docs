> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arkitsession/event/dataproviderstatechanged(dataproviders:newstate:error:)

# ARKitSession.Event.dataProviderStateChanged(dataProviders:newState:error:)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

An event that represents a state change of one or more of the data providers associated with a session.

## Declaration

```swift
case dataProviderStateChanged(dataProviders: [any DataProvider], newState: DataProviderState, error: ARKitSession.Error?)
```

## Parameters

- `dataProviders`: The data providers whose state has changed.
- `newState`: The new data provider state, which triggered the event.
- `error`: An `ARKitSession.Error` associated with the state change, if any. This is only applicable to `DataProviderState.stopped` updates.
