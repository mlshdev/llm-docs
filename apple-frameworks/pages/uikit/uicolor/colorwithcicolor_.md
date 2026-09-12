> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/colorwithcicolor:](https://developer.apple.com/documentation/uikit/uicolor/colorwithcicolor:)

# colorWithCIColor:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a color object that encapsulates a Core Image color.

## Declaration

```objectivec
+ (UIColor *) colorWithCIColor:(CIColor *) ciColor;
```

## Parameters

- `ciColor`: The Core Image color to convert.

<a id="return-value"></a>

## Return Value

The `UIColor` object corresponding to the specified Core Image color.

## See Also

### Creating a color from another color object

- [initWithCIColor:](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [colorWithCGColor:](colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.
- [initWithCGColor:](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.
