> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webframeview/documentview

# documentView (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The subview that displays the web content.

## Declaration

```swift
var documentView: (any NSView & WebDocumentView)! { get }
```

<a id="Discussion"></a>

## Discussion

Use [allowsScrolling](allowsscrolling.md) to enable scrolling of this view.

# documentView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The subview that displays the web content.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSView<WebDocumentView> * documentView;
```

<a id="Discussion"></a>

## Discussion

Use [allowsScrolling](allowsscrolling.md) to enable scrolling of this view.
