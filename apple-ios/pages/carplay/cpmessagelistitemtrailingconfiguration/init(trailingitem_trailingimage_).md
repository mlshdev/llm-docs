> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitemtrailingconfiguration/init(trailingitem:trailingimage:)

# init(trailingItem:trailingImage:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates the configuration object with the items to display at the leading edge of the row.

## Declaration

```swift
init(trailingItem: CPMessageTrailingItem, trailingImage: UIImage?)
```

## Parameters

- `trailingItem`: A standard system symbol to display. Specify [CPMessageTrailingItem.none](../cpmessagetrailingitem/none.md) if you don’t want to display a standard symbol.
- `trailingImage`: A custom image you provide. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If you specify an image larger or smaller than the value in [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md), the initializer scales the image to that size. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.

<a id="return-value"></a>

## Return Value

An initialized configuration object.

# initWithTrailingItem:trailingImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates the configuration object with the items to display at the leading edge of the row.

## Declaration

```objectivec
- (instancetype) initWithTrailingItem:(CPMessageTrailingItem) trailingItem trailingImage:(UIImage *) trailingImage;
```

## Parameters

- `trailingItem`: A standard system symbol to display. Specify [CPMessageTrailingItemNone](../cpmessagetrailingitem/none.md) if you don’t want to display a standard symbol.
- `trailingImage`: A custom image you provide. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If you specify an image larger or smaller than the value in [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md), the initializer scales the image to that size. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.

<a id="return-value"></a>

## Return Value

An initialized configuration object.
