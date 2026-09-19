> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkoverlaypathview/path

# path

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The current path to use when drawing the overlay.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
@property CGPathRef path;
```

<a id="Discussion"></a>

## Discussion

Getting the value of this property causes the path to be created (using the [createPath](createpath.md) method) if it does not already exist. You can also assign a path object to this property explicitly.

When assigning a new path object to this property, the receiver retains the path you specify.

## See Also

### Creating and managing the path

- [createPath](createpath.md): Deprecated. Creates the path for the overlay.
- [invalidatePath](invalidatepath.md): Deprecated. Releases the path associated with the receiver.
