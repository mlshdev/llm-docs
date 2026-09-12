> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediamediaitemunsupportedreason](https://developer.apple.com/documentation/intents/inaddmediamediaitemunsupportedreason)

# INAddMediaMediaItemUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t add the media item.

## Declaration

```swift
enum INAddMediaMediaItemUnsupportedReason
```

## Topics

### Limitations

- [INAddMediaMediaItemUnsupportedReason.loginRequired](inaddmediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INAddMediaMediaItemUnsupportedReason.subscriptionRequired](inaddmediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INAddMediaMediaItemUnsupportedReason.unsupportedMediaType](inaddmediamediaitemunsupportedreason/unsupportedmediatype.md): The media is an unsupported type.
- [INAddMediaMediaItemUnsupportedReason.explicitContentSettings](inaddmediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to add the media item.
- [INAddMediaMediaItemUnsupportedReason.cellularDataSettings](inaddmediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to add the media item.
- [INAddMediaMediaItemUnsupportedReason.restrictedContent](inaddmediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INAddMediaMediaItemUnsupportedReason.regionRestriction](inaddmediamediaitemunsupportedreason/regionrestriction.md): The media is unavailable to add in the user’s geographic location.
- [INAddMediaMediaItemUnsupportedReason.serviceUnavailable](inaddmediamediaitemunsupportedreason/serviceunavailable.md): The media service isn’t available.

### Initializers

- [init(rawValue:)](inaddmediamediaitemunsupportedreason/init%28rawvalue_%29.md)

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

- [unsupported(forReason:)](inaddmediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.

# INAddMediaMediaItemUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t add the media item.

## Declaration

```objectivec
enum INAddMediaMediaItemUnsupportedReason : NSInteger;
```

## Topics

### Limitations

- [INAddMediaMediaItemUnsupportedReasonLoginRequired](inaddmediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app.
- [INAddMediaMediaItemUnsupportedReasonSubscriptionRequired](inaddmediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service.
- [INAddMediaMediaItemUnsupportedReasonUnsupportedMediaType](inaddmediamediaitemunsupportedreason/unsupportedmediatype.md): The media is an unsupported type.
- [INAddMediaMediaItemUnsupportedReasonExplicitContentSettings](inaddmediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to add the media item.
- [INAddMediaMediaItemUnsupportedReasonCellularDataSettings](inaddmediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to add the media item.
- [INAddMediaMediaItemUnsupportedReasonRestrictedContent](inaddmediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INAddMediaMediaItemUnsupportedReasonRegionRestriction](inaddmediamediaitemunsupportedreason/regionrestriction.md): The media is unavailable to add in the user’s geographic location.
- [INAddMediaMediaItemUnsupportedReasonServiceUnavailable](inaddmediamediaitemunsupportedreason/serviceunavailable.md): The media service isn’t available.

## See Also

### Reporting a Problem

- [unsupportedForReason:](inaddmediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.
