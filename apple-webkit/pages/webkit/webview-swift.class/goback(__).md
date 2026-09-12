> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/goback(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/goback(_:))

# goBack(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that loads the previous location in the back-forward list.

## Declaration

```swift
@IBAction func goBack(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method does nothing if it is unable to move backward.

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList(\_:)](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack()](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward()](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward(\_:)](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [go(toBackForwardItem:)](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.

# goBack: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that loads the previous location in the back-forward list.

## Declaration

```objectivec
- (void) goBack:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This method does nothing if it is unable to move backward.

## See Also

### Moving Back and Forward

- [setMaintainsBackForwardList:](setmaintainsbackforwardlist%28__%29.md): Deprecated. Sets whether to use a back-forward list.
- [backForwardList](backforwardlist.md): Deprecated. The receiver’s back-forward list.
- [canGoBack](cangoback.md): A Boolean that indicates whether the previous location can be loaded.
- [goBack](goback%28%29.md): Deprecated. Loads the previous location in the back-forward list.
- [canGoForward](cangoforward.md): A Boolean that indicates whether the next location can be loaded.
- [goForward](goforward%28%29.md): Deprecated. Loads the next location in the back-forward list.
- [goForward:](goforward%28__%29.md): An action method that loads the next location in the back-forward list.
- [goToBackForwardItem:](go%28tobackforwarditem_%29.md): Deprecated. Loads a specific location from the back-forward list and sets it as the current item.
