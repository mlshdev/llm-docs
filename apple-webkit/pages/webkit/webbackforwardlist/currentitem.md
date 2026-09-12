> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/currentitem](https://developer.apple.com/documentation/webkit/webbackforwardlist/currentitem)

# currentItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The current item in the back-forward list.

## Declaration

```swift
var currentItem: WebHistoryItem! { get }
```

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [back(withLimit:)](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [item(at:)](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

# currentItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The current item in the back-forward list.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebHistoryItem * currentItem;
```

## See Also

### Querying the Back-Forward List

- [backItem](backitem.md): Deprecated. The item that precedes the current item in the back-forward list.
- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [backListWithLimit:](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [containsItem:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [itemAtIndex:](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.
