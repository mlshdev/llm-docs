> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/contents](https://developer.apple.com/documentation/quartzcore/caemittercell/contents)

# contents (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An object that provides the contents of the layer. Animatable.

## Declaration

```swift
var contents: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

A layer can set this property to a [CGImage](../../coregraphics/cgimage.md) to display the image as its contents.

The default value of this property is `nil`.

## See Also

### Providing Emitter Cell Content

- [contentsRect](contentsrect.md): A rectangle (in the unit coordinate space) that specifies the portion of [contents](contents.md) that the receiver should draw. Animatable.
- [emitterCells](emittercells.md): An optional array containing the sub-cells of this cell.

# contents (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

An object that provides the contents of the layer. Animatable.

## Declaration

```objectivec
@property (strong, nullable) id contents;
```

<a id="Discussion"></a>

## Discussion

A layer can set this property to a [CGImageRef](../../coregraphics/cgimage.md) to display the image as its contents.

The default value of this property is `nil`.

## See Also

### Providing Emitter Cell Content

- [contentsRect](contentsrect.md): A rectangle (in the unit coordinate space) that specifies the portion of [contents](contents.md) that the receiver should draw. Animatable.
- [emitterCells](emittercells.md): An optional array containing the sub-cells of this cell.
