> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objectanchor/boundingbox](https://developer.apple.com/documentation/arkit/objectanchor/boundingbox)

# boundingBox

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The bounding box of an anchor.

## Declaration

```swift
var boundingBox: ObjectAnchor.AxisAlignedBoundingBox { get }
```

## See Also

### Inspecting an object anchor

- [ObjectAnchor.AxisAlignedBoundingBox](axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](description.md): A textual representation of this anchor.
- [isTracked](istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](../referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](../referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
