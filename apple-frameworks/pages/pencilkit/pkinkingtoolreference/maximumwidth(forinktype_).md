> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/maximumwidth(forinktype:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/maximumwidth(forinktype:))

# maximumWidth(forInkType:) (Swift)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the maximum allowed line width for the specified tool type.

## Declaration

```swift
class func maximumWidth(forInkType inkType: __PKInkType) -> CGFloat
```

## Parameters

- `inkType`: The type of tool whose maximum line width you want.

<a id="return-value"></a>

## Return Value

The maximum line width (in points) for the specified tool type.

## See Also

### Getting the standard ink widths

- [defaultWidth(forInkType:)](defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [minimumWidth(forInkType:)](minimumwidth%28forinktype_%29.md): Returns the minimum allowed line width for the specified tool type.

# maximumWidthForInkType: (Objective-C)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the maximum allowed line width for the specified tool type.

## Declaration

```objectivec
+ (CGFloat) maximumWidthForInkType:(PKInkType) inkType;
```

## Parameters

- `inkType`: The type of tool whose maximum line width you want.

<a id="return-value"></a>

## Return Value

The maximum line width (in points) for the specified tool type.

## See Also

### Getting the standard ink widths

- [defaultWidthForInkType:](defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [minimumWidthForInkType:](minimumwidth%28forinktype_%29.md): Returns the minimum allowed line width for the specified tool type.
