> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/add(_:)](https://developer.apple.com/documentation/pdfkit/pdfannotation/add(_:))

# add(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Adds a bezier path to the ink annotation.

## Declaration

```swift
func add(_ path: UIBezierPath)
```

```swift
func add(_ path: NSBezierPath)
```

## Parameters

- `path`: The bezier path to add, in annotation-space coordinates.

## See Also

### Configuring Ink Annotations

- [paths](paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [remove(\_:)](remove%28__%29.md): Removes a bezier path from an ink annotation.

# addBezierPath: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

Adds a bezier path to the ink annotation.

## Declaration

```objectivec
- (void) addBezierPath:(UIBezierPath *) path;
```

```objectivec
- (void) addBezierPath:(NSBezierPath *) path;
```

## Parameters

- `path`: The bezier path to add, in annotation-space coordinates.

## See Also

### Configuring Ink Annotations

- [paths](paths.md): An array of bezier paths, in annotation-space coordinates, that compose the annotation.
- [removeBezierPath:](remove%28__%29.md): Removes a bezier path from an ink annotation.
