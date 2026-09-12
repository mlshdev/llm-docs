> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/item(at:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/item(at:))

# item(at:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the item at the specified index in the back-forward list.

## Declaration

```swift
func item(at index: Int32) -> WebHistoryItem!
```

## Parameters

- `index`: The index of the item to return. The position of the current item is index `0`, and the position of any other item is expressed as an offset from index `0`. For example, the item preceding the current item is at index `-1`, and the item following the current item is at index `1`.

<a id="return-value"></a>

## Return Value

The item at the specified index, or `nil` if `index` exceeds the bounds of the back-forward list (that is, if `index` is greater than the value returned by [forwardListCount](forwardlistcount.md), or less than the negative form of the value returned by [backListCount](backlistcount.md)).

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [back(withLimit:)](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

# itemAtIndex: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the item at the specified index in the back-forward list.

## Declaration

```objectivec
- (WebHistoryItem *) itemAtIndex:(int) index;
```

## Parameters

- `index`: The index of the item to return. The position of the current item is index `0`, and the position of any other item is expressed as an offset from index `0`. For example, the item preceding the current item is at index `-1`, and the item following the current item is at index `1`.

<a id="return-value"></a>

## Return Value

The item at the specified index, or `nil` if `index` exceeds the bounds of the back-forward list (that is, if `index` is greater than the value returned by [forwardListCount](forwardlistcount.md), or less than the negative form of the value returned by [backListCount](backlistcount.md)).

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [backListWithLimit:](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [containsItem:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.
