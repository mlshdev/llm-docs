> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/init(cicolor:)-2z057](https://developer.apple.com/documentation/uikit/uicolor/init(cicolor:)-2z057)

# init(ciColor:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a color object that encapsulates a Core Image color.

## Declaration

```swift
init(ciColor: CIColor)
```

## Parameters

- `ciColor`: The Core Image color to convert.

<a id="return-value"></a>

## Return Value

An initialized color object.

## See Also

### Creating a color from another color object

- [init(\_:)](init%28__%29.md): Creates a color object that encapsulates a SwiftUI color.
- [init(cgColor:)](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [withAlphaComponent(\_:)](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

# initWithCIColor: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a color object that encapsulates a Core Image color.

## Declaration

```objectivec
- (UIColor *) initWithCIColor:(CIColor *) ciColor;
```

## Parameters

- `ciColor`: The Core Image color to convert.

<a id="return-value"></a>

## Return Value

An initialized color object.

## See Also

### Creating a color from another color object

- [colorWithCIColor:](colorwithcicolor_.md): Creates a color object that encapsulates a Core Image color.
- [colorWithCGColor:](colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.
- [initWithCGColor:](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.
