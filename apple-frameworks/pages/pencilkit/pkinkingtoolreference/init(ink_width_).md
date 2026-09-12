> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/init(ink:width:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/init(ink:width:))

# init(ink:width:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Create an inking tool with the specified ink and width.

## Declaration

```swift
convenience init(ink: PKInk, width: CGFloat)
```

## Parameters

- `ink`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `width`: The width of a line drawn with the tool.

## See Also

### Creating an inking tool

- [init(inkType:color:width:)](init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [init(inkType:color:)](init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.

# initWithInk:width: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+

Create an inking tool with the specified ink and width.

## Declaration

```objectivec
- (instancetype) initWithInk:(PKInk *) ink width:(CGFloat) width;
```

## Parameters

- `ink`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `width`: The width of a line drawn with the tool.

## See Also

### Creating an inking tool

- [initWithInkType:color:width:](init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [initWithInkType:color:](init%28inktype_color_%29.md): Creates an ink tool object with the default line width and the specified color.
