> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/items](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/items)

# items (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of media items that match the media query’s predicate.

## Declaration

```swift
var items: [MPMediaItem]? { get }
```

<a id="Discussion"></a>

## Discussion

If no items match the predicate, this method returns an empty array. On error, returns `nil`.

## See Also

### Performing media queries

- [collections](collections.md): An array of media item collections whose contained items match the query’s media property predicate.

# items (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of media items that match the media query’s predicate.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<MPMediaItem *> * items;
```

<a id="Discussion"></a>

## Discussion

If no items match the predicate, this method returns an empty array. On error, returns `nil`.

## See Also

### Performing media queries

- [collections](collections.md): An array of media item collections whose contained items match the query’s media property predicate.
