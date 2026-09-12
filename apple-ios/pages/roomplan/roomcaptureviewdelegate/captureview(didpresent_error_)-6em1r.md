> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureviewdelegate/captureview(didpresent:error:)-6em1r](https://developer.apple.com/documentation/roomplan/roomcaptureviewdelegate/captureview(didpresent:error:)-6em1r)

# captureView(didPresent:error:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides a default, blank implementation for the processed scan-results callback.

## Declaration

```swift
func captureView(didPresent processedResult: CapturedRoom, error: (any Error)?)
```

## Parameters

- `processedResult`: A structure that provides detailed information about the dimensions and features of the scanned room.
- `error`: An object that describes the problem when an error occurs; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

The system calls this implementation if your app doesn’t implement [captureView(didPresent:error:)](captureview%28didpresent_error_%29.md).

## See Also

### Default implementations

- [captureView(shouldPresent:error:)](captureview%28shouldpresent_error_%29-5l74q.md): Indicates that the app receives and displays post-processed scan results when the scan session stops.
