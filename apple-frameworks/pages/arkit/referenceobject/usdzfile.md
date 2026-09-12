> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceobject/usdzfile](https://developer.apple.com/documentation/arkit/referenceobject/usdzfile)

# usdzFile

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The trained USDZ file, if the reference object includes one.

## Declaration

```swift
var usdzFile: URL? { get }
```

## See Also

### Inspecting an object anchor

- [boundingBox](../objectanchor/boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](../objectanchor/axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](../objectanchor/description.md): A textual representation of this anchor.
- [isTracked](../objectanchor/istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](../objectanchor/originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](../objectanchor/referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](inputfile.md): The input file the framework uses for loading a reference object.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
