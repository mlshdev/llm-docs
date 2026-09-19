> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsrulerview/clientview

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
