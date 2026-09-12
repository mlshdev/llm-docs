> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/userinterfacelayoutdirection](https://developer.apple.com/documentation/appkit/nsview/userinterfacelayoutdirection)

# userInterfaceLayoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The layout direction for content in the view.

## Declaration

```swift
var userInterfaceLayoutDirection: NSUserInterfaceLayoutDirection { get set }
```

<a id="Discussion"></a>

## Discussion

Different languages support different directions for laying out content. While many languages support left-to-right layout, some support right-to-left layout. This property contains the preferred layout direction employed by the view. It is the responsibility of the view to respect this value and lay out its content appropriately.

In macOS 10.9 and later, if no layout direction is set explicitly, this property contains the value reported by the app’s [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) property. In prior versions of macOS, it returns the value [NSUserInterfaceLayoutDirection.leftToRight](../nsuserinterfacelayoutdirection/lefttoright.md) by default. Certain AppKit subclasses, such as [NSOutlineView](../nsoutlineview.md), respect the value returned by this method and adjust their layout accordingly.

# userInterfaceLayoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The layout direction for content in the view.

## Declaration

```objectivec
@property NSUserInterfaceLayoutDirection userInterfaceLayoutDirection;
```

<a id="Discussion"></a>

## Discussion

Different languages support different directions for laying out content. While many languages support left-to-right layout, some support right-to-left layout. This property contains the preferred layout direction employed by the view. It is the responsibility of the view to respect this value and lay out its content appropriately.

In macOS 10.9 and later, if no layout direction is set explicitly, this property contains the value reported by the app’s [userInterfaceLayoutDirection](../nsapplication/userinterfacelayoutdirection.md) property. In prior versions of macOS, it returns the value [NSUserInterfaceLayoutDirectionLeftToRight](../nsuserinterfacelayoutdirection/lefttoright.md) by default. Certain AppKit subclasses, such as [NSOutlineView](../nsoutlineview.md), respect the value returned by this method and adjust their layout accordingly.
