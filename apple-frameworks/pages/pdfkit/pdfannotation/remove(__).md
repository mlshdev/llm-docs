> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/remove(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/remove(_:))

# remove(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Removes a bezier path from an ink annotation.

## Declaration

```swift
func remove(_ path: UIBezierPath)
```

```swift
func remove(_ path: NSBezierPath)
```

## Parameters

- `path`: The bezier path to remove, in annotation-space coordinates.

## See Also

### Configuring Ink Annotations

- [paths](paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [add(\_:)](add%28__%29.md): Adds a bezier path to the ink annotation.

# removeBezierPath: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Removes a bezier path from an ink annotation.

## Declaration

```objectivec
- (void) removeBezierPath:(UIBezierPath *) path;
```

```objectivec
- (void) removeBezierPath:(NSBezierPath *) path;
```

## Parameters

- `path`: The bezier path to remove, in annotation-space coordinates.

## See Also

### Configuring Ink Annotations

- [paths](paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [addBezierPath:](add%28__%29.md): Adds a bezier path to the ink annotation.
