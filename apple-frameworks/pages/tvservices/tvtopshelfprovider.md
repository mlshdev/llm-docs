> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfprovider](https://developer.apple.com/documentation/tvservices/tvtopshelfprovider)

# TVTopShelfProvider (Swift)

**Framework:** TV Services  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The interface for providing items to display in the main menu’s Top Shelf user interface on an Apple TV.

> TVTopShelfProvider has been replaced by TVTopShelfContentProvider

## Declaration

```swift
protocol TVTopShelfProvider
```

<a id="overview"></a>

## Overview

You adopt this protocol in the principal class of your app’s TV Services extension. Apps that implement this extension can provide dynamic content to the Top Shelf element rather than having the system use the static image submitted with the app. The [topShelfStyle](tvtopshelfprovider/topshelfstyle.md) property specifies the interface style you want, and the [topShelfItems](tvtopshelfprovider/topshelfitems.md) property specifies the content items to display. Whenever you change the content provided by the extension, post a [TVTopShelfItemsDidChangeNotification](tvtopshelfitemsdidchangenotification.md) notification to prompt the system to reload your content.

## Topics

### Implementing TV Services Extension Properties

- [topShelfItems](tvtopshelfprovider/topshelfitems.md): Deprecated. Returns an array of content items to be displayed.
- [topShelfStyle](tvtopshelfprovider/topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.
- [TVTopShelfContentStyle](tvtopshelfcontentstyle.md): Deprecated. An enumerated type used to specify the style in which you want your content to be displayed.

### Notifying the System of Changes

- [TVTopShelfItemsDidChange](../foundation/nsnotification/name-swift.struct/tvtopshelfitemsdidchange.md): Deprecated. A notification to post when your app’s Top Shelf content has changed.

# TVTopShelfProvider (Objective-C)

**Framework:** TV Services  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

The interface for providing items to display in the main menu’s Top Shelf user interface on an Apple TV.

> TVTopShelfProvider has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
@protocol TVTopShelfProvider
```

<a id="overview"></a>

## Overview

You adopt this protocol in the principal class of your app’s TV Services extension. Apps that implement this extension can provide dynamic content to the Top Shelf element rather than having the system use the static image submitted with the app. The [topShelfStyle](tvtopshelfprovider/topshelfstyle.md) property specifies the interface style you want, and the [topShelfItems](tvtopshelfprovider/topshelfitems.md) property specifies the content items to display. Whenever you change the content provided by the extension, post a [TVTopShelfItemsDidChangeNotification](tvtopshelfitemsdidchangenotification.md) notification to prompt the system to reload your content.

## Topics

### Implementing TV Services Extension Properties

- [topShelfItems](tvtopshelfprovider/topshelfitems.md): Deprecated. Returns an array of content items to be displayed.
- [topShelfStyle](tvtopshelfprovider/topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.
- [TVTopShelfContentStyle](tvtopshelfcontentstyle.md): Deprecated. An enumerated type used to specify the style in which you want your content to be displayed.

### Notifying the System of Changes

- [TVTopShelfItemsDidChangeNotification](tvtopshelfitemsdidchangenotification.md): Deprecated. A notification to post when your app’s Top Shelf content has changed.
