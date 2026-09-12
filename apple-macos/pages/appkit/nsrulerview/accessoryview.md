> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/accessoryview](https://developer.apple.com/documentation/appkit/nsrulerview/accessoryview)

# accessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s accessory view to `aView`.

## Declaration

```swift
var accessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if `aView` is not `nil` and the receiver has no client view.

## See Also

### Related Documentation

- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.

# accessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s accessory view to `aView`.

## Declaration

```objectivec
@property (strong, nullable) NSView * accessoryView;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSInternalInconsistencyException` if `aView` is not `nil` and the receiver has no client view.

## See Also

### Related Documentation

- [reservedThicknessForAccessoryView](reservedthicknessforaccessoryview.md): The room available for the receiver’s accessory view to `thickness`.
