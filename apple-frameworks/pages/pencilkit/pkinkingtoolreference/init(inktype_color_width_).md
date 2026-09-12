> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/init(inktype:color:width:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/init(inktype:color:width:))

# init(inkType:color:width:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an ink tool object with the specified color and line width values.

## Declaration

```swift
init(inkType type: __PKInkType, color: UIColor, width: CGFloat)
```

```swift
init(inkType type: __PKInkType, color: NSColor, width: CGFloat)
```

## Parameters

- `type`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `color`: The color to apply to drawn lines.
- `width`: The base width to apply to any drawn lines. The value in the `inkType` parameter and input from Apple Pencil affects the final actual width.

<a id="return-value"></a>

## Return Value

A new inking tool with the specified type, color, and width.

## See Also

### Creating an inking tool

- [init(inkType:color:)](init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.
- [init(ink:width:)](init%28ink_width_%29.md): Create an inking tool with the specified ink and width.

# initWithInkType:color:width: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an ink tool object with the specified color and line width values.

## Declaration

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(UIColor *) color width:(CGFloat) width;
```

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(NSColor *) color width:(CGFloat) width;
```

## Parameters

- `type`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `color`: The color to apply to drawn lines.
- `width`: The base width to apply to any drawn lines. The value in the `inkType` parameter and input from Apple Pencil affects the final actual width.

<a id="return-value"></a>

## Return Value

A new inking tool with the specified type, color, and width.

## See Also

### Creating an inking tool

- [initWithInkType:color:](init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.
- [initWithInk:width:](init%28ink_width_%29.md): Create an inking tool with the specified ink and width.
