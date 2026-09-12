> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpplayablecontentdatasource](https://developer.apple.com/documentation/mediaplayer/mpplayablecontentdatasource)

# MPPlayableContentDataSource (Swift)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.

> Use CarPlay framework

## Declaration

```swift
protocol MPPlayableContentDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To support external media players, create a class that conforms to the `MPPlayableContentDataSource` protocol. When your app launches, create an instance of this class and assign it to the shared [dataSource](mpplayablecontentmanager/datasource.md) property. This data source provides media metadata to external media players so that they can build user interfaces displaying your app’s content. It’s best to set this data source as early as possible in your app’s lifecycle, as iOS may start asking for content right away.

> **Important**

>  This class is only used for CarPlay. Using it requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

## Topics

### Retrieving a media item

- [contentItem(at:)](mpplayablecontentdatasource/contentitem%28at_%29.md): Deprecated. Retrieves the media item at the specified index.
- [contentItem(forIdentifier:completionHandler:)](mpplayablecontentdatasource/contentitem%28foridentifier_completionhandler_%29.md): Deprecated. Retrieves the content item associated with the provided identifier.

### Working with child nodes

- [beginLoadingChildItems(at:completionHandler:)](mpplayablecontentdatasource/beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [childItemsDisplayPlaybackProgress(at:)](mpplayablecontentdatasource/childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.
- [numberOfChildItems(at:)](mpplayablecontentdatasource/numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing playable content

- [dataSource](mpplayablecontentmanager/datasource.md): Deprecated. The data source provided by the app.

# MPPlayableContentDataSource (Objective-C)

**Framework:** Media Player  
**Kind:** Protocol  
**Availability:** iOS 7.1+ (deprecated in 14.0) · iPadOS 7.1+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The data source providing media metadata to external media players so they can build user interfaces displaying your app’s content.

> Use CarPlay framework

## Declaration

```objectivec
@protocol MPPlayableContentDataSource <NSObject>
```

<a id="overview"></a>

## Overview

To support external media players, create a class that conforms to the `MPPlayableContentDataSource` protocol. When your app launches, create an instance of this class and assign it to the shared [dataSource](mpplayablecontentmanager/datasource.md) property. This data source provides media metadata to external media players so that they can build user interfaces displaying your app’s content. It’s best to set this data source as early as possible in your app’s lifecycle, as iOS may start asking for content right away.

> **Important**

>  This class is only used for CarPlay. Using it requires a special entitlement issued by Apple. Apps without the correct entitlement won’t appear on the CarPlay home screen. See [http://www.apple.com/ios/carplay/](http://www.apple.com/ios/carplay/) for more information.

## Topics

### Retrieving a media item

- [contentItemAtIndexPath:](mpplayablecontentdatasource/contentitem%28at_%29.md): Deprecated. Retrieves the media item at the specified index.
- [contentItemForIdentifier:completionHandler:](mpplayablecontentdatasource/contentitem%28foridentifier_completionhandler_%29.md): Deprecated. Retrieves the content item associated with the provided identifier.

### Working with child nodes

- [beginLoadingChildItemsAtIndexPath:completionHandler:](mpplayablecontentdatasource/beginloadingchilditems%28at_completionhandler_%29.md): Deprecated. Starts to load the children of the indicated index.
- [childItemsDisplayPlaybackProgressAtIndexPath:](mpplayablecontentdatasource/childitemsdisplayplaybackprogress%28at_%29.md): Deprecated. Returns a Boolean value indicating whether the provided content supports playback progress.
- [numberOfChildItemsAtIndexPath:](mpplayablecontentdatasource/numberofchilditems%28at_%29.md): Deprecated. Provides the number of child nodes for the indicated node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing playable content

- [dataSource](mpplayablecontentmanager/datasource.md): Deprecated. The data source provided by the app.
