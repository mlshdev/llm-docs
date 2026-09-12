> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objectanchor/referenceobject](https://developer.apple.com/documentation/arkit/objectanchor/referenceobject)

# referenceObject

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The reference object that an anchor corresponds to.

## Declaration

```swift
var referenceObject: ReferenceObject { get }
```

## See Also

### Inspecting an object anchor

- [boundingBox](boundingbox.md): The bounding box of an anchor.
- [ObjectAnchor.AxisAlignedBoundingBox](axisalignedboundingbox.md): Values that describe an axis-aligned bounding box.
- [description](description.md): A textual representation of this anchor.
- [isTracked](istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [inputFile](../referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](../referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
