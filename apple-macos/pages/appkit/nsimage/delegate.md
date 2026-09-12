> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/delegate](https://developer.apple.com/documentation/appkit/nsimage/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image’s delegate object.

## Declaration

```swift
weak var delegate: (any NSImageDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property contains `nil`.

## See Also

### Managing Loading and Drawing of Images

- [NSImageDelegate](../nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image’s delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<NSImageDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

By default, this property contains `nil`.

## See Also

### Managing Loading and Drawing of Images

- [NSImageDelegate](../nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
