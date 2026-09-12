> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintent/init(mediaitems:mediasearch:mediadestination:)](https://developer.apple.com/documentation/intents/inaddmediaintent/init(mediaitems:mediasearch:mediadestination:))

# init(mediaItems:mediaSearch:mediaDestination:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items to add and where to add them.

## Declaration

```swift
init(mediaItems: [INMediaItem]?, mediaSearch: INMediaSearch?, mediaDestination: INMediaDestination?)
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, that the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search when looking for a media item.
- `mediaDestination`: The location to add the media items.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INAddMediaIntent](../inaddmediaintent.md) object should include information about the media that accurately represents the content, where to find it, and where to add it.

# initWithMediaItems:mediaSearch:mediaDestination: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items to add and where to add them.

## Declaration

```objectivec
- (instancetype) initWithMediaItems:(NSArray<INMediaItem *> *) mediaItems mediaSearch:(INMediaSearch *) mediaSearch mediaDestination:(INMediaDestination *) mediaDestination;
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, that the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search when looking for a media item.
- `mediaDestination`: The location to add the media items.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INAddMediaIntent](../inaddmediaintent.md) object should include information about the media that accurately represents the content, where to find it, and where to add it.
