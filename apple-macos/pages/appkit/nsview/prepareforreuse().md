> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/prepareforreuse()](https://developer.apple.com/documentation/appkit/nsview/prepareforreuse())

# prepareForReuse() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the view to an initial state so that it can be reused.

## Declaration

```swift
func prepareForReuse()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method sets the view’s alpha to `1.0` and its hidden state to [false](https://developer.apple.com/documentation/swift/false). Subclasses can override this method and use it to return the view to its initial state. Subclasses should call `super` at some point in their implementation.

This method offers a way to reset a view to some initial state so that it can be reused. For example, the [NSTableView](../nstableview.md) class uses it to prepare views for reuse and thereby avoid the expense of creating new views as they scroll into view. If you implement a view-reuse system in your own code, you can call this method from your own code prior to reusing them.

## See Also

### Creating a view object

- [init(frame:)](init%28frame_%29.md): Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Initializes a view using from data in the specified coder object.

# prepareForReuse (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Restores the view to an initial state so that it can be reused.

## Declaration

```objectivec
- (void) prepareForReuse;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method sets the view’s alpha to `1.0` and its hidden state to [false](https://developer.apple.com/documentation/swift/false). Subclasses can override this method and use it to return the view to its initial state. Subclasses should call `super` at some point in their implementation.

This method offers a way to reset a view to some initial state so that it can be reused. For example, the [NSTableView](../nstableview.md) class uses it to prepare views for reuse and thereby avoid the expense of creating new views as they scroll into view. If you implement a view-reuse system in your own code, you can call this method from your own code prior to reusing them.

## See Also

### Creating a view object

- [initWithFrame:](init%28frame_%29.md): Initializes and returns a newly allocated `NSView` object with a specified frame rectangle.
- [initWithCoder:](init%28coder_%29.md): Initializes a view using from data in the specified coder object.
