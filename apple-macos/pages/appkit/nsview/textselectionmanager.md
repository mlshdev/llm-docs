> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsview/textselectionmanager

# textSelectionManager (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The text selection manager for this view.

## Declaration

```swift
var textSelectionManager: NSTextSelectionManager? { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property installs gesture recognizers and configures the view to handle text selection interactions. Setting it to `nil` removes text selection support. The default value is `nil`.

# textSelectionManager (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The text selection manager for this view.

## Declaration

```objectivec
@property (strong, nullable) NSTextSelectionManager * textSelectionManager;
```

<a id="discussion"></a>

## Discussion

Setting this property installs gesture recognizers and configures the view to handle text selection interactions. Setting it to `nil` removes text selection support. The default value is `nil`.
