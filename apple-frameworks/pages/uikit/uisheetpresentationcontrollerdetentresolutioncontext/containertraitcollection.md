> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontrollerdetentresolutioncontext/containertraitcollection](https://developer.apple.com/documentation/uikit/uisheetpresentationcontrollerdetentresolutioncontext/containertraitcollection)

# containerTraitCollection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The trait collection of the sheet’s container view.

## Declaration

```swift
var containerTraitCollection: UITraitCollection { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the same as the window’s [traitCollection](../uiwindowscene/traitcollection.md), and doesn’t include overrides from the sheet’s [overrideTraitCollection](../uipresentationcontroller/overridetraitcollection.md).

## See Also

### Accessing the properties of the context

- [maximumDetentValue](maximumdetentvalue.md): The maximum value of a detent.

# containerTraitCollection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The trait collection of the sheet’s container view.

## Declaration

```objectivec
@property (nonatomic, readonly) UITraitCollection * containerTraitCollection;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the same as the window’s [traitCollection](../uiwindowscene/traitcollection.md), and doesn’t include overrides from the sheet’s [overrideTraitCollection](../uipresentationcontroller/overridetraitcollection.md).

## See Also

### Accessing the properties of the context

- [maximumDetentValue](maximumdetentvalue.md): The maximum value of a detent.
