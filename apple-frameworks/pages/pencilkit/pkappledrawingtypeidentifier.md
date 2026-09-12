> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkappledrawingtypeidentifier](https://developer.apple.com/documentation/pencilkit/pkappledrawingtypeidentifier)

# PKAppleDrawingTypeIdentifier (Swift)

**Framework:** PencilKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The uniform type identifier for data associated with a drawing object.

## Declaration

```swift
let PKAppleDrawingTypeIdentifier: CFString
```

<a id="Discussion"></a>

## Discussion

Use this type when reading or writing drawing data. For example, use this type to determine if you can read data from the pasteboard.

## See Also

### Getting the drawing data

- [strokes](pkdrawing-swift.struct/strokes.md): The array of strokes that make up the drawing.
- [dataRepresentation()](pkdrawing-swift.struct/datarepresentation%28%29.md): Returns a raw data representation of the rendered content.

# PKAppleDrawingTypeIdentifier (Objective-C)

**Framework:** PencilKit  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The uniform type identifier for data associated with a drawing object.

## Declaration

```objectivec
extern CFStringRef const PKAppleDrawingTypeIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this type when reading or writing drawing data. For example, use this type to determine if you can read data from the pasteboard.
