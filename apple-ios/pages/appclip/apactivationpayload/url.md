> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appclip/apactivationpayload/url](https://developer.apple.com/documentation/appclip/apactivationpayload/url)

# url (Swift)

**Framework:** App Clips  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The URL of the link that launched the App Clip.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

Use `url` to retrieve data that’s passed to an App Clip on launch, and use the data to update the user interface of the App Clip.

The value of `url` is the same as the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) [webpageURL](https://developer.apple.com/documentation/foundation/nsuseractivity/webpageurl) property. If you don’t need to verify the user’s location when they launch your App Clip, use `webpageURL` instead.

For more information, see [Responding to invocations](../responding-to-invocations.md).

# URL (Objective-C)

**Framework:** App Clips  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The URL of the link that launched the App Clip.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Use `url` to retrieve data that’s passed to an App Clip on launch, and use the data to update the user interface of the App Clip.

The value of `url` is the same as the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) [webpageURL](https://developer.apple.com/documentation/foundation/nsuseractivity/webpageurl) property. If you don’t need to verify the user’s location when they launch your App Clip, use `webpageURL` instead.

For more information, see [Responding to invocations](../responding-to-invocations.md).
