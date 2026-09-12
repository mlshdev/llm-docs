> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/referrerurl](https://developer.apple.com/documentation/foundation/nsuseractivity/referrerurl)

# referrerURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The URL of the webpage that linked to the webpage URL.

## Declaration

```swift
var referrerURL: URL? { get set }
```

## See Also

### Browsing the web

- [webpageURL](webpageurl.md): The URL of the webpage to load in a browser to continue the activity.
- [NSUserActivityTypeBrowsingWeb](../nsuseractivitytypebrowsingweb.md): An activity that continues from Handoff or a universal link.
- [TVUserActivityTypeBrowsingChannelGuide](../../tvservices/tvuseractivitytypebrowsingchannelguide.md): An activity for viewing your app’s channel guide.

# referrerURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The URL of the webpage that linked to the webpage URL.

## Declaration

```objectivec
@property (copy, nullable) NSURL * referrerURL;
```

## See Also

### Browsing the web

- [webpageURL](webpageurl.md): The URL of the webpage to load in a browser to continue the activity.
- [NSUserActivityTypeBrowsingWeb](../nsuseractivitytypebrowsingweb.md): An activity that continues from Handoff or a universal link.
- [TVUserActivityTypeBrowsingChannelGuide](../../tvservices/tvuseractivitytypebrowsingchannelguide.md): An activity for viewing your app’s channel guide.
