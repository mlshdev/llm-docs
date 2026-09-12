> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrixdelegate](https://developer.apple.com/documentation/appkit/nsmatrixdelegate)

# NSMatrixDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.

## Declaration

```swift
protocol NSMatrixDelegate : NSControlTextEditingDelegate
```

<a id="overview"></a>

## Overview

This protocol simply adopts the `NSControlTextEditingDelegate` protocol, adding no additional methods. See [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md) for more information.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [NSMatrix](nsmatrix.md): A legacy interface for grouping radio buttons or other types of cells together.

### Managing the Delegate

- [delegate](nsmatrix/delegate.md): The delegate for messages from the field editor.

# NSMatrixDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

The `NSMatrixDelegate` protocol defines the optional methods implemented by delegates of `NSMatrix` objects.

## Declaration

```objectivec
@protocol NSMatrixDelegate <NSControlTextEditingDelegate>
```

<a id="overview"></a>

## Overview

This protocol simply adopts the `NSControlTextEditingDelegate` protocol, adding no additional methods. See [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md) for more information.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)

## See Also

### Related Documentation

- [NSMatrix](nsmatrix.md): A legacy interface for grouping radio buttons or other types of cells together.

### Managing the Delegate

- [delegate](nsmatrix/delegate.md): The delegate for messages from the field editor.
