> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap/height(at:)](https://developer.apple.com/documentation/accessibility/axbraillemap/height(at:))

# height(at:) (Swift)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Retrieves the height of an individual pin on the braille display.

## Declaration

```swift
func height(at point: CGPoint) -> Float
```

## Parameters

- `point`: The location of the pin to retrieve the height for. The bottom-left of the display is at `{ 0,0 }`, and the top-right of the display is at `{ dimensions.width - 1, dimensions.height - 1}`.

<a id="return-value"></a>

## Return Value

A floating-point number between `0.0` and `1.0` that specifies the height of the pin. A value of `0.0` indicates that the pin is completely lowered, and a value of `1.0` indicates that the pin is completely raised.

## See Also

### Accessing dots

- [setHeight(\_:at:)](setheight%28__at_%29.md): Sets the height of an individual pin on the braille display.
- [subscript(\_:)](subscript%28__%29.md): Accesses the height of an individual pin on the braille display.

# heightAtPoint: (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Method  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

Retrieves the height of an individual pin on the braille display.

## Declaration

```objectivec
- (float) heightAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The location of the pin to retrieve the height for. The bottom-left of the display is at `{ 0,0 }`, and the top-right of the display is at `{ dimensions.width - 1, dimensions.height - 1}`.

<a id="return-value"></a>

## Return Value

A floating-point number between `0.0` and `1.0` that specifies the height of the pin. A value of `0.0` indicates that the pin is completely lowered, and a value of `1.0` indicates that the pin is completely raised.

## See Also

### Accessing dots

- [setHeight:atPoint:](setheight%28__at_%29.md): Sets the height of an individual pin on the braille display.
