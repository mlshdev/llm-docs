> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureviewdelegate/captureview(shouldpresent:error:)-5l74q](https://developer.apple.com/documentation/roomplan/roomcaptureviewdelegate/captureview(shouldpresent:error:)-5l74q)

# captureView(shouldPresent:error:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Indicates that the app receives and displays post-processed scan results when the scan session stops.

## Declaration

```swift
func captureView(shouldPresent roomDataForProcessing: CapturedRoomData, error: (any Error)?) -> Bool
```

## Parameters

- `roomDataForProcessing`: A data object that contains the raw scan results.
- `error`: An object that describes the problem when an error occurs; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

This implementation always returns `true`.

<a id="discussion"></a>

## Discussion

If your app’s room-capture view [delegate](../roomcaptureview/delegate.md) doesn’t implement [captureView(shouldPresent:error:)](captureview%28shouldpresent_error_%29.md), then the framework calls this default implementation.

## See Also

### Default implementations

- [captureView(didPresent:error:)](captureview%28didpresent_error_%29-6em1r.md): Provides a default, blank implementation for the processed scan-results callback.
