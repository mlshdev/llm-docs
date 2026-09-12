> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/skadtestsession/developerpostbackurl](https://developer.apple.com/documentation/storekittest/skadtestsession/developerpostbackurl)

# developerPostbackURL (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The URL that SKAdNetwork computes to send copies of winning postbacks to the advertised app’s developer.

## Declaration

```swift
var developerPostbackURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to view the URL that [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) computes to send a copy of the winning postback to the developer. This property has a valid URL only if you specify a valid URL in the [NSAdvertisingAttributionReportEndpoint](https://developer.apple.com/documentation/bundleresources/information-property-list/nsadvertisingattributionreportendpoint) key in your app’s `Info.plist`. For more information, see [Configuring an advertised app](https://developer.apple.com/documentation/storekit/configuring-an-advertised-app).

> **Note**

>  The testing environment doesn’t use this URL. [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) sends copies of winning postbacks in the production environment only.

# developerPostbackURL (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The URL that SKAdNetwork computes to send copies of winning postbacks to the advertised app’s developer.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * developerPostbackURL;
```

<a id="discussion"></a>

## Discussion

Use this property to view the URL that [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) computes to send a copy of the winning postback to the developer. This property has a valid URL only if you specify a valid URL in the [NSAdvertisingAttributionReportEndpoint](https://developer.apple.com/documentation/bundleresources/information-property-list/nsadvertisingattributionreportendpoint) key in your app’s `Info.plist`. For more information, see [Configuring an advertised app](https://developer.apple.com/documentation/storekit/configuring-an-advertised-app).

> **Note**

>  The testing environment doesn’t use this URL. [SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork) sends copies of winning postbacks in the production environment only.
