> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/isvertical](https://developer.apple.com/documentation/appkit/nssplitview/isvertical)

# isVertical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines the geometric orientation of the split view’s dividers.

## Declaration

```swift
var isVertical: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates horizontal dividers and views that stack one above the other (top-to-bottom) in the containing split view controller’s view.

To specify vertical dividers and a horizontal (side-by-side) arrangement of views within a split view controller, implement this property to return [true](https://developer.apple.com/documentation/swift/true).

# vertical (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines the geometric orientation of the split view’s dividers.

## Declaration

```objectivec
@property (getter=isVertical) BOOL vertical;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates horizontal dividers and views that stack one above the other (top-to-bottom) in the containing split view controller’s view.

To specify vertical dividers and a horizontal (side-by-side) arrangement of views within a split view controller, implement this property to return [true](https://developer.apple.com/documentation/swift/true).
