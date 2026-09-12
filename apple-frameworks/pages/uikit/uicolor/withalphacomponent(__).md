> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/withalphacomponent(_:)](https://developer.apple.com/documentation/uikit/uicolor/withalphacomponent(_:))

# withAlphaComponent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

## Declaration

```swift
func withAlphaComponent(_ alpha: CGFloat) -> UIColor
```

## Parameters

- `alpha`: The opacity value of the new color object, specified as a value from 0.0 to 1.0. Alpha values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

<a id="return-value"></a>

## Return Value

The new `UIColor` object.

<a id="Discussion"></a>

## Discussion

A subclass with explicit opacity components should override this method to return a color with the specified alpha.

## See Also

### Creating a color from another color object

- [init(\_:)](init%28__%29.md): Creates a color object that encapsulates a SwiftUI color.
- [init(ciColor:)](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [init(cgColor:)](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.

# colorWithAlphaComponent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a color object that has the same color space and component values as the receiver, but has the specified alpha component.

## Declaration

```objectivec
- (UIColor *) colorWithAlphaComponent:(CGFloat) alpha;
```

## Parameters

- `alpha`: The opacity value of the new color object, specified as a value from 0.0 to 1.0. Alpha values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

<a id="return-value"></a>

## Return Value

The new `UIColor` object.

<a id="Discussion"></a>

## Discussion

A subclass with explicit opacity components should override this method to return a color with the specified alpha.

## See Also

### Creating a color from another color object

- [colorWithCIColor:](colorwithcicolor_.md): Creates a color object that encapsulates a Core Image color.
- [initWithCIColor:](init%28cicolor_%29-2z057.md): Creates a color object that encapsulates a Core Image color.
- [colorWithCGColor:](colorwithcgcolor_.md): Creates a color object using the specified Quartz color reference.
- [initWithCGColor:](init%28cgcolor_%29-27r9g.md): Creates a color object using the specified Quartz color reference.
