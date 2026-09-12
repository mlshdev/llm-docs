> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemcollection/count](https://developer.apple.com/documentation/mediaplayer/mpmediaitemcollection/count)

# count (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of media items in a collection.

## Declaration

```swift
var count: Int { get }
```

<a id="Discussion"></a>

## Discussion

In some cases, using this property is more efficient than fetching the [items](items.md) array and asking for the count.

## See Also

### Using a media item collection

- [items](items.md): The media items in a media item collection.
- [representativeItem](representativeitem.md): A media item whose properties are representative of the other media items in a collection.
- [mediaTypes](mediatypes.md): The types of the media items in a collection.

# count (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of media items in a collection.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger count;
```

<a id="Discussion"></a>

## Discussion

In some cases, using this property is more efficient than fetching the [items](items.md) array and asking for the count.

## See Also

### Using a media item collection

- [items](items.md): The media items in a media item collection.
- [representativeItem](representativeitem.md): A media item whose properties are representative of the other media items in a collection.
- [mediaTypes](mediatypes.md): The types of the media items in a collection.
