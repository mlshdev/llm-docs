> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/availablecolorspaces(with:)](https://developer.apple.com/documentation/appkit/nscolorspace/availablecolorspaces(with:))

# availableColorSpaces(with:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the list of color spaces available on the system that are displayed in the color panel, in the order they are displayed in the color panel.

## Declaration

```swift
class func availableColorSpaces(with model: NSColorSpace.Model) -> [NSColorSpace]
```

## Parameters

- `model`: The model to return the color spaces for.

<a id="return-value"></a>

## Return Value

The list of color spaces, or an empty array if no color spaces are available for the specified model.

<a id="Discussion"></a>

## Discussion

This method doesn’t return color spaces created on the fly or spaces without user-displayable names. Pass [NSUnknownColorSpaceModel](../nsunknowncolorspacemodel.md) as `model` to get all available color spaces.

# availableColorSpacesWithModel: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the list of color spaces available on the system that are displayed in the color panel, in the order they are displayed in the color panel.

## Declaration

```objectivec
+ (NSArray<NSColorSpace *> *) availableColorSpacesWithModel:(NSColorSpaceModel) model;
```

## Parameters

- `model`: The model to return the color spaces for.

<a id="return-value"></a>

## Return Value

The list of color spaces, or an empty array if no color spaces are available for the specified model.

<a id="Discussion"></a>

## Discussion

This method doesn’t return color spaces created on the fly or spaces without user-displayable names. Pass [NSUnknownColorSpaceModel](../nsunknowncolorspacemodel.md) as `model` to get all available color spaces.
