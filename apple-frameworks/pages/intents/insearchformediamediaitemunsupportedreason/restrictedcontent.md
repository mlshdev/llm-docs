> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediamediaitemunsupportedreason/restrictedcontent](https://developer.apple.com/documentation/intents/insearchformediamediaitemunsupportedreason/restrictedcontent)

# INSearchForMediaMediaItemUnsupportedReason.restrictedContent (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media item is restricted content.

## Declaration

```swift
case restrictedContent
```

<a id="Discussion"></a>

## Discussion

Use this reason for geographic region restrictions, or when none of the other, more specific reasons apply.

## See Also

### Limitations

- [INSearchForMediaMediaItemUnsupportedReason.loginRequired](loginrequired.md): The user must log in to the app in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReason.subscriptionRequired](subscriptionrequired.md): The user must have a subscription to the app’s service in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReason.unsupportedMediaType](unsupportedmediatype.md): The media’s type is not supported.
- [INSearchForMediaMediaItemUnsupportedReason.explicitContentSettings](explicitcontentsettings.md): The content settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReason.cellularDataSettings](cellulardatasettings.md): The cellular data settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReason.regionRestriction](regionrestriction.md): There are media items that match this request, but they aren’t available in the user’s geographic location.
- [INSearchForMediaMediaItemUnsupportedReason.serviceUnavailable](serviceunavailable.md): The app couldn’t perform the search because the media service is unavailable.

# INSearchForMediaMediaItemUnsupportedReasonRestrictedContent (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media item is restricted content.

## Declaration

```objectivec
INSearchForMediaMediaItemUnsupportedReasonRestrictedContent
```

<a id="Discussion"></a>

## Discussion

Use this reason for geographic region restrictions, or when none of the other, more specific reasons apply.

## See Also

### Limitations

- [INSearchForMediaMediaItemUnsupportedReasonLoginRequired](loginrequired.md): The user must log in to the app in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReasonSubscriptionRequired](subscriptionrequired.md): The user must have a subscription to the app’s service in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReasonUnsupportedMediaType](unsupportedmediatype.md): The media’s type is not supported.
- [INSearchForMediaMediaItemUnsupportedReasonExplicitContentSettings](explicitcontentsettings.md): The content settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReasonCellularDataSettings](cellulardatasettings.md): The cellular data settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReasonRegionRestriction](regionrestriction.md): There are media items that match this request, but they aren’t available in the user’s geographic location.
- [INSearchForMediaMediaItemUnsupportedReasonServiceUnavailable](serviceunavailable.md): The app couldn’t perform the search because the media service is unavailable.
