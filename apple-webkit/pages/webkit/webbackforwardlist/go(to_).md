> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/go(to:)](https://developer.apple.com/documentation/webkit/webbackforwardlist/go(to:))

# go(to:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Makes the specified item in the back-forward list the current item.

## Declaration

```swift
func go(to item: WebHistoryItem!)
```

## Parameters

- `item`: A web history item that represents a visited webpage. If `item` is not in the back-forward list, an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception is raised.

## See Also

### Moving Backward and Forward

- [goBack()](goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [goForward()](goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.

# goToItem: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Makes the specified item in the back-forward list the current item.

## Declaration

```objectivec
- (void) goToItem:(WebHistoryItem *) item;
```

## Parameters

- `item`: A web history item that represents a visited webpage. If `item` is not in the back-forward list, an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception is raised.

## See Also

### Moving Backward and Forward

- [goBack](goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [goForward](goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.
