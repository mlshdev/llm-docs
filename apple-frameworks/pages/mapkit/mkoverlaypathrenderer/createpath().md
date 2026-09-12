> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/createpath()](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/createpath())

# createPath() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates the path for the overlay.

## Declaration

```swift
func createPath()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to create the [CGPath](../../coregraphics/cgpath.md) data type the subclass uses for drawing. After creating the path, your implementation needs to assign it to the [path](path.md) property.

## See Also

### Creating and managing the path

- [path](path.md): The path representing the overlay’s shape.
- [invalidatePath()](invalidatepath%28%29.md): Updates the path associated with the overlay renderer.

# createPath (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Creates the path for the overlay.

## Declaration

```objectivec
- (void) createPath;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to create the [CGPathRef](../../coregraphics/cgpath.md) data type the subclass uses for drawing. After creating the path, your implementation needs to assign it to the [path](path.md) property.

## See Also

### Creating and managing the path

- [path](path.md): The path representing the overlay’s shape.
- [invalidatePath](invalidatepath%28%29.md): Updates the path associated with the overlay renderer.
