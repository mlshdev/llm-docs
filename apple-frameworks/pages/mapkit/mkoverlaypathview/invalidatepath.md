> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkoverlaypathview/invalidatepath

# invalidatePath

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Releases the path associated with the receiver.

> Use an [MKOverlayPathRenderer](../mkoverlaypathrenderer.md) object instead.

## Declaration

```objectivec
- (void) invalidatePath;
```

<a id="Discussion"></a>

## Discussion

You can call this method at any time where a change in the path information would require you to recreate the path. This method sets the [path](path.md) property to `nil`, which causes the cached path to be released.

## See Also

### Creating and managing the path

- [path](path.md): Deprecated. The current path to use when drawing the overlay.
- [createPath](createpath.md): Deprecated. Creates the path for the overlay.
