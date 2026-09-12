> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/reshape()](https://developer.apple.com/documentation/appkit/nsopenglview/reshape())

# reshape() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Called by Cocoa when the view’s visible rectangle or bounds change.

> Please use MTKView instead.

## Declaration

```swift
func reshape()
```

<a id="Discussion"></a>

## Discussion

Cocoa typically calls this method during scrolling and resize operations but may call it in other situations when the view’s rectangles change. The default implementation does nothing. You can override this method if you need to adjust the viewport and display frustum.

## See Also

### Managing the Visible Region

- [update()](update%28%29.md): Deprecated. Called by Cocoa when the view’s window moves or when the view itself moves or is resized.

# reshape (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Called by Cocoa when the view’s visible rectangle or bounds change.

> Please use MTKView instead.

## Declaration

```objectivec
- (void) reshape;
```

<a id="Discussion"></a>

## Discussion

Cocoa typically calls this method during scrolling and resize operations but may call it in other situations when the view’s rectangles change. The default implementation does nothing. You can override this method if you need to adjust the viewport and display frustum.

## See Also

### Managing the Visible Region

- [update](update%28%29.md): Deprecated. Called by Cocoa when the view’s window moves or when the view itself moves or is resized.
