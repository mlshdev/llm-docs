> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfitemcollection/init(items:)](https://developer.apple.com/documentation/tvservices/tvtopshelfitemcollection/init(items:))

# init(items:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates an item collection object from the specified set of top shelf items.

## Declaration

```swift
init(items: [Item])
```

## Parameters

- `items`: The array of [TVTopShelfItem](../tvtopshelfitem.md) objects to put in the collection.

<a id="return-value"></a>

## Return Value

A new item collection object containing the specified `items`.

# initWithItems: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates an item collection object from the specified set of top shelf items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<TVTopShelfItem *> *) items;
```

## Parameters

- `items`: The array of [TVTopShelfItem](../tvtopshelfitem.md) objects to put in the collection.

<a id="return-value"></a>

## Return Value

A new item collection object containing the specified `items`.
