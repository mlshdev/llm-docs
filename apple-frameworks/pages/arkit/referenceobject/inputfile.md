> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject/inputfile](https://developer.apple.com/documentation/arkit/referenceobject/inputfile)

# inputFile

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The input file the framework uses for loading a reference object.

## Declaration

```swift
var inputFile: URL? { get }
```

## See Also

### Inspecting an object anchor

- [boundingBox](../objectanchor/boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](../objectanchor/axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](../objectanchor/description.md): A textual representation of this anchor.
- [isTracked](../objectanchor/istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](../objectanchor/originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](../objectanchor/referenceobject.md): The reference object that an anchor corresponds to.
- [usdzFile](usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
