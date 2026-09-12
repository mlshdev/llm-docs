> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webbackforwardlist/goforward()](https://developer.apple.com/documentation/webkit/webbackforwardlist/goforward())

# goForward() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Moves forward one item in the back-forward list.

## Declaration

```swift
func goForward()
```

<a id="Discussion"></a>

## Discussion

This method works by changing the current item to the item that follows it. This method raises an [internalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception if no item follows the current item.

## See Also

### Moving Backward and Forward

- [goBack()](goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [go(to:)](go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.

# goForward (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Moves forward one item in the back-forward list.

## Declaration

```objectivec
- (void) goForward;
```

<a id="Discussion"></a>

## Discussion

This method works by changing the current item to the item that follows it. This method raises an [NSInternalInconsistencyException](https://developer.apple.com/documentation/foundation/nsexceptionname/internalinconsistencyexception) exception if no item follows the current item.

## See Also

### Moving Backward and Forward

- [goBack](goback%28%29.md): Deprecated. Moves backward one item in the back-forward list.
- [goToItem:](go%28to_%29.md): Deprecated. Makes the specified item in the back-forward list the current item.
