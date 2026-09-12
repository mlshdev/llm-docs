> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtool-swift.struct/convertcolor(_:from:to:)](https://developer.apple.com/documentation/pencilkit/pkinkingtool-swift.struct/convertcolor(_:from:to:))

# convertColor(\_:from:to:)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Convert a color from one user interface style to another.

## Declaration

```swift
static func convertColor(_ color: UIColor, from: UIUserInterfaceStyle, to: UIUserInterfaceStyle) -> UIColor
```

## Parameters

- `color`: The color to convert.
- `from`: The user interface style to convert the color from.
- `to`: The user interface style to convert the color to.

<a id="return-value"></a>

## Return Value

A [UIColor](../../uikit/uicolor.md) from the user interface style specified in the `to` parameter.
