> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/contents](https://developer.apple.com/documentation/quartzcore/calayer/contents)

# contents (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that provides the contents of the layer. Animatable.

## Declaration

```swift
var contents: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

If you are using the layer to display a static image, you can set this property to the [CGImage](../../coregraphics/cgimage.md) containing the image you want to display. (In macOS 10.6 and later, you can also set the property to an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object.) Assigning a value to this property causes the layer to use your image rather than create a separate backing store.

If the layer object is tied to a view object, you should avoid setting the contents of this property directly. The interplay between views and layers usually results in the view replacing the contents of this property during a subsequent update.

## See Also

### Providing the layer’s content

- [contentsRect](contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display()](display%28%29.md): Reloads the content of this layer.
- [draw(in:)](draw%28in_%29.md): Draws the layer’s content using the specified graphics context.

# contents (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An object that provides the contents of the layer. Animatable.

## Declaration

```objectivec
@property (strong, nullable) id contents;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`.

If you are using the layer to display a static image, you can set this property to the [CGImageRef](../../coregraphics/cgimage.md) containing the image you want to display. (In macOS 10.6 and later, you can also set the property to an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object.) Assigning a value to this property causes the layer to use your image rather than create a separate backing store.

If the layer object is tied to a view object, you should avoid setting the contents of this property directly. The interplay between views and layers usually results in the view replacing the contents of this property during a subsequent update.

## See Also

### Providing the layer’s content

- [contentsRect](contentsrect.md): The rectangle, in the unit coordinate space, that defines the portion of the layer’s contents that should be used. Animatable.
- [contentsCenter](contentscenter.md): The rectangle that defines how the layer contents are scaled if the layer’s contents are resized. Animatable.
- [display](display%28%29.md): Reloads the content of this layer.
- [drawInContext:](draw%28in_%29.md): Draws the layer’s content using the specified graphics context.
