> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomtouchbaritem/viewcontroller](https://developer.apple.com/documentation/appkit/nscustomtouchbaritem/viewcontroller)

# viewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A view controller whose view is displayed in the bar to represent this item.

## Declaration

```swift
var viewController: NSViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

When set, the item’s [view](view.md) property returns the view controller’s [view](../nsviewcontroller/view.md) property.

The property is automatically set to `nil` if you provide your own value for the [view](view.md) property.

## See Also

### Providing item content

- [view](view.md): The view displayed in the bar to represent this item.

# viewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A view controller whose view is displayed in the bar to represent this item.

## Declaration

```objectivec
@property (strong, readwrite, nullable) NSViewController * viewController;
```

<a id="Discussion"></a>

## Discussion

When set, the item’s [view](view.md) property returns the view controller’s [view](../nsviewcontroller/view.md) property.

The property is automatically set to `nil` if you provide your own value for the [view](view.md) property.

## See Also

### Providing item content

- [view](view.md): The view displayed in the bar to represent this item.
