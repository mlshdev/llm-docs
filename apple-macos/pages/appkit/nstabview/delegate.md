> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstabview/delegate](https://developer.apple.com/documentation/appkit/nstabview/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view’s delegate.

## Declaration

```swift
weak var delegate: (any NSTabViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must conform to the [NSTabViewDelegate](../nstabviewdelegate.md) protocol.

## See Also

### Handling the Selection of Tabs

- [NSTabViewDelegate](../nstabviewdelegate.md): The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tab view’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSTabViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The value of this property must conform to the [NSTabViewDelegate](../nstabviewdelegate.md) protocol.

## See Also

### Handling the Selection of Tabs

- [NSTabViewDelegate](../nstabviewdelegate.md): The `NSTabViewDelegate` protocol defines the optional methods implemented by delegates of `NSTabView` objects.
