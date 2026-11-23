> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaximummessageitemimagesize

# CPMaximumMessageItemImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size for images in the leading and trailing regions of a message list item.

## Declaration

```swift
let CPMaximumMessageItemImageSize: CGSize
```

<a id="discussion"></a>

## Discussion

This constant contains the maximum size for custom images you use with the [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md) and [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md) types. The size values are in points. To get the pixel values, multiply this constant by the scale factor in the current traits collection for the vehicle, which you can get from the current [CPInterfaceController](cpinterfacecontroller.md) object.

## See Also

### List items

- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): A type that defines the content at the leading edge of a message list item’s row.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.

# CPMaximumMessageItemImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The maximum size for images in the leading and trailing regions of a message list item.

## Declaration

```objectivec
extern const CGSize CPMaximumMessageItemImageSize;
```

<a id="discussion"></a>

## Discussion

This constant contains the maximum size for custom images you use with the [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md) and [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md) types. The size values are in points. To get the pixel values, multiply this constant by the scale factor in the current traits collection for the vehicle, which you can get from the current [CPInterfaceController](cpinterfacecontroller.md) object.

## See Also

### List items

- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): A type that defines the content at the leading edge of a message list item’s row.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.
