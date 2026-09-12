> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/go(tobackforwarditem:)](https://developer.apple.com/documentation/webkit/webview-swift.class/go(tobackforwarditem:))

# go(toBackForwardItem:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads a specific location from the back-forward list and sets it as the current item.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func go(toBackForwardItem item: WebHistoryItem!) -> Bool
```

## Parameters

- `item`: The index of the location to load. This method sets the current item in the back-forward list to `item`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` is in the back-forward list; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList(\_:)](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack()](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack(\_:)](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward(\_:)](goforward%28__%29.md): An action method that loads the next location in the back-forward list.

# goToBackForwardItem: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads a specific location from the back-forward list and sets it as the current item.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (BOOL) goToBackForwardItem:(WebHistoryItem *) item;
```

## Parameters

- `item`: The index of the location to load. This method sets the current item in the back-forward list to `item`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` is in the back-forward list; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList:](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack:](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward:](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
