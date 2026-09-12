> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemcollection/collectionwithitems:](https://developer.apple.com/documentation/mediaplayer/mpmediaitemcollection/collectionwithitems:)

# collectionWithItems:

**Interface language:** Objective-C

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media item collection by copying an array of media items.

## Declaration

```objectivec
+ (MPMediaItemCollection *) collectionWithItems:(NSArray<MPMediaItem *> *) items;
```

## Parameters

- `items`: The array of media items you assign to the media item collection.

<a id="return-value"></a>

## Return Value

A media item collection.

## See Also

### Creating a media item collection

- [initWithItems:](init%28items_%29.md): Initializes a media item collection with an array of media items.
