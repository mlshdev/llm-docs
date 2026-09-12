> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglview/update()](https://developer.apple.com/documentation/appkit/nsopenglview/update())

# update() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Called by Cocoa when the view’s window moves or when the view itself moves or is resized.

> Please use MTKView instead.

## Declaration

```swift
func update()
```

<a id="Discussion"></a>

## Discussion

The default implementation simply calls the [update()](../nsopenglcontext/update%28%29.md) method of [NSOpenGLContext](../nsopenglcontext.md). You can override this method to perform additional update operations on the context or if you need to add locks for multithreaded access to multiple contexts.

## See Also

### Managing the Visible Region

- [reshape()](reshape%28%29.md): Deprecated. Called by Cocoa when the view’s visible rectangle or bounds change.

# update (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Called by Cocoa when the view’s window moves or when the view itself moves or is resized.

> Please use MTKView instead.

## Declaration

```objectivec
- (void) update;
```

<a id="Discussion"></a>

## Discussion

The default implementation simply calls the [update](../nsopenglcontext/update%28%29.md) method of [NSOpenGLContext](../nsopenglcontext.md). You can override this method to perform additional update operations on the context or if you need to add locks for multithreaded access to multiple contexts.

## See Also

### Managing the Visible Region

- [reshape](reshape%28%29.md): Deprecated. Called by Cocoa when the view’s visible rectangle or bounds change.
