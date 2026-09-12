> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/minimumwidth(forinktype:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/minimumwidth(forinktype:))

# minimumWidth(forInkType:) (Swift)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the minimum allowed line width for the specified tool type.

## Declaration

```swift
class func minimumWidth(forInkType inkType: __PKInkType) -> CGFloat
```

## Parameters

- `inkType`: The type of tool whose minimum line width you want.

<a id="return-value"></a>

## Return Value

The minimum line width (in points) for the specified tool type.

## See Also

### Getting the standard ink widths

- [defaultWidth(forInkType:)](defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [maximumWidth(forInkType:)](maximumwidth%28forinktype_%29.md): Returns the maximum allowed line width for the specified tool type.

# minimumWidthForInkType: (Objective-C)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns the minimum allowed line width for the specified tool type.

## Declaration

```objectivec
+ (CGFloat) minimumWidthForInkType:(PKInkType) inkType;
```

## Parameters

- `inkType`: The type of tool whose minimum line width you want.

<a id="return-value"></a>

## Return Value

The minimum line width (in points) for the specified tool type.

## See Also

### Getting the standard ink widths

- [defaultWidthForInkType:](defaultwidth%28forinktype_%29.md): Returns the default line width for the specified tool type.
- [maximumWidthForInkType:](maximumwidth%28forinktype_%29.md): Returns the maximum allowed line width for the specified tool type.
