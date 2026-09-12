> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/contentsrect](https://developer.apple.com/documentation/quartzcore/calayer/contentsrect)

# contentsRect (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.

## Declaration

```swift
var contentsRect: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to the unit rectangle (0.0, 0.0, 1.0, 1.0).

If pixels outside the unit rectangle are requested, the edge pixels of the contents image will be extended outwards.

If an empty rectangle is provided, the results are undefined.

## See Also

### Providing the layer’s content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display()](display%28%29.md): Reloads the content of this layer.
- [draw(in:)](draw%28in_%29.md): Draws the layer’s content using the specified graphics context.

# contentsRect (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.

## Declaration

```objectivec
@property CGRect contentsRect;
```

<a id="Discussion"></a>

## Discussion

Defaults to the unit rectangle (0.0, 0.0, 1.0, 1.0).

If pixels outside the unit rectangle are requested, the edge pixels of the contents image will be extended outwards.

If an empty rectangle is provided, the results are undefined.

## See Also

### Providing the layer’s content

- [contents](contents.md): An object that provides the contents of the layer. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display](display%28%29.md): Reloads the content of this layer.
- [drawInContext:](draw%28in_%29.md): Draws the layer’s content using the specified graphics context.
