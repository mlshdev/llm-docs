> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinitymediaitemunsupportedreason/restrictedcontent](https://developer.apple.com/documentation/intents/inupdatemediaaffinitymediaitemunsupportedreason/restrictedcontent)

# INUpdateMediaAffinityMediaItemUnsupportedReason.restrictedContent (Swift)

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

- [INUpdateMediaAffinityMediaItemUnsupportedReason.loginRequired](loginrequired.md): The user must log in to the app.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.subscriptionRequired](subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.unsupportedMediaType](unsupportedmediatype.md): The media’s type is unsupported.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.explicitContentSettings](explicitcontentsettings.md): The explicit content settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.cellularDataSettings](cellulardatasettings.md): The cellular data settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.regionRestriction](regionrestriction.md): The app can’t update the user’s affinity for the media because the media isn’t available in the user’s geographic location.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.serviceUnavailable](serviceunavailable.md): The app can’t update the user’s affinity because the media service is unavailable.

# INUpdateMediaAffinityMediaItemUnsupportedReasonRestrictedContent (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The media item is restricted content.

## Declaration

```objectivec
INUpdateMediaAffinityMediaItemUnsupportedReasonRestrictedContent
```

<a id="Discussion"></a>

## Discussion

Use this reason for geographic region restrictions, or when none of the other, more specific reasons apply.

## See Also

### Limitations

- [INUpdateMediaAffinityMediaItemUnsupportedReasonLoginRequired](loginrequired.md): The user must log in to the app.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonSubscriptionRequired](subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonUnsupportedMediaType](unsupportedmediatype.md): The media’s type is unsupported.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonExplicitContentSettings](explicitcontentsettings.md): The explicit content settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonCellularDataSettings](cellulardatasettings.md): The cellular data settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonRegionRestriction](regionrestriction.md): The app can’t update the user’s affinity for the media because the media isn’t available in the user’s geographic location.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonServiceUnavailable](serviceunavailable.md): The app can’t update the user’s affinity because the media service is unavailable.
