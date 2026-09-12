> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap/setheight(_:at:)](https://developer.apple.com/documentation/accessibility/axbraillemap/setheight(_:at:))

# setHeight(\_:at:) (Swift)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Sets the height of an individual pin on the braille display.

## Declaration

```swift
func setHeight(_ status: Float, at point: CGPoint)
```

## Parameters

- `status`: A floating-point number between `0.0` and `1.0` that specifies the height of the pin. A value of `0.0` lowers the pin completely, and a value of `1.0` raises the pin completely.
- `point`: The location of the pin to adjust the height for. The bottom-left of the display is at `{ 0,0 }`, and the top-right of the display is at `{ dimensions.width - 1, dimensions.height - 1}`.

## See Also

### Accessing dots

- [height(at:)](height%28at_%29.md): Retrieves the height of an individual pin on the braille display.
- [subscript(\_:)](subscript%28__%29.md): Accesses the height of an individual pin on the braille display.

# setHeight:atPoint: (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Sets the height of an individual pin on the braille display.

## Declaration

```objectivec
- (void) setHeight:(float) status atPoint:(CGPoint) point;
```

## Parameters

- `status`: A floating-point number between `0.0` and `1.0` that specifies the height of the pin. A value of `0.0` lowers the pin completely, and a value of `1.0` raises the pin completely.
- `point`: The location of the pin to adjust the height for. The bottom-left of the display is at `{ 0,0 }`, and the top-right of the display is at `{ dimensions.width - 1, dimensions.height - 1}`.

## See Also

### Accessing dots

- [heightAtPoint:](height%28at_%29.md): Retrieves the height of an individual pin on the braille display.
