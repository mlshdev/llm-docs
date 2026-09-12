> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationreference/library()](https://developer.apple.com/documentation/intents/inmediadestinationreference/library())

# library() (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new library destination for the media item.

## Declaration

```swift
class func library() -> Self
```

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationReference](../inmediadestinationreference.md) object or `nil` if unable to create.

<a id="Discussion"></a>

## Discussion

A library is a generic concept that you must define for your app. For example, in Apple Music, it’s the Apple Music library, while in Podcasts, it’s the user’s subscribed podcasts.

## See Also

### Creating a Media Destination Object

- [playlistDestination(withName:)](playlistdestination%28withname_%29.md): Creates a new playlist destination for the media item.

# libraryDestination (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new library destination for the media item.

## Declaration

```objectivec
+ (instancetype) libraryDestination;
```

<a id="return-value"></a>

## Return Value

A new [INMediaDestination](../inmediadestinationreference.md) object or `nil` if unable to create.

<a id="Discussion"></a>

## Discussion

A library is a generic concept that you must define for your app. For example, in Apple Music, it’s the Apple Music library, while in Podcasts, it’s the user’s subscribed podcasts.

## See Also

### Creating a Media Destination Object

- [playlistDestinationWithName:](playlistdestination%28withname_%29.md): Creates a new playlist destination for the media item.
