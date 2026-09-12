> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/selectedviewcontroller](https://developer.apple.com/documentation/appkit/nspagecontroller/selectedviewcontroller)

# selectedViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The view controller associated with the selected object..

## Declaration

```swift
var selectedViewController: NSViewController? { get }
```

<a id="Discussion"></a>

## Discussion

May be `nil` if not using view controllers.

This property is only relevant in book mode. See [Book Mode (View Controller Mode)](../nspagecontroller.md#Book-Mode-View-Controller-Mode) for details.

# selectedViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The view controller associated with the selected object..

## Declaration

```objectivec
@property (strong, readonly, nullable) NSViewController * selectedViewController;
```

<a id="Discussion"></a>

## Discussion

May be `nil` if not using view controllers.

This property is only relevant in book mode. See [Book Mode (View Controller Mode)](../nspagecontroller.md#Book-Mode-View-Controller-Mode) for details.
