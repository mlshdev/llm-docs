> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/backitem](https://developer.apple.com/documentation/webkit/webbackforwardlist/backitem)

# backItem (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The item that precedes the current item in the back-forward list.

## Declaration

```swift
var backItem: WebHistoryItem! { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if none precedes it.

## See Also

### Querying the Back-Forward List

- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [back(withLimit:)](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [item(at:)](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardList(withLimit:)](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.

# backItem (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.4+ (deprecated in 10.14)

The item that precedes the current item in the back-forward list.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) WebHistoryItem * backItem;
```

<a id="Discussion"></a>

## Discussion

`nil` if none precedes it.

## See Also

### Querying the Back-Forward List

- [backListCount](backlistcount.md): Deprecated. The number of items that precede the current item in the back-forward list.
- [backListWithLimit:](back%28withlimit_%29.md): Deprecated. Returns the items that precede the current item in the back-forward list, up to the specified number of items.
- [containsItem:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the back-forward list contains the specified item.
- [currentItem](currentitem.md): Deprecated. The current item in the back-forward list.
- [itemAtIndex:](item%28at_%29.md): Deprecated. Returns the item at the specified index in the back-forward list.
- [forwardItem](forwarditem.md): Deprecated. The item that follows the current item in the back-forward list.
- [forwardListCount](forwardlistcount.md): Deprecated. The number of items that follow the current item in the back-forward list.
- [forwardListWithLimit:](forwardlist%28withlimit_%29.md): Deprecated. Returns the items that follow the current item in the back-forward list, up to the specified number of items.
