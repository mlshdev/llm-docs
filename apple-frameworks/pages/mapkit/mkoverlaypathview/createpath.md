> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathview/createpath](https://developer.apple.com/documentation/mapkit/mkoverlaypathview/createpath)

# createPath

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates the path for the overlay.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
- (void) createPath;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses should override it and use it to create the [CGPathRef](../../coregraphics/cgpath.md) data type to be used for drawing. After creating the path, your implementation should then assign it to the [path](path.md) property.

## See Also

### Creating and managing the path

- [path](path.md): Deprecated. The current path to use when drawing the overlay.
- [invalidatePath](invalidatepath.md): Deprecated. Releases the path associated with the receiver.
