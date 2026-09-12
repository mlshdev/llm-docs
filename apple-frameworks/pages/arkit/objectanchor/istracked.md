> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objectanchor/istracked](https://developer.apple.com/documentation/arkit/objectanchor/istracked)

# isTracked

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A Boolean value that indicates whether the framework is currently tracking an object anchor.

## Declaration

```swift
var isTracked: Bool { get }
```

## See Also

### Inspecting an object anchor

- [boundingBox](boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](description.md): A textual representation of this anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](../referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](../referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
