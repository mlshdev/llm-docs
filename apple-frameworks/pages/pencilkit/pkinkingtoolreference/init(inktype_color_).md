> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/init(inktype:color:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/init(inktype:color:))

# init(inkType:color:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an ink tool object with the default line width and the specified color.

## Declaration

```swift
convenience init(inkType type: __PKInkType, color: UIColor)
```

```swift
convenience init(inkType type: __PKInkType, color: NSColor)
```

## Parameters

- `type`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `color`: The color to apply to drawn lines.

<a id="return-value"></a>

## Return Value

A new inking tool with the specified type and color.

<a id="Discussion"></a>

## Discussion

This method sets the line width to the value returned by [defaultWidth(forInkType:)](defaultwidth%28forinktype_%29.md).

## See Also

### Creating an inking tool

- [init(inkType:color:width:)](init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [init(ink:width:)](init%28ink_width_%29.md): Create an inking tool with the specified ink and width.

# initWithInkType:color: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an ink tool object with the default line width and the specified color.

## Declaration

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(UIColor *) color;
```

```objectivec
- (instancetype) initWithInkType:(PKInkType) type color:(NSColor *) color;
```

## Parameters

- `type`: The shape of the tool. You may specify [PKInkTypeMarker](../pkinktypemarker.md), [PKInkTypePen](../pkinktypepen.md), or [PKInkTypePencil](../pkinktypepencil.md).
- `color`: The color to apply to drawn lines.

<a id="return-value"></a>

## Return Value

A new inking tool with the specified type and color.

<a id="Discussion"></a>

## Discussion

This method sets the line width to the value returned by [defaultWidthForInkType:](defaultwidth%28forinktype_%29.md).

## See Also

### Creating an inking tool

- [initWithInkType:color:width:](init%28inktype_color_width_%29.md): Creates an ink tool object with the specified color and line width values.
- [initWithInk:width:](init%28ink_width_%29.md): Create an inking tool with the specified ink and width.
