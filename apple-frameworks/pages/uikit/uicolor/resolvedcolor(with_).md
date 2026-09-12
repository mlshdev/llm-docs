> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/resolvedcolor(with:)](https://developer.apple.com/documentation/uikit/uicolor/resolvedcolor(with:))

# resolvedColor(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the version of the current color that results from the specified traits.

## Declaration

```swift
func resolvedColor(with traitCollection: UITraitCollection) -> UIColor
```

## Parameters

- `traitCollection`: The traits to use when resolving the color information.

<a id="return-value"></a>

## Return Value

The version of the color to display for the specified traits.

<a id="Discussion"></a>

## Discussion

Use this method when you need to resolve a dynamic color to a specific color value for the specified trait collection. For example, reading the [cgColor](cgcolor.md) property or calling [getRed(\_:green:blue:alpha:)](getred%28__green_blue_alpha_%29.md) resolves a dynamic color to a specific color value that’s no longer dynamic. If your calling context isn’t inside one of the methods documented in the [current](../uitraitcollection/current.md) property, you need to provide a trait collection from an appropriate trait environment, such as your view or view controller.

The example below uses this method set a border color on a [CALayer](../../quartzcore/calayer.md):

```swift
// This method sets the border color when UITraitCollection.current is undefined.
func updateBorderColor(layer: CALayer) {
    
    // Read the trait collection from the view.
    let traitCollection = view.traitCollection
    // Use the trait collection to resolve a dynamic color.
    let borderColor = UIColor.label.resolvedColor(with: traitCollection)
    // Use the CGColor value of the resolved color.
    layer.borderColor = borderColor.cgColor
}
```

## See Also

### Related Documentation

- [performAsCurrent(\_:)](../uitraitcollection/performascurrent%28__%29.md): Executes custom code using the traits of the receiving trait collection.

# resolvedColorWithTraitCollection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the version of the current color that results from the specified traits.

## Declaration

```objectivec
- (UIColor *) resolvedColorWithTraitCollection:(UITraitCollection *) traitCollection;
```

## Parameters

- `traitCollection`: The traits to use when resolving the color information.

<a id="return-value"></a>

## Return Value

The version of the color to display for the specified traits.

<a id="Discussion"></a>

## Discussion

Use this method when you need to resolve a dynamic color to a specific color value for the specified trait collection. For example, reading the [CGColor](cgcolor.md) property or calling [getRed:green:blue:alpha:](getred%28__green_blue_alpha_%29.md) resolves a dynamic color to a specific color value that’s no longer dynamic. If your calling context isn’t inside one of the methods documented in the [currentTraitCollection](../uitraitcollection/current.md) property, you need to provide a trait collection from an appropriate trait environment, such as your view or view controller.

The example below uses this method set a border color on a [CALayer](../../quartzcore/calayer.md):

```swift
// This method sets the border color when UITraitCollection.current is undefined.
func updateBorderColor(layer: CALayer) {
    
    // Read the trait collection from the view.
    let traitCollection = view.traitCollection
    // Use the trait collection to resolve a dynamic color.
    let borderColor = UIColor.label.resolvedColor(with: traitCollection)
    // Use the CGColor value of the resolved color.
    layer.borderColor = borderColor.cgColor
}
```

## See Also

### Related Documentation

- [performAsCurrentTraitCollection:](../uitraitcollection/performascurrent%28__%29.md): Executes custom code using the traits of the receiving trait collection.
