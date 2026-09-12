> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvcontentitem](https://developer.apple.com/documentation/tvservices/tvcontentitem)

# TVContentItem (Swift)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An object that describes either a piece of content or a container for other content items.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```swift
class TVContentItem
```

<a id="overview"></a>

## Overview

The exact details of what a content item is are dependent on your app. For example, a content item might be a piece of media or it might provide access to news or other content available to your app.

To create a description of a piece of content, create a content identifier object and then use this object to initialize a new [TVContentItem](tvcontentitem.md) object. Then, set any other properties that are appropriate for the object you are creating. Most of the properties are optional, and many properties apply only to certain kinds of content. Inspect an existing [TVContentItem](tvcontentitem.md) object to retrieve the media and playback properties, such as the duration of the content or when the content was last played.

## Topics

### Initializing a Content Item

- [init(contentIdentifier:)](tvcontentitem/init%28contentidentifier_%29.md): Deprecated. Initializes a new content item.
- [init(coder:)](tvcontentitem/init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

### Reading a Content Item’s Identifier

- [contentIdentifier](tvcontentitem/contentidentifier.md): Deprecated. The content identifier that uniquely identifies this item.

### Inspecting the General Display Properties

These properties describe the item to be displayed..

- [badgeCount](tvcontentitem/badgecount.md): Deprecated. A badging integer for this item.
- [title](tvcontentitem/title.md): Deprecated. The localized string title of the item.
- [topShelfItems](tvcontentitem/topshelfitems.md): Deprecated. An array of content items that are the items of a section.

### Accessing Image Resources

- [imageURL](tvcontentitem/imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURL(forTraits:)](tvcontentitem/imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL(\_:forTraits:)](tvcontentitem/setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](tvcontentitemimagetrait.md): Traits describing the type of image you want.

### Inspecting the Content Properties

These properties are used to describe the underlying content item.

- [creationDate](tvcontentitem/creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](tvcontentitem/duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](tvcontentitem/expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](tvcontentitem/imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

### Inspecting the Playback Properties

- [currentPosition](tvcontentitem/currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [hasPlayedToEnd](tvcontentitem/hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.
- [lastAccessedDate](tvcontentitem/lastaccesseddate.md): Deprecated. The date when the user last accessed this item.

### Inspecting the Application Launch Properties

The application launch properties are URLs that the system can use to launch your app. Each URL specifies the content item to be launched and the action to be taken. You are responsible for creating a URL scheme and adding code to your app so that it can respond when these URLs are invoked.

- [displayURL](tvcontentitem/displayurl.md): Deprecated. A URL that causes the app which created this content item to display a description screen for the item.
- [playURL](tvcontentitem/playurl.md): Deprecated. A URL that causes the app which created this content item to begin playing the item at the user’s current position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Content

- [TVContentIdentifier](tvcontentidentifier.md): Deprecated. An object that uniquely identifies media content in either a single piece or a collection.
- [TVTopShelfImageSize(shape:style:)](tvtopshelfimagesize%28shape_style_%29.md): Deprecated. Returns the ideal size for an image, according to its particular shape and style.

# TVContentItem (Objective-C)

**Framework:** TV Services  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An object that describes either a piece of content or a container for other content items.

> TVContentItem has been replaced by TVTopShelfItem

## Declaration

```objectivec
@interface TVContentItem : NSObject
```

<a id="overview"></a>

## Overview

The exact details of what a content item is are dependent on your app. For example, a content item might be a piece of media or it might provide access to news or other content available to your app.

To create a description of a piece of content, create a content identifier object and then use this object to initialize a new [TVContentItem](tvcontentitem.md) object. Then, set any other properties that are appropriate for the object you are creating. Most of the properties are optional, and many properties apply only to certain kinds of content. Inspect an existing [TVContentItem](tvcontentitem.md) object to retrieve the media and playback properties, such as the duration of the content or when the content was last played.

## Topics

### Initializing a Content Item

- [initWithContentIdentifier:](tvcontentitem/init%28contentidentifier_%29.md): Deprecated. Initializes a new content item.
- [initWithCoder:](tvcontentitem/init%28coder_%29.md): Deprecated. Returns an object initialized from data in a given unarchiver.

### Reading a Content Item’s Identifier

- [contentIdentifier](tvcontentitem/contentidentifier.md): Deprecated. The content identifier that uniquely identifies this item.

### Inspecting the General Display Properties

These properties describe the item to be displayed..

- [badgeCount](tvcontentitem/badgecount.md): Deprecated. A badging integer for this item.
- [title](tvcontentitem/title.md): Deprecated. The localized string title of the item.
- [topShelfItems](tvcontentitem/topshelfitems.md): Deprecated. An array of content items that are the items of a section.

### Accessing Image Resources

- [imageURL](tvcontentitem/imageurl.md): Deprecated. A URL giving the location of the image to be displayed for this content item.
- [imageURLForTraits:](tvcontentitem/imageurl%28fortraits_%29.md): Deprecated. Retrieve the URL for the image that best matches the specified traits.
- [setImageURL:forTraits:](tvcontentitem/setimageurl%28__fortraits_%29.md): Deprecated.
- [TVContentItemImageTrait](tvcontentitemimagetrait.md): Traits describing the type of image you want.

### Inspecting the Content Properties

These properties are used to describe the underlying content item.

- [creationDate](tvcontentitem/creationdate.md): Deprecated. The date when the content item was created, or the date when it was first broadcast, or some other kind of origination date.
- [duration](tvcontentitem/duration.md): Deprecated. The amount of time required to play the media to completion.
- [expirationDate](tvcontentitem/expirationdate.md): Deprecated. The date when the user will no longer be able to access the item.
- [imageShape](tvcontentitem/imageshape.md): Deprecated. The intended aspect ratio or shape of the content image.
- [TVContentItemImageShape](tvcontentitemimageshape.md): An enumerated type that identifies the shape in which the content item should be displayed.

### Inspecting the Playback Properties

- [currentPosition](tvcontentitem/currentposition.md): Deprecated. The index location, measured in seconds, at which the user last played this item.
- [hasPlayedToEnd](tvcontentitem/hasplayedtoend.md): Deprecated. A Boolean value indicating whether the user can be considered to have finished this item.
- [lastAccessedDate](tvcontentitem/lastaccesseddate.md): Deprecated. The date when the user last accessed this item.

### Inspecting the Application Launch Properties

The application launch properties are URLs that the system can use to launch your app. Each URL specifies the content item to be launched and the action to be taken. You are responsible for creating a URL scheme and adding code to your app so that it can respond when these URLs are invoked.

- [displayURL](tvcontentitem/displayurl.md): Deprecated. A URL that causes the app which created this content item to display a description screen for the item.
- [playURL](tvcontentitem/playurl.md): Deprecated. A URL that causes the app which created this content item to begin playing the item at the user’s current position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Content

- [TVContentIdentifier](tvcontentidentifier.md): Deprecated. An object that uniquely identifies media content in either a single piece or a collection.
- [TVTopShelfImageSizeForShape](tvtopshelfimagesize%28shape_style_%29.md): Deprecated. Returns the ideal size for an image, according to its particular shape and style.
