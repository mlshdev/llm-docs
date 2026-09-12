> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/erasingstrokepath(_:mask:transform:)](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/erasingstrokepath(_:mask:transform:))

# erasingStrokePath(\_:mask:transform:) (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func erasingStrokePath(_ eraserPath: PKStrokePath, mask: UIBezierPath?, transform: CGAffineTransform) -> PKDrawing
```

```swift
func erasingStrokePath(_ eraserPath: PKStrokePath, mask: NSBezierPath?, transform: CGAffineTransform) -> PKDrawing
```

# drawingByErasingStrokePath:mask:transform: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (PKDrawing *) drawingByErasingStrokePath:(PKStrokePath *) eraserPath mask:(UIBezierPath *) mask transform:(CGAffineTransform) transform;
```

```objectivec
- (PKDrawing *) drawingByErasingStrokePath:(PKStrokePath *) eraserPath mask:(NSBezierPath *) mask transform:(CGAffineTransform) transform;
```
