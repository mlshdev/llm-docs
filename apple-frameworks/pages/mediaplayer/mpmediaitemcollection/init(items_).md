> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpmediaitemcollection/init(items:)

# init(items:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a media item collection with an array of media items.

## Declaration

```swift
init(items: [MPMediaItem])
```

## Parameters

- `items`: The array of items you assign to the media item collection.

<a id="return-value"></a>

## Return Value

The newly created media item collection.

# initWithItems: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a media item collection with an array of media items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<MPMediaItem *> *) items;
```

## Parameters

- `items`: The array of items you assign to the media item collection.

<a id="return-value"></a>

## Return Value

The newly created media item collection.

## See Also

### Creating a media item collection

- [collectionWithItems:](collectionwithitems_.md): Creates a media item collection by copying an array of media items.
