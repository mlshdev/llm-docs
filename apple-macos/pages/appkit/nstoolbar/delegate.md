> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/delegate](https://developer.apple.com/documentation/appkit/nstoolbar/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The object you use to customize the toolbar contents and configuration.

## Declaration

```swift
weak var delegate: (any NSToolbarDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property if you customize the toolbar’s behavior. The object you assign to this property must adopt the [NSToolbarDelegate](../nstoolbardelegate.md) protocol.

## See Also

### Configuring the toolbar contents

- [NSToolbarDelegate](../nstoolbardelegate.md): A set of optional methods you use to configure the toolbar and respond to changes.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The object you use to customize the toolbar contents and configuration.

## Declaration

```objectivec
@property (weak, nullable) id<NSToolbarDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Assign an object to this property if you customize the toolbar’s behavior. The object you assign to this property must adopt the [NSToolbarDelegate](../nstoolbardelegate.md) protocol.

## See Also

### Configuring the toolbar contents

- [NSToolbarDelegate](../nstoolbardelegate.md): A set of optional methods you use to configure the toolbar and respond to changes.
