> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/add(_:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/add(_:))

# add(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Inserts an item into the back-forward list, immediately after the current item.

## Declaration

```swift
func add(_ item: WebHistoryItem!)
```

## Parameters

- `item`: A web history item that represents a visited webpage. If `item` is `nil`, an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception is raised.

<a id="Discussion"></a>

## Discussion

Any items following `item` in the back-forward list are removed. This method also removes items if the capacity of the receiver is exceeded.

# addItem: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Inserts an item into the back-forward list, immediately after the current item.

## Declaration

```objectivec
- (void) addItem:(WebHistoryItem *) item;
```

## Parameters

- `item`: A web history item that represents a visited webpage. If `item` is `nil`, an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception is raised.

<a id="Discussion"></a>

## Discussion

Any items following `item` in the back-forward list are removed. This method also removes items if the capacity of the receiver is exceeded.
