> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/init(itemcollection:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayermediaitemqueuedescriptor/init(itemcollection:))

# init(itemCollection:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new queue descriptor using the designated collection.

## Declaration

```swift
init(itemCollection: MPMediaItemCollection)
```

## Parameters

- `itemCollection`: The collection of media items used to create the new queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the media items contained in the designated collection.

<a id="Discussion"></a>

## Discussion

After creating a new queue descriptor, you can modify when individual media items start and stop playing, and which item in the queue plays first when playback begins.

## See Also

### Creating a new media item queue descriptor

- [init(query:)](init%28query_%29.md): Creates a new queue descriptor using the designated query.

# initWithItemCollection: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new queue descriptor using the designated collection.

## Declaration

```objectivec
- (instancetype) initWithItemCollection:(MPMediaItemCollection *) itemCollection;
```

## Parameters

- `itemCollection`: The collection of media items used to create the new queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the media items contained in the designated collection.

<a id="Discussion"></a>

## Discussion

After creating a new queue descriptor, you can modify when individual media items start and stop playing, and which item in the queue plays first when playback begins.

## See Also

### Creating a new media item queue descriptor

- [initWithQuery:](init%28query_%29.md): Creates a new queue descriptor using the designated query.
