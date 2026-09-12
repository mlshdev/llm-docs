> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/usdexportoptions/mesh](https://developer.apple.com/documentation/roomplan/capturedroom/usdexportoptions/mesh)

# mesh

**Framework:** RoomPlan  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An export option that formats the output file as a collection of size-independant triangles that connect to form a mesh.

## Declaration

```swift
static let mesh: CapturedRoom.USDExportOptions
```

<a id="discussion"></a>

## Discussion

A mesh model stores elements as polygonal units. You infer element size based on the bounding box around its vertices.

## See Also

### Choosing an export option

- [parametric](parametric.md): An export option that formats the output file as a collection of size-dependent primitives.
- [model](model.md): An export option that formats the output file as a collection of 3D models.
