> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/setmaintainsbackforwardlist(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/setmaintainsbackforwardlist(_:))

# setMaintainsBackForwardList(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether to use a back-forward list.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func setMaintainsBackForwardList(_ flag: Bool)
```

## Parameters

- `flag`: If [false](https://developer.apple.com/documentation/swift/false), clears the back-forward list and relinquishes ownership the page cache; otherwise, it does not.

<a id="Discussion"></a>

## Discussion

The back-forward list maintains a page cache, so applications that do not use the [goForward()](goforward%28%29.md) or [goBack()](goback%28%29.md) methods should disable it.

## See Also

### Moving Back and Forward

- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack()](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack(\_:)](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward(\_:)](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [go(toBackForwardItem:)](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.

# setMaintainsBackForwardList: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether to use a back-forward list.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (void) setMaintainsBackForwardList:(BOOL) flag;
```

## Parameters

- `flag`: If [false](https://developer.apple.com/documentation/swift/false), clears the back-forward list and relinquishes ownership the page cache; otherwise, it does not.

<a id="Discussion"></a>

## Discussion

The back-forward list maintains a page cache, so applications that do not use the [goForward](goforward%28%29.md) or [goBack](goback%28%29.md) methods should disable it.

## See Also

### Moving Back and Forward

- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [goBack:](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward:](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [goToBackForwardItem:](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.
