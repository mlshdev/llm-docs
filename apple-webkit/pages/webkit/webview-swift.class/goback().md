> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/goback()](https://developer.apple.com/documentation/webkit/webview-swift.class/goback())

# goBack() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads the previous location in the back-forward list.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func goBack() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if able to move backward; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList(\_:)](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack(\_:)](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward(\_:)](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [go(toBackForwardItem:)](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.

# goBack (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads the previous location in the back-forward list.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (BOOL) goBack;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if able to move backward; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList:](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack:](goback%28__%29.md): An action method that loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward:](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [goToBackForwardItem:](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.
