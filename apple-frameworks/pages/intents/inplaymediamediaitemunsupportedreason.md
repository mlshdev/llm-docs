> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediamediaitemunsupportedreason](https://developer.apple.com/documentation/intents/inplaymediamediaitemunsupportedreason)

# INPlayMediaMediaItemUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t play the media item.

## Declaration

```swift
enum INPlayMediaMediaItemUnsupportedReason
```

## Topics

### Limitations

- [INPlayMediaMediaItemUnsupportedReason.loginRequired](inplaymediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INPlayMediaMediaItemUnsupportedReason.subscriptionRequired](inplaymediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INPlayMediaMediaItemUnsupportedReason.unsupportedMediaType](inplaymediamediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is not supported.
- [INPlayMediaMediaItemUnsupportedReason.explicitContentSettings](inplaymediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to play the media item.
- [INPlayMediaMediaItemUnsupportedReason.cellularDataSettings](inplaymediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to play the media item.
- [INPlayMediaMediaItemUnsupportedReason.restrictedContent](inplaymediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INPlayMediaMediaItemUnsupportedReason.regionRestriction](inplaymediamediaitemunsupportedreason/regionrestriction.md): The media isn’t available in the user’s geographic location.
- [INPlayMediaMediaItemUnsupportedReason.serviceUnavailable](inplaymediamediaitemunsupportedreason/serviceunavailable.md): The app can’t add the item because its media service isn’t available.

### Initializers

- [init(rawValue:)](inplaymediamediaitemunsupportedreason/init%28rawvalue_%29.md)

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

- [unsupported(forReason:)](inplaymediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your app is unable to support the current request.

# INPlayMediaMediaItemUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t play the media item.

## Declaration

```objectivec
enum INPlayMediaMediaItemUnsupportedReason : NSInteger;
```

## Topics

### Limitations

- [INPlayMediaMediaItemUnsupportedReasonLoginRequired](inplaymediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INPlayMediaMediaItemUnsupportedReasonSubscriptionRequired](inplaymediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INPlayMediaMediaItemUnsupportedReasonUnsupportedMediaType](inplaymediamediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is not supported.
- [INPlayMediaMediaItemUnsupportedReasonExplicitContentSettings](inplaymediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to play the media item.
- [INPlayMediaMediaItemUnsupportedReasonCellularDataSettings](inplaymediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to play the media item.
- [INPlayMediaMediaItemUnsupportedReasonRestrictedContent](inplaymediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INPlayMediaMediaItemUnsupportedReasonRegionRestriction](inplaymediamediaitemunsupportedreason/regionrestriction.md): The media isn’t available in the user’s geographic location.
- [INPlayMediaMediaItemUnsupportedReasonServiceUnavailable](inplaymediamediaitemunsupportedreason/serviceunavailable.md): The app can’t add the item because its media service isn’t available.

## See Also

### Reporting a Problem

- [unsupportedForReason:](inplaymediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request, because your app is unable to support the current request.
