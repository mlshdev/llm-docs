> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediamediaitemunsupportedreason](https://developer.apple.com/documentation/intents/insearchformediamediaitemunsupportedreason)

# INSearchForMediaMediaItemUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t provide results for the search.

## Declaration

```swift
enum INSearchForMediaMediaItemUnsupportedReason
```

## Topics

### Limitations

- [INSearchForMediaMediaItemUnsupportedReason.loginRequired](insearchformediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReason.subscriptionRequired](insearchformediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReason.unsupportedMediaType](insearchformediamediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is not supported.
- [INSearchForMediaMediaItemUnsupportedReason.explicitContentSettings](insearchformediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReason.cellularDataSettings](insearchformediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReason.restrictedContent](insearchformediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INSearchForMediaMediaItemUnsupportedReason.regionRestriction](insearchformediamediaitemunsupportedreason/regionrestriction.md): There are media items that match this request, but they aren’t available in the user’s geographic location.
- [INSearchForMediaMediaItemUnsupportedReason.serviceUnavailable](insearchformediamediaitemunsupportedreason/serviceunavailable.md): The app couldn’t perform the search because the media service is unavailable.

### Initializers

- [init(rawValue:)](insearchformediamediaitemunsupportedreason/init%28rawvalue_%29.md)

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

- [unsupported(forReason:)](insearchformediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.

# INSearchForMediaMediaItemUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Reasons the app can’t provide results for the search.

## Declaration

```objectivec
enum INSearchForMediaMediaItemUnsupportedReason : NSInteger;
```

## Topics

### Limitations

- [INSearchForMediaMediaItemUnsupportedReasonLoginRequired](insearchformediamediaitemunsupportedreason/loginrequired.md): The user must log in to the app in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReasonSubscriptionRequired](insearchformediamediaitemunsupportedreason/subscriptionrequired.md): The user must have a subscription to the app’s service in order to search for media.
- [INSearchForMediaMediaItemUnsupportedReasonUnsupportedMediaType](insearchformediamediaitemunsupportedreason/unsupportedmediatype.md): The media’s type is not supported.
- [INSearchForMediaMediaItemUnsupportedReasonExplicitContentSettings](insearchformediamediaitemunsupportedreason/explicitcontentsettings.md): The content settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReasonCellularDataSettings](insearchformediamediaitemunsupportedreason/cellulardatasettings.md): The cellular data settings don’t allow the user to search for the media item.
- [INSearchForMediaMediaItemUnsupportedReasonRestrictedContent](insearchformediamediaitemunsupportedreason/restrictedcontent.md): The media item is restricted content.
- [INSearchForMediaMediaItemUnsupportedReasonRegionRestriction](insearchformediamediaitemunsupportedreason/regionrestriction.md): There are media items that match this request, but they aren’t available in the user’s geographic location.
- [INSearchForMediaMediaItemUnsupportedReasonServiceUnavailable](insearchformediamediaitemunsupportedreason/serviceunavailable.md): The app couldn’t perform the search because the media service is unavailable.

## See Also

### Reporting a Problem

- [unsupportedForReason:](insearchformediamediaitemresolutionresult/unsupported%28forreason_%29.md): Creates a result that requires the user to confirm the request because your app is unable to support the current request.
