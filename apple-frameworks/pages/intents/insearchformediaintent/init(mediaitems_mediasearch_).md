> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchformediaintent/init(mediaitems:mediasearch:)](https://developer.apple.com/documentation/intents/insearchformediaintent/init(mediaitems:mediasearch:))

# init(mediaItems:mediaSearch:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items for which to search and where to search for them.

## Declaration

```swift
init(mediaItems: [INMediaItem]?, mediaSearch: INMediaSearch?)
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, that the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search when looking for a media item.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INSearchForMediaIntent](../insearchformediaintent.md) object should include information about the media that accurately represents the content and where to find it.

# initWithMediaItems:mediaSearch: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items for which to search and where to search for them.

## Declaration

```objectivec
- (instancetype) initWithMediaItems:(NSArray<INMediaItem *> *) mediaItems mediaSearch:(INMediaSearch *) mediaSearch;
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, that the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search when looking for a media item.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INSearchForMediaIntent](../insearchformediaintent.md) object should include information about the media that accurately represents the content and where to find it.
