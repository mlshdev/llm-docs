> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/back(withlimit:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/back(withlimit:))

# back(withLimit:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the items that precede the current item in the back-forward list, up to the specified number of items.

## Declaration

```swift
func back(withLimit limit: Int32) -> [Any]!
```

## Parameters

- `limit`: The greatest number of items to return.

<a id="return-value"></a>

## Return Value

An array containing (at most) the specified number of items, or `nil` if no items precede the current item.

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [item(at:)](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

# backListWithLimit: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the items that precede the current item in the back-forward list, up to the specified number of items.

## Declaration

```objectivec
- (NSArray *) backListWithLimit:(int) limit;
```

## Parameters

- `limit`: The greatest number of items to return.

<a id="return-value"></a>

## Return Value

An array containing (at most) the specified number of items, or `nil` if no items precede the current item.

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [containsItem:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [itemAtIndex:](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.
