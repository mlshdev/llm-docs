> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/convert(_:from:to:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/convert(_:from:to:))

# convert(\_:from:to:) (Swift)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts a color from one user interface style to another.

## Declaration

```swift
class func convert(_ color: UIColor, from fromUserInterfaceStyle: UIUserInterfaceStyle, to toUserInterfaceStyle: UIUserInterfaceStyle) -> UIColor
```

## Parameters

- `color`: The color to convert.
- `fromUserInterfaceStyle`: The user interface style to convert the color from.
- `toUserInterfaceStyle`: The user interface style to convert the color to.

# convertColor:fromUserInterfaceStyle:to: (Objective-C)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Converts a color from one user interface style to another.

## Declaration

```objectivec
+ (UIColor *) convertColor:(UIColor *) color fromUserInterfaceStyle:(UIUserInterfaceStyle) fromUserInterfaceStyle to:(UIUserInterfaceStyle) toUserInterfaceStyle;
```

## Parameters

- `color`: The color to convert.
- `fromUserInterfaceStyle`: The user interface style to convert the color from.
- `toUserInterfaceStyle`: The user interface style to convert the color to.
