> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlaypathrenderer/invalidatepath()](https://developer.apple.com/documentation/mapkit/mkoverlaypathrenderer/invalidatepath())

# invalidatePath() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Updates the path associated with the overlay renderer.

## Declaration

```swift
func invalidatePath()
```

<a id="Discussion"></a>

## Discussion

Call this method when a change in the path information would require you to recreate the overlay’s path. This method sets the [path](path.md) property to `nil` and tells the overlay renderer to redisplay its contents.

## See Also

### Creating and managing the path

- [path](path.md): The path representing the overlay’s shape.
- [createPath()](createpath%28%29.md): Creates the path for the overlay.

# invalidatePath (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Updates the path associated with the overlay renderer.

## Declaration

```objectivec
- (void) invalidatePath;
```

<a id="Discussion"></a>

## Discussion

Call this method when a change in the path information would require you to recreate the overlay’s path. This method sets the [path](path.md) property to `nil` and tells the overlay renderer to redisplay its contents.

## See Also

### Creating and managing the path

- [path](path.md): The path representing the overlay’s shape.
- [createPath](createpath%28%29.md): Creates the path for the overlay.
