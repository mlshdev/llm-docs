> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinitymediaitemunsupportedreason](https://developer.apple.com/documentation/intents/inupdatemediaaffinitymediaitemunsupportedreason)

# INUpdateMediaAffinityMediaItemUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t update the user’s affinity for the media item.

## Declaration

```swift
enum INUpdateMediaAffinityMediaItemUnsupportedReason
```

## Topics

### Limitations

- [INUpdateMediaAffinityMediaItemUnsupportedReason.loginRequired](inupdatemediaaffinitymediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.subscriptionRequired](inupdatemediaaffinitymediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.unsupportedMediaType](inupdatemediaaffinitymediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is unsupported.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.explicitContentSettings](inupdatemediaaffinitymediaitemunsupportedreason/explicitcontentsettings.md): The explicit content settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.cellularDataSettings](inupdatemediaaffinitymediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.restrictedContent](inupdatemediaaffinitymediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.regionRestriction](inupdatemediaaffinitymediaitemunsupportedreason/regionrestriction.md): The app can’t update the user’s affinity for the media because the media isn’t available in the user’s geographic location.
- [INUpdateMediaAffinityMediaItemUnsupportedReason.serviceUnavailable](inupdatemediaaffinitymediaitemunsupportedreason/serviceunavailable.md): The app can’t update the user’s affinity because the media service is unavailable.

### Initializers

- [init(rawValue:)](inupdatemediaaffinitymediaitemunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reporting a Problem

- [unsupported(forReason:)](inupdatemediaaffinitymediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your is unable to support the current request.

# INUpdateMediaAffinityMediaItemUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t update the user’s affinity for the media item.

## Declaration

```objectivec
enum INUpdateMediaAffinityMediaItemUnsupportedReason : NSInteger;
```

## Topics

### Limitations

- [INUpdateMediaAffinityMediaItemUnsupportedReasonLoginRequired](inupdatemediaaffinitymediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonSubscriptionRequired](inupdatemediaaffinitymediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonUnsupportedMediaType](inupdatemediaaffinitymediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is unsupported.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonExplicitContentSettings](inupdatemediaaffinitymediaitemunsupportedreason/explicitcontentsettings.md): The explicit content settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonCellularDataSettings](inupdatemediaaffinitymediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to update the media item’s affinity.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonRestrictedContent](inupdatemediaaffinitymediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonRegionRestriction](inupdatemediaaffinitymediaitemunsupportedreason/regionrestriction.md): The app can’t update the user’s affinity for the media because the media isn’t available in the user’s geographic location.
- [INUpdateMediaAffinityMediaItemUnsupportedReasonServiceUnavailable](inupdatemediaaffinitymediaitemunsupportedreason/serviceunavailable.md): The app can’t update the user’s affinity because the media service is unavailable.

## See Also

### Reporting a Problem

- [unsupportedForReason:](inupdatemediaaffinitymediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your is unable to support the current request.
