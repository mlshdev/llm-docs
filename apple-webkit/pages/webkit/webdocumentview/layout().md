> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentview/layout()](https://developer.apple.com/documentation/webkit/webdocumentview/layout())

# layout() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when the receiver should change its layout immediately.

## Declaration

```swift
func layout()
```

<a id="Discussion"></a>

## Discussion

This message is sent to the view as a hint to perform any calculations and update rendering information. For example, at a minimum, the receiver might set the frame rectangle. This method should not perform any drawing operations.

## See Also

### Controlling the layout

- [setNeedsLayout(\_:)](setneedslayout%28__%29.md): Deprecated. Sets whether or not the receiver should change its layout.

# layout (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Invoked when the receiver should change its layout immediately.

## Declaration

```objectivec
- (void) layout;
```

<a id="Discussion"></a>

## Discussion

This message is sent to the view as a hint to perform any calculations and update rendering information. For example, at a minimum, the receiver might set the frame rectangle. This method should not perform any drawing operations.

## See Also

### Controlling the layout

- [setNeedsLayout:](setneedslayout%28__%29.md): Deprecated. Sets whether or not the receiver should change its layout.
