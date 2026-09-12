> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieventattribution](https://developer.apple.com/documentation/uikit/uieventattribution)

# UIEventAttribution (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

An object that contains event attribution information for Web AdAttributionKit.

## Declaration

```swift
@MainActor class UIEventAttribution
```

<a id="overview"></a>

## Overview

Apps use event attribution objects to send data to the browser when opening an external website that supports Web AdAttributionKit (formerly known as Private Click Measurement, or PCM). For more information on the proposed PCM web standard, see [Introducing Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) and [Private Click Measurement Draft Community Group Report](https://privacycg.github.io/private-click-measurement/).

> **Note**

>  Mac apps built with Mac Catalyst don’t support Web AdAttributionKit.

You can’t subclass [UIEventAttribution](uieventattribution.md).

<a id="Define-an-endpoint"></a>

### Define an endpoint

In order to use Web AdAttributionKit, your app defines an `Info.plist` key called [NSAdvertisingAttributionReportEndpoint](../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md) that contains the URL to which the browser sends event attribution data. When an externally linked website reports that a conversion has occurred, the browser forwards your app’s event attribution data to the endpoint specified in the `Info.plist`. If your app’s `Info.plist` doesn’t contain this key, the browser won’t be able to forward the Web AdAttributionKit data when a conversion occurs.

Send event attribution data to the browser only when your app opens an external link as a result of a user tapping a control that sits below a [UIEventAttributionView](uieventattributionview.md) in the app’s view hierarchy. The event attribution view verifies that the user tapped a control. If that control doesn’t sit below an event attribution view, the system won’t send the Web AdAttributionKit data to the browser when opening the external link.

<a id="Create-an-event-attribution-data-object"></a>

### Create an event attribution data object

Here’s how you create a [UIEventAttribution](uieventattribution.md) object:

**Swift**

```swift
let adURL = URL(string: "https://shop.example/tabletStandDeluxe.html")!
let eventAttribution =
    UIEventAttribution(sourceIdentifier: 4,
                       destinationURL: adURL,
                       sourceDescription: "Banner ad for Tablet Stand Deluxe.",
                       purchaser: "Shop Example, Inc.")
```

**Objective-C**

```objc
NSURL *adURL = [NSURL URLWithString:@"https://shop.example/tabletStandDeluxe.html"];
UIEventAttribution *eventAttribution = [[UIEventAttribution alloc]
                                        initWithSourceIdentifier:4
                                        destinationURL:adURL
                                        sourceDescription:@"Banner ad for Tablet Stand Deluxe."
                                        purchaser:@"Shop Example, Inc."];
```

<a id="Send-event-attribution-data-to-the-browser"></a>

### Send event attribution data to the browser

Once you create a [UIEventAttribution](uieventattribution.md) object, send it to the browser when your app opens a URL as the result of a user tap. If the external website reports a conversion within 7 days, the browser forwards the data from the [UIEventAttribution](uieventattribution.md) object to the specified remote server sometime between 24 and 48 hours after the conversion.

There are two different ways to send event attribution data when your app opens an external link, depending on whether your app uses [UIScene](uiscene.md) or [UIApplication](uiapplication.md) for life cycle management. For more information on application life cycle management, see [Managing your app’s life cycle](managing-your-app-s-life-cycle.md).

> **Important**

>  The browser, and not your app, sends the event attribution data to the remote server. If the user’s selected browser doesn’t support Web AdAttributionKit, the event attribution fails even if the external website reports a conversion.

If your app uses [UIScene](uiscene.md)-based life cycle management, create a [UIScene.OpenExternalURLOptions](uiscene/openexternalurloptions.md) object, assign the event attribution object you created to its [eventAttribution](uiapplication/openexternalurloptionskey/eventattribution.md) property, and call [open(\_:options:completionHandler:)](uiscene/open%28__options_completionhandler_%29.md):

**Swift**

```swift
let sceneOpenURLOptions = UIScene.OpenExternalURLOptions()
sceneOpenURLOptions.eventAttribution = eventAttribution

self.view.window?.windowScene?.open(adURL,
                                    options: sceneOpenURLOptions,
                                    completionHandler: nil)
```

**Objective-C**

```objc
UISceneOpenExternalURLOptions *sceneOpenURLOptions = [[UISceneOpenExternalURLOptions alloc] init];
sceneOpenURLOptions.eventAttribution = eventAttribution;
[self.view.window.windowScene openURL:adURL
                                options:sceneOpenURLOptions
                    completionHandler:^(BOOL success) {
    if (success == NO) {
        // Handle error
    }
}];
```

If your app uses [UIApplication](uiapplication.md)-based life cycle management, create a dictionary that contains the [eventAttribution](uiapplication/openurloptionskey/eventattribution.md) key with the [UIEventAttribution](uieventattribution.md) object you created as its value, and call [open(\_:options:completionHandler:)](uiapplication/open%28__options_completionhandler_%29.md), passing the dictionary using the `options` parameter.

**Swift**

```swift
let appOpenURLOptions: [UIApplication.OpenExternalURLOptionsKey : Any] = [
    .eventAttribution: eventAttribution
]
UIApplication.shared.open(adURL,
                          options: appOpenURLOptions,
                          completionHandler: nil)
```

**Objective-C**

```objc
NSDictionary<NSString *, NSObject *> *appOpenURLOptions = [NSDictionary dictionaryWithObject:eventAttribution forKey:UIApplicationOpenURLOptionsEventAttributionKey];

[[UIApplication sharedApplication] openURL:adURL
                                   options:appOpenURLOptions
                         completionHandler:^(BOOL success) {
    if (success == NO) {
        // Handle error
    }
}];
```

<a id="Send-event-attribution-data-to-SFSafariViewController"></a>

### Send event attribution data to SFSafariViewController

If your app displays a web page in [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) after a person taps an ad, add a [UIEventAttributionView](uieventattributionview.md) subview to the ad view or control in order to measure taps. When a person taps the ad, follow these steps:

1. Create an [SFSafariViewController.Configuration](../safariservices/sfsafariviewcontroller/configuration-swift.class.md) object.
2. Assign the [UIEventAttribution](uieventattribution.md) object you created to the [eventAttribution](../safariservices/sfsafariviewcontroller/configuration-swift.class/eventattribution.md) property of the [SFSafariViewController.Configuration](../safariservices/sfsafariviewcontroller/configuration-swift.class.md) object.
3. Initialize an [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) instance with the configuration object, and present it. [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) validates that a tap on a [UIEventAttributionView](uieventattributionview.md) initiated the navigation to the webpage. If not, it discards the attribution data.

## Topics

### Creating event attribution objects

- [init(sourceIdentifier:destinationURL:sourceDescription:purchaser:)](uieventattribution/init%28sourceidentifier_destinationurl_sourcedescription_purchaser_%29.md): Initializes a new event attribution object.

### Setting attribution details

- [destinationURL](uieventattribution/destinationurl.md): The destination URL to attribute.
- [purchaser](uieventattribution/purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](uieventattribution/reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](uieventattribution/sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](uieventattribution/sourceidentifier.md): A number that identifies the source of the attribution.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Private Click Measurement (PCM)

- [UIEventAttributionView](uieventattributionview.md): An overlay view that verifies user interaction for Web AdAttributionKit.
- [NSAdvertisingAttributionReportEndpoint](../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md): The URL where Private Click Measurement and SKAdNetwork send attribution information.

# UIEventAttribution (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

An object that contains event attribution information for Web AdAttributionKit.

## Declaration

```objectivec
@interface UIEventAttribution : NSObject
```

<a id="overview"></a>

## Overview

Apps use event attribution objects to send data to the browser when opening an external website that supports Web AdAttributionKit (formerly known as Private Click Measurement, or PCM). For more information on the proposed PCM web standard, see [Introducing Private Click Measurement](https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/) and [Private Click Measurement Draft Community Group Report](https://privacycg.github.io/private-click-measurement/).

> **Note**

>  Mac apps built with Mac Catalyst don’t support Web AdAttributionKit.

You can’t subclass [UIEventAttribution](uieventattribution.md).

<a id="Define-an-endpoint"></a>

### Define an endpoint

In order to use Web AdAttributionKit, your app defines an `Info.plist` key called [NSAdvertisingAttributionReportEndpoint](../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md) that contains the URL to which the browser sends event attribution data. When an externally linked website reports that a conversion has occurred, the browser forwards your app’s event attribution data to the endpoint specified in the `Info.plist`. If your app’s `Info.plist` doesn’t contain this key, the browser won’t be able to forward the Web AdAttributionKit data when a conversion occurs.

Send event attribution data to the browser only when your app opens an external link as a result of a user tapping a control that sits below a [UIEventAttributionView](uieventattributionview.md) in the app’s view hierarchy. The event attribution view verifies that the user tapped a control. If that control doesn’t sit below an event attribution view, the system won’t send the Web AdAttributionKit data to the browser when opening the external link.

<a id="Create-an-event-attribution-data-object"></a>

### Create an event attribution data object

Here’s how you create a [UIEventAttribution](uieventattribution.md) object:

**Swift**

```swift
let adURL = URL(string: "https://shop.example/tabletStandDeluxe.html")!
let eventAttribution =
    UIEventAttribution(sourceIdentifier: 4,
                       destinationURL: adURL,
                       sourceDescription: "Banner ad for Tablet Stand Deluxe.",
                       purchaser: "Shop Example, Inc.")
```

**Objective-C**

```objc
NSURL *adURL = [NSURL URLWithString:@"https://shop.example/tabletStandDeluxe.html"];
UIEventAttribution *eventAttribution = [[UIEventAttribution alloc]
                                        initWithSourceIdentifier:4
                                        destinationURL:adURL
                                        sourceDescription:@"Banner ad for Tablet Stand Deluxe."
                                        purchaser:@"Shop Example, Inc."];
```

<a id="Send-event-attribution-data-to-the-browser"></a>

### Send event attribution data to the browser

Once you create a [UIEventAttribution](uieventattribution.md) object, send it to the browser when your app opens a URL as the result of a user tap. If the external website reports a conversion within 7 days, the browser forwards the data from the [UIEventAttribution](uieventattribution.md) object to the specified remote server sometime between 24 and 48 hours after the conversion.

There are two different ways to send event attribution data when your app opens an external link, depending on whether your app uses [UIScene](uiscene.md) or [UIApplication](uiapplication.md) for life cycle management. For more information on application life cycle management, see [Managing your app’s life cycle](managing-your-app-s-life-cycle.md).

> **Important**

>  The browser, and not your app, sends the event attribution data to the remote server. If the user’s selected browser doesn’t support Web AdAttributionKit, the event attribution fails even if the external website reports a conversion.

If your app uses [UIScene](uiscene.md)-based life cycle management, create a [UISceneOpenExternalURLOptions](uiscene/openexternalurloptions.md) object, assign the event attribution object you created to its [UIApplicationOpenExternalURLOptionsEventAttributionKey](uiapplication/openexternalurloptionskey/eventattribution.md) property, and call [openURL:options:completionHandler:](uiscene/open%28__options_completionhandler_%29.md):

**Swift**

```swift
let sceneOpenURLOptions = UIScene.OpenExternalURLOptions()
sceneOpenURLOptions.eventAttribution = eventAttribution

self.view.window?.windowScene?.open(adURL,
                                    options: sceneOpenURLOptions,
                                    completionHandler: nil)
```

**Objective-C**

```objc
UISceneOpenExternalURLOptions *sceneOpenURLOptions = [[UISceneOpenExternalURLOptions alloc] init];
sceneOpenURLOptions.eventAttribution = eventAttribution;
[self.view.window.windowScene openURL:adURL
                                options:sceneOpenURLOptions
                    completionHandler:^(BOOL success) {
    if (success == NO) {
        // Handle error
    }
}];
```

If your app uses [UIApplication](uiapplication.md)-based life cycle management, create a dictionary that contains the [UIApplicationOpenURLOptionsEventAttributionKey](uiapplication/openurloptionskey/eventattribution.md) key with the [UIEventAttribution](uieventattribution.md) object you created as its value, and call [openURL:options:completionHandler:](uiapplication/open%28__options_completionhandler_%29.md), passing the dictionary using the `options` parameter.

**Swift**

```swift
let appOpenURLOptions: [UIApplication.OpenExternalURLOptionsKey : Any] = [
    .eventAttribution: eventAttribution
]
UIApplication.shared.open(adURL,
                          options: appOpenURLOptions,
                          completionHandler: nil)
```

**Objective-C**

```objc
NSDictionary<NSString *, NSObject *> *appOpenURLOptions = [NSDictionary dictionaryWithObject:eventAttribution forKey:UIApplicationOpenURLOptionsEventAttributionKey];

[[UIApplication sharedApplication] openURL:adURL
                                   options:appOpenURLOptions
                         completionHandler:^(BOOL success) {
    if (success == NO) {
        // Handle error
    }
}];
```

<a id="Send-event-attribution-data-to-SFSafariViewController"></a>

### Send event attribution data to SFSafariViewController

If your app displays a web page in [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) after a person taps an ad, add a [UIEventAttributionView](uieventattributionview.md) subview to the ad view or control in order to measure taps. When a person taps the ad, follow these steps:

1. Create an [SFSafariViewControllerConfiguration](../safariservices/sfsafariviewcontroller/configuration-swift.class.md) object.
2. Assign the [UIEventAttribution](uieventattribution.md) object you created to the [eventAttribution](../safariservices/sfsafariviewcontroller/configuration-swift.class/eventattribution.md) property of the [SFSafariViewControllerConfiguration](../safariservices/sfsafariviewcontroller/configuration-swift.class.md) object.
3. Initialize an [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) instance with the configuration object, and present it. [SFSafariViewController](../safariservices/sfsafariviewcontroller.md) validates that a tap on a [UIEventAttributionView](uieventattributionview.md) initiated the navigation to the webpage. If not, it discards the attribution data.

## Topics

### Creating event attribution objects

- [initWithSourceIdentifier:destinationURL:sourceDescription:purchaser:](uieventattribution/init%28sourceidentifier_destinationurl_sourcedescription_purchaser_%29.md): Initializes a new event attribution object.

### Setting attribution details

- [destinationURL](uieventattribution/destinationurl.md): The destination URL to attribute.
- [purchaser](uieventattribution/purchaser.md): The entity that purchased the ad or content.
- [reportEndpoint](uieventattribution/reportendpoint.md): The URL that receives attribution data.
- [sourceDescription](uieventattribution/sourcedescription.md): A string describing the source tapped to launch the external link.
- [sourceIdentifier](uieventattribution/sourceidentifier.md): A number that identifies the source of the attribution.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Private Click Measurement (PCM)

- [UIEventAttributionView](uieventattributionview.md): An overlay view that verifies user interaction for Web AdAttributionKit.
- [NSAdvertisingAttributionReportEndpoint](../bundleresources/information-property-list/nsadvertisingattributionreportendpoint.md): The URL where Private Click Measurement and SKAdNetwork send attribution information.
