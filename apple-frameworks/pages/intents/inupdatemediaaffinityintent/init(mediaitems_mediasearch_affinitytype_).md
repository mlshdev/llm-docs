> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintent/init(mediaitems:mediasearch:affinitytype:)](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintent/init(mediaitems:mediasearch:affinitytype:))

# init(mediaItems:mediaSearch:affinityType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items, their location, and the affinity to update.

## Declaration

```swift
init(mediaItems: [INMediaItem]?, mediaSearch: INMediaSearch?, affinityType: INMediaAffinityType)
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search for a media item.
- `affinityType`: The user’s preference for the media item.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INUpdateMediaAffinityIntent](../inupdatemediaaffinityintent.md) object should include information about the media that accurately represents the content and where to find it.

# initWithMediaItems:mediaSearch:affinityType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an intent that describes the media items, their location, and the affinity to update.

## Declaration

```objectivec
- (instancetype) initWithMediaItems:(NSArray<INMediaItem *> *) mediaItems mediaSearch:(INMediaSearch *) mediaSearch affinityType:(INMediaAffinityType) affinityType;
```

## Parameters

- `mediaItems`: The media content, such as a song or TV show, the user is playing. When donating the intent, the system uses only the first item in the array, ignoring the other media items in the array.
- `mediaSearch`: The location in which to search for a media item.
- `affinityType`: The user’s preference for the media item.

<a id="return-value"></a>

## Return Value

An initialized intent object or nil if the object could not be created.

<a id="Discussion"></a>

## Discussion

The [INUpdateMediaAffinityIntent](../inupdatemediaaffinityintent.md) object should include information about the media that accurately represents the content and where to find it.
