> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotation/paths](https://developer.apple.com/documentation/pdfkit/pdfannotation/paths)

# paths (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

An array of bezier paths, in annotation-space coordinates, that compose the annotation.

## Declaration

```swift
var paths: [UIBezierPath]? { get }
```

```swift
var paths: [NSBezierPath]? { get }
```

## See Also

### Configuring Ink Annotations

- [add(\_:)](add%28__%29.md): Adds a bezier path to the ink annotation.
- [remove(\_:)](remove%28__%29.md): Removes a bezier path from an ink annotation.

# paths (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

An array of bezier paths, in annotation-space coordinates, that compose the annotation.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<UIBezierPath *> * paths;
```

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSBezierPath *> * paths;
```

## See Also

### Configuring Ink Annotations

- [addBezierPath:](add%28__%29.md): Adds a bezier path to the ink annotation.
- [removeBezierPath:](remove%28__%29.md): Removes a bezier path from an ink annotation.
