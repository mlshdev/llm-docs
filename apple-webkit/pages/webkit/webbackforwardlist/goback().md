> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/goback()](https://developer.apple.com/documentation/webkit/webbackforwardlist/goback())

# goBack() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Moves backward one item in the back-forward list.

## Declaration

```swift
func goBack()
```

<a id="Discussion"></a>

## Discussion

This method works by changing the current item to the item that precedes it. This method raises an [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception if no item precedes the current item.

## See Also

### Moving Backward and Forward

- [goForward()](goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.
- [go(to:)](go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.

# goBack (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Moves backward one item in the back-forward list.

## Declaration

```objectivec
- (void) goBack;
```

<a id="Discussion"></a>

## Discussion

This method works by changing the current item to the item that precedes it. This method raises an [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception if no item precedes the current item.

## See Also

### Moving Backward and Forward

- [goForward](goforward%28%29.md): Deprecated. Moves forward one item in the back-forward list.
- [goToItem:](go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.
