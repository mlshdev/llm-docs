> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/webpageurl](https://developer.apple.com/documentation/foundation/nsuseractivity/webpageurl)

# webpageURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL of the webpage to load in a browser to continue the activity.

## Declaration

```swift
var webpageURL: URL? { get set }
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)
- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

When no suitable app is installed on a resuming device and the [webpageURL](webpageurl.md) property is set, the specified webpage is loaded and the user activity is continued in a web browser.

If your activity’s content can be restored on the web or you support Safari universal links, be sure to set this property so that the system can resume the activity in Safari or your app. After setting the [webpageURL](webpageurl.md) property on an activity for which [isEligibleForSearch](iseligibleforsearch.md) is [true](https://developer.apple.com/documentation/swift/true), also set the [requiredUserInfoKeys](requireduserinfokeys.md) property, using the keys of the [userInfo](userinfo.md) dictionary that must be stored. If you don’t also set the [requiredUserInfoKeys](requireduserinfokeys.md) property, the [userInfo](userinfo.md) dictionary will be empty when the activity is restored.

If [isEligibleForSearch](iseligibleforsearch.md) is [true](https://developer.apple.com/documentation/swift/true) for this activity and you’re using both [NSUserActivity](../nsuseractivity.md) and web markup to index the same item, set [webpageURL](webpageurl.md) to the relevant URL on your website to avoid showing duplicate results in Spotlight. The [NSUserActivity](../nsuseractivity.md) API does not perform any modifications to the URL that you specify. URL components, such as the query string and the fragment identifier, are used for matching the item against pages that are indexed by Applebot.

> **Note**

>  The scheme of the [webpageURL](webpageurl.md) must be `http` or `https`. Any other scheme throws an exception.

## See Also

### Browsing the web

- [referrerURL](referrerurl.md): The URL of the webpage that linked to the webpage URL.
- [NSUserActivityTypeBrowsingWeb](../nsuseractivitytypebrowsingweb.md): An activity that continues from Handoff or a universal link.
- [TVUserActivityTypeBrowsingChannelGuide](../../tvservices/tvuseractivitytypebrowsingchannelguide.md): An activity for viewing your app’s channel guide.

# webpageURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The URL of the webpage to load in a browser to continue the activity.

## Declaration

```objectivec
@property (copy, nullable) NSURL * webpageURL;
```

## Mentioned In

- [Supporting the creation of Quick Notes](../supporting-the-creation-of-quick-notes.md)
- [Creating a user activity object](../creating-a-user-activity-object.md)

<a id="Discussion"></a>

## Discussion

When no suitable app is installed on a resuming device and the [webpageURL](webpageurl.md) property is set, the specified webpage is loaded and the user activity is continued in a web browser.

If your activity’s content can be restored on the web or you support Safari universal links, be sure to set this property so that the system can resume the activity in Safari or your app. After setting the [webpageURL](webpageurl.md) property on an activity for which [eligibleForSearch](iseligibleforsearch.md) is [true](https://developer.apple.com/documentation/swift/true), also set the [requiredUserInfoKeys](requireduserinfokeys.md) property, using the keys of the [userInfo](userinfo.md) dictionary that must be stored. If you don’t also set the [requiredUserInfoKeys](requireduserinfokeys.md) property, the [userInfo](userinfo.md) dictionary will be empty when the activity is restored.

If [eligibleForSearch](iseligibleforsearch.md) is [true](https://developer.apple.com/documentation/swift/true) for this activity and you’re using both [NSUserActivity](../nsuseractivity.md) and web markup to index the same item, set [webpageURL](webpageurl.md) to the relevant URL on your website to avoid showing duplicate results in Spotlight. The [NSUserActivity](../nsuseractivity.md) API does not perform any modifications to the URL that you specify. URL components, such as the query string and the fragment identifier, are used for matching the item against pages that are indexed by Applebot.

> **Note**

>  The scheme of the [webpageURL](webpageurl.md) must be `http` or `https`. Any other scheme throws an exception.

## See Also

### Browsing the web

- [referrerURL](referrerurl.md): The URL of the webpage that linked to the webpage URL.
- [NSUserActivityTypeBrowsingWeb](../nsuseractivitytypebrowsingweb.md): An activity that continues from Handoff or a universal link.
- [TVUserActivityTypeBrowsingChannelGuide](../../tvservices/tvuseractivitytypebrowsingchannelguide.md): An activity for viewing your app’s channel guide.
