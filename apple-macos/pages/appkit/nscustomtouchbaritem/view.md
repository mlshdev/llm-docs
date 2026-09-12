> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscustomtouchbaritem/view](https://developer.apple.com/documentation/appkit/nscustomtouchbaritem/view)

# view (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The view displayed in the bar to represent this item.

## Declaration

```swift
var view: NSView { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property returns the value of [view](../nsviewcontroller/view.md) property from the view controller assigned to the [viewController](viewcontroller.md) property.

If you set the value of this property, then the [viewController](viewcontroller.md) property is automatically set to `nil`.

## See Also

### Providing item content

- [viewController](viewcontroller.md): A view controller whose view is displayed in the bar to represent this item.

# view (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The view displayed in the bar to represent this item.

## Declaration

```objectivec
@property (strong, readwrite) NSView * view;
```

<a id="Discussion"></a>

## Discussion

By default, this property returns the value of [view](../nsviewcontroller/view.md) property from the view controller assigned to the [viewController](viewcontroller.md) property.

If you set the value of this property, then the [viewController](viewcontroller.md) property is automatically set to `nil`.

## See Also

### Providing item content

- [viewController](viewcontroller.md): A view controller whose view is displayed in the bar to represent this item.
