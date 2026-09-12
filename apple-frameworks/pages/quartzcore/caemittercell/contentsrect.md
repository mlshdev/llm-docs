> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/contentsrect](https://developer.apple.com/documentation/quartzcore/caemittercell/contentsrect)

# contentsRect (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A rectangle (in the unit coordinate space) that specifies the portion of [contents](contents.md) that the receiver should draw. Animatable.

## Declaration

```swift
var contentsRect: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to the unit rectangle (0.0,0.0,1.0,1.0), which results in all of the layer’s contents being drawn.

If pixels outside the unit rectangle are requested, the edge pixels of the contents image are extended outwards.

If you assign an empty rectangle to this property, the results are undefined.

## See Also

### Providing Emitter Cell Content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [emitterCells](emittercells.md): An optional array containing the sub-cells of this cell.

# contentsRect (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A rectangle (in the unit coordinate space) that specifies the portion of [contents](contents.md) that the receiver should draw. Animatable.

## Declaration

```objectivec
@property CGRect contentsRect;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to the unit rectangle (0.0,0.0,1.0,1.0), which results in all of the layer’s contents being drawn.

If pixels outside the unit rectangle are requested, the edge pixels of the contents image are extended outwards.

If you assign an empty rectangle to this property, the results are undefined.

## See Also

### Providing Emitter Cell Content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [emitterCells](emittercells.md): An optional array containing the sub-cells of this cell.
