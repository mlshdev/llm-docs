> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(cgcolor:)-27r9g](https://developer.apple.com/documentation/uikit/uicolor/init(cgcolor:)-27r9g)

# init(cgColor:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified Quartz color reference.

## Declaration

```swift
init(cgColor: CGColor)
```

## Parameters

- `cgColor`: A reference to a Quartz color.

<a id="return-value"></a>

## Return Value

An initialized color object. The color information represented by this object is in the native colorspace of the specified Quartz color.

## See Also

### Creating a color from another color object

- [init(\_:)](init%28__%29.md): Creates a color object that encapsulates a SwiftUI color.
- [init(ciColor:)](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [withAlphaComponent(\_:)](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

# initWithCGColor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object using the specified Quartz color reference.

## Declaration

```objectivec
- (UIColor *) initWithCGColor:(CGColorRef) cgColor;
```

## Parameters

- `cgColor`: A reference to a Quartz color.

<a id="return-value"></a>

## Return Value

An initialized color object. The color information represented by this object is in the native colorspace of the specified Quartz color.

## See Also

### Related Documentation

- [colorWithCGColor:](colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.

### Creating a color from another color object

- [colorWithCIColor:](colorwithcicolor_.md): Creates a color object that encapsulates a Core Image color.
- [initWithCIColor:](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [colorWithCGColor:](colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.
