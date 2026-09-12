> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/delegate](https://developer.apple.com/documentation/appkit/nsmatrix/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for messages from the field editor.

## Declaration

```swift
weak var delegate: (any NSMatrixDelegate)? { get set }
```

## See Also

### Related Documentation

- [textShouldEndEditing(\_:)](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textShouldBeginEditing(\_:)](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.

### Managing the Delegate

- [NSMatrixDelegate](../nsmatrixdelegate.md): The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The delegate for messages from the field editor.

## Declaration

```objectivec
@property (weak, nullable) id<NSMatrixDelegate> delegate;
```

## See Also

### Related Documentation

- [textShouldEndEditing:](textshouldendediting%28__%29.md): Requests permission to end editing.
- [textShouldBeginEditing:](textshouldbeginediting%28__%29.md): Requests permission to begin editing text.

### Managing the Delegate

- [NSMatrixDelegate](../nsmatrixdelegate.md): The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.
