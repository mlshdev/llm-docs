> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/objectanchor/axisalignedboundingbox](https://developer.apple.com/documentation/arkit/objectanchor/axisalignedboundingbox)

# ObjectAnchor.AxisAlignedBoundingBox

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

Values that describe an axis-aligned bounding box.

## Declaration

```swift
struct AxisAlignedBoundingBox
```

## Topics

### Inspecting the bounding box

- [center](axisalignedboundingbox/center.md): The center of the bounding box.
- [extent](axisalignedboundingbox/extent.md): The extent of the bounding box.
- [max](axisalignedboundingbox/max.md): The maximum coordinates for the bounding box.
- [min](axisalignedboundingbox/min.md): Minimum coordinates for the bounding box.

### Operators

- [==(\_:\_:)](axisalignedboundingbox/==%28____%29.md): Returns a Boolean value indicating whether two axis-aligned bounding boxes are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an object anchor

- [boundingBox](boundingbox.md): The bounding box of an anchor.
- [description](description.md): A textual representation of this anchor.
- [isTracked](istracked.md): A Boolean value that indicates whether the framework is currently tracking an object anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the object anchor to the origin coordinate system.
- [referenceObject](referenceobject.md): The reference object that an anchor corresponds to.
- [inputFile](../referenceobject/inputfile.md): The input file the framework uses for loading a reference object.
- [usdzFile](../referenceobject/usdzfile.md): The trained USDZ file, if the reference object includes one.
- [ReferenceObject](../referenceobject.md): An object the framework can track.
