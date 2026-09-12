> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roomcaptureviewdelegate/captureview(didpresent:error:)](https://developer.apple.com/documentation/roomplan/roomcaptureviewdelegate/captureview(didpresent:error:))

# captureView(didPresent:error:)

**Framework:** RoomPlan  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Provides the delegate with the processed scan results as the view presents them.

## Declaration

```swift
func captureView(didPresent processedResult: CapturedRoom, error: (any Error)?)
```

## Parameters

- `processedResult`: A structure that provides detailed information about the dimensions and features of the scanned room.
- `error`: An object that describes the problem when an error occurs; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

The framework invokes this callback when your app returns `true` for [captureView(shouldPresent:error:)](captureview%28shouldpresent_error_%29.md).

With the `processedResult` argument, your app can alter the detailed captured room object or export it to a USDZ file.

## Default Implementations

### RoomCaptureViewDelegate Implementations

- [captureView(didPresent:error:)](captureview%28didpresent_error_%29-6em1r.md): Provides a default, blank implementation for the processed scan-results callback.

## See Also

### Post-processing scan results

- [captureView(shouldPresent:error:)](captureview%28shouldpresent_error_%29.md): Indicates whether the app processes raw scan results immediately after a scan session stops.
