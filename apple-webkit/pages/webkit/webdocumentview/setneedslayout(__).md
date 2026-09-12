> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentview/setneedslayout(_:)](https://developer.apple.com/documentation/webkit/webdocumentview/setneedslayout(_:))

# setNeedsLayout(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether or not the receiver should change its layout.

## Declaration

```swift
func setNeedsLayout(_ flag: Bool)
```

## Parameters

- `flag`: Sets whether the receiver needs to update its layout in the next call to its [draw(\_:)](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method.

<a id="Discussion"></a>

## Discussion

A view conforming to this protocol should store the most recent value of this flag in an internal variable. Then, in its drawRect method, if the most recent value of this flag was [true](https://developer.apple.com/documentation/swift/true), it should invoke [layout()](layout%28%29.md) and reset the internal variable before updating the contents of the view.

## See Also

### Controlling the layout

- [layout()](layout%28%29.md): Deprecated. Invoked when the receiver should change its layout immediately.

# setNeedsLayout: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets whether or not the receiver should change its layout.

## Declaration

```objectivec
- (void) setNeedsLayout:(BOOL) flag;
```

## Parameters

- `flag`: Sets whether the receiver needs to update its layout in the next call to its [drawRect:](https://developer.apple.com/documentation/appkit/nsview/draw%28_:%29) method.

<a id="Discussion"></a>

## Discussion

A view conforming to this protocol should store the most recent value of this flag in an internal variable. Then, in its drawRect method, if the most recent value of this flag was [true](https://developer.apple.com/documentation/swift/true), it should invoke [layout](layout%28%29.md) and reset the internal variable before updating the contents of the view.

## See Also

### Controlling the layout

- [layout](layout%28%29.md): Deprecated. Invoked when the receiver should change its layout immediately.
