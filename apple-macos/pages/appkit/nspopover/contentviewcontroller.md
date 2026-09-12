> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/contentviewcontroller](https://developer.apple.com/documentation/appkit/nspopover/contentviewcontroller)

# contentViewController (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The view controller that manages the content of the popover.

## Declaration

```swift
@IBOutlet var contentViewController: NSViewController? { get set }
```

<a id="Discussion"></a>

## Discussion

You must set the content view controller of the popover before the popover is shown. Changes to the popover’s content view controller while the popover is shown will cause the popover to animate if the [animates](animates.md) property is [true](https://developer.apple.com/documentation/swift/true).

The default value is `nil`.

# contentViewController (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The view controller that manages the content of the popover.

## Declaration

```objectivec
@property (retain, nullable) NSViewController * contentViewController;
```

<a id="Discussion"></a>

## Discussion

You must set the content view controller of the popover before the popover is shown. Changes to the popover’s content view controller while the popover is shown will cause the popover to animate if the [animates](animates.md) property is [true](https://developer.apple.com/documentation/swift/true).

The default value is `nil`.
