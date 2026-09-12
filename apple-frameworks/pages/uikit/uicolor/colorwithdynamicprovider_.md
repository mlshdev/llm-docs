> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicolor/colorwithdynamicprovider:](https://developer.apple.com/documentation/uikit/uicolor/colorwithdynamicprovider:)

# colorWithDynamicProvider:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a color object that uses the specified block to generate its color data dynamically.

## Declaration

```objectivec
+ (UIColor *) colorWithDynamicProvider:(UIColor * (^)(UITraitCollection *traitCollection)) dynamicProvider;
```

## Parameters

- `dynamicProvider`: A block that determines the appropriate color values based on the specified traits. This block returns a [UIColor](../uicolor.md) object and takes a single parameter:

  - **traits**: The trait collection to use when generating the color information. Always use the traits in this collection, and not the traits of the current environment, when determining the color information.

<a id="return-value"></a>

## Return Value

A color object whose color information is provided by the specified block.

<a id="Discussion"></a>

## Discussion

Use this method to create a color object whose component values change based on the currently active traits. The block you provide creates a new color object based on the traits in the provided trait collection.

## See Also

### Creating a color dynamically

- [initWithDynamicProvider:](init%28dynamicprovider_%29.md): Creates a color object that uses the specified block to generate its color data dynamically.
