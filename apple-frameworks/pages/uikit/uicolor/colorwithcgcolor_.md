> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/colorwithcgcolor:](https://developer.apple.com/documentation/uikit/uicolor/colorwithcgcolor:)

# colorWithCGColor:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified Quartz color reference.

## Declaration

```objectivec
+ (UIColor *) colorWithCGColor:(CGColorRef) cgColor;
```

## Parameters

- `cgColor`: A reference to a Quartz color.

<a id="return-value"></a>

## Return Value

The color object. The color information represented by this object is in the native colorspace of the specified Quartz color.

## See Also

### Creating a color from another color object

- [colorWithCIColor:](colorwithcicolor_.md): Creates a color object that encapsulates a Core Image color.
- [initWithCIColor:](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [initWithCGColor:](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.
