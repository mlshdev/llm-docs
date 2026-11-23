> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitemleadingconfiguration/init(leadingitem:leadingimage:unread:)

# init(leadingItem:leadingImage:unread:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates the configuration object with the items to display at the leading edge of the row.

## Declaration

```swift
init(leadingItem: CPMessageLeadingItem, leadingImage: UIImage?, unread: Bool)
```

## Parameters

- `leadingItem`: A standard system symbol to display. Specify [CPMessageLeadingItem.none](../cpmessageleadingitem/none.md) if you don’t want to display a standard symbol.
- `leadingImage`: A custom image you provide. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If you specify an image larger or smaller than the value in [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md), the initializer scales the image to that size. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.
- `unread`: A Boolean that indicates the unread status of the message. When you specify `true`, CarPlay marks the message as unread and tells Siri to read the message when someone interacts with the row. When you specify `false`, CarPlay doesn’t display an unread indicator and tells Siri to initiate a workflow for composing a message in response to interactions.

<a id="return-value"></a>

## Return Value

An initialized configuration object.

# initWithLeadingItem:leadingImage:unread: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates the configuration object with the items to display at the leading edge of the row.

## Declaration

```objectivec
- (instancetype) initWithLeadingItem:(CPMessageLeadingItem) leadingItem leadingImage:(UIImage *) leadingImage unread:(BOOL) unread;
```

## Parameters

- `leadingItem`: A standard system symbol to display. Specify [CPMessageLeadingItemNone](../cpmessageleadingitem/none.md) if you don’t want to display a standard symbol.
- `leadingImage`: A custom image you provide. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If you specify an image larger or smaller than the value in [CPMaximumMessageItemImageSize](../cpmaximummessageitemimagesize.md), the initializer scales the image to that size. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.
- `unread`: A Boolean that indicates the unread status of the message. When you specify `true`, CarPlay marks the message as unread and tells Siri to read the message when someone interacts with the row. When you specify `false`, CarPlay doesn’t display an unread indicator and tells Siri to initiate a workflow for composing a message in response to interactions.

<a id="return-value"></a>

## Return Value

An initialized configuration object.
