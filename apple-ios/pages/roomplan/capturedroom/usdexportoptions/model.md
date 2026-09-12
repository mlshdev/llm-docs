> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/usdexportoptions/model](https://developer.apple.com/documentation/roomplan/capturedroom/usdexportoptions/model)

# model

**Framework:** RoomPlan  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An export option that formats the output file as a collection of 3D models.

## Declaration

```swift
static let model: CapturedRoom.USDExportOptions
```

<a id="discussion"></a>

## Discussion

This export option works in conjunction with the [CapturedRoomAttribute](../../capturedroomattribute.md) and [CapturedRoom.ModelProvider](../modelprovider.md) APIs to replace objects the framework identifies as of a particular category, or to have particular attributes, with 3D models that you choose in advance.

## See Also

### Choosing an export option

- [parametric](parametric.md): An export option that formats the output file as a collection of size-dependent primitives.
- [mesh](mesh.md): An export option that formats the output file as a collection of size-independant triangles that connect to form a mesh.
