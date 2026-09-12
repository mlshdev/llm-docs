> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkdrawingreference/datarepresentation()](https://developer.apple.com/documentation/pencilkit/pkdrawingreference/datarepresentation())

# dataRepresentation() (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a representation of the rendered content as data.

## Declaration

```swift
func dataRepresentation() -> Data
```

<a id="return-value"></a>

## Return Value

A new [NSData](../../foundation/nsdata.md) object that contains the entire contents of the drawing.

## See Also

### Getting the drawing data

- [strokes](strokes.md): An array of strokes used to represent the drawing.
- [PKAppleDrawingTypeIdentifier](../pkappledrawingtypeidentifier.md): The uniform type identifier for data associated with a drawing object.

# dataRepresentation (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a representation of the rendered content as data.

## Declaration

```objectivec
- (NSData *) dataRepresentation;
```

<a id="return-value"></a>

## Return Value

A new [NSData](../../foundation/nsdata.md) object that contains the entire contents of the drawing.

## See Also

### Getting the drawing data

- [strokes](strokes.md): An array of strokes used to represent the drawing.
- [PKAppleDrawingTypeIdentifier](../pkappledrawingtypeidentifier.md): The uniform type identifier for data associated with a drawing object.
