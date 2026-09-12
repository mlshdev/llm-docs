> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrulerview/clientview](https://developer.apple.com/documentation/appkit/nsrulerview/clientview)

# clientView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s client view, if it has one.

## Declaration

```swift
weak var clientView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

`aView` is either the document view of the NSScrollView that contains the receiver or a subview of the document view.

# clientView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s client view, if it has one.

## Declaration

```objectivec
@property (weak, nullable) NSView * clientView;
```

<a id="Discussion"></a>

## Discussion

`aView` is either the document view of the NSScrollView that contains the receiver or a subview of the document view.
