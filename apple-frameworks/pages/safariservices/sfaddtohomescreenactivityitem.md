> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfaddtohomescreenactivityitem](https://developer.apple.com/documentation/safariservices/sfaddtohomescreenactivityitem)

# SFAddToHomeScreenActivityItem (Swift)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

A protocol that describes a bookmark someone can add to their Home Screen.

## Declaration

```swift
protocol SFAddToHomeScreenActivityItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To add a bookmark to someone’s Home Screen from your browser app, create an object that conforms to [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) and present a [UIActivityViewController](../uikit/uiactivityviewcontroller.md) that includes the activity item.

If your browser app uses WebKit, [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) always represents a bookmark. To let someone add a web app to their Home Screen, add a [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to the [UIActivityViewController](../uikit/uiactivityviewcontroller.md) activity items instead of a [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md). WebKit inspects the website’s metadata to decide whether the item represents a bookmark or a web app.

If your browser app includes an alternative browser engine, pass detailed information about the bookmark to [getHomeScreenWebAppInfo(completionHandler:)](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md). If the bookmark represents a web app, include the web app manifest, and cookies that the system uses when someone opens the web app from their Home Screen.

> **Important**

>  [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) is only available to web browsers. For more information on creating a web browser, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).

## Topics

### Describing a bookmark or web app

- [iconItemProvider](sfaddtohomescreenactivityitem/iconitemprovider.md): An object that conveys the bookmark’s icon to the system.
- [title](sfaddtohomescreenactivityitem/title.md): The bookmark’s title.
- [url](sfaddtohomescreenactivityitem/url.md): The bookmark’s URL.

### Providing information about a web app to the system

- [getHomeScreenWebAppInfo(completionHandler:)](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [SFAddToHomeScreenInfo](sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.
- [getWebAppManifest(completionHandler:)](sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# SFAddToHomeScreenActivityItem (Objective-C)

**Framework:** Safari Services  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

A protocol that describes a bookmark someone can add to their Home Screen.

## Declaration

```objectivec
@protocol SFAddToHomeScreenActivityItem <NSObject>
```

<a id="overview"></a>

## Overview

To add a bookmark to someone’s Home Screen from your browser app, create an object that conforms to [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) and present a [UIActivityViewController](../uikit/uiactivityviewcontroller.md) that includes the activity item.

If your browser app uses WebKit, [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) always represents a bookmark. To let someone add a web app to their Home Screen, add a [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) to the [UIActivityViewController](../uikit/uiactivityviewcontroller.md) activity items instead of a [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md). WebKit inspects the website’s metadata to decide whether the item represents a bookmark or a web app.

If your browser app includes an alternative browser engine, pass detailed information about the bookmark to [getHomeScreenWebAppInfoWithCompletionHandler:](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md). If the bookmark represents a web app, include the web app manifest, and cookies that the system uses when someone opens the web app from their Home Screen.

> **Important**

>  [SFAddToHomeScreenActivityItem](sfaddtohomescreenactivityitem.md) is only available to web browsers. For more information on creating a web browser, see [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser).

## Topics

### Describing a bookmark or web app

- [iconItemProvider](sfaddtohomescreenactivityitem/iconitemprovider.md): An object that conveys the bookmark’s icon to the system.
- [title](sfaddtohomescreenactivityitem/title.md): The bookmark’s title.
- [URL](sfaddtohomescreenactivityitem/url.md): The bookmark’s URL.

### Providing information about a web app to the system

- [getHomeScreenWebAppInfoWithCompletionHandler:](sfaddtohomescreenactivityitem/gethomescreenwebappinfo%28completionhandler_%29.md): Provides information about a web app to the system.
- [SFAddToHomeScreenInfo](sfaddtohomescreeninfo.md): A class that provides information about a web app that someone adds to their Home Screen.
- [getWebAppManifestWithCompletionHandler:](sfaddtohomescreenactivityitem/getwebappmanifest%28completionhandler_%29.md): Deprecated. Provides the web app’s manifest to the system, if the bookmark represents a web app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
