> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/contains(_:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/contains(_:))

# contains(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns a Boolean value indicating whether the back-forward list contains the specified item.

## Declaration

```swift
func contains(_ item: WebHistoryItem!) -> Bool
```

## Parameters

- `item`: The item to find in the back-forward list.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item is in the back-forward list; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [back(withLimit:)](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [item(at:)](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

# containsItem: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns a Boolean value indicating whether the back-forward list contains the specified item.

## Declaration

```objectivec
- (BOOL) containsItem:(WebHistoryItem *) item;
```

## Parameters

- `item`: The item to find in the back-forward list.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item is in the back-forward list; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [backListWithLimit:](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [itemAtIndex:](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.
