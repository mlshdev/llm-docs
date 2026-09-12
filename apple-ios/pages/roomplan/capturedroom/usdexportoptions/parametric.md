> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/usdexportoptions/parametric](https://developer.apple.com/documentation/roomplan/capturedroom/usdexportoptions/parametric)

# parametric

**Framework:** RoomPlan  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An export option that formats the output file as a collection of size-dependent primitives.

## Declaration

```swift
static let parametric: CapturedRoom.USDExportOptions
```

<a id="discussion"></a>

## Discussion

A parametric model stores elements as unit-sized cubes versus polygonal units. The scale of each element determines whether it appears as a plane or a box.

## See Also

### Choosing an export option

- [mesh](mesh.md): An export option that formats the output file as a collection of size-independant triangles that connect to form a mesh.
- [model](model.md): An export option that formats the output file as a collection of 3D models.
