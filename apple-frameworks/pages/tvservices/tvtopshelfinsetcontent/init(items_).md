> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvservices/tvtopshelfinsetcontent/init(items:)

# init(items:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates an inset content object and populates it with the specified set of items.

## Declaration

```swift
init(items: [TVTopShelfItem])
```

## Parameters

- `items`: An array of [TVTopShelfItem](../tvtopshelfitem.md) objects representing the content that you want to display in the top shelf. This method stores a copy of the array.

<a id="return-value"></a>

## Return Value

A new inset content object containing the specified set of items.

# initWithItems: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates an inset content object and populates it with the specified set of items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<TVTopShelfItem *> *) items;
```

## Parameters

- `items`: An array of [TVTopShelfItem](../tvtopshelfitem.md) objects representing the content that you want to display in the top shelf. This method stores a copy of the array.

<a id="return-value"></a>

## Return Value

A new inset content object containing the specified set of items.
