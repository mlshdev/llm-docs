> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextview/textstorage

# textStorage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text storage object holding the text that displays in the text view.

## Declaration

```swift
var textStorage: NSTextStorage { get }
```

<a id="Discussion"></a>

## Discussion

This property is a convenience accessor that provides access through the text container.

## See Also

### Accessing TextKit Objects

- [textLayoutManager](textlayoutmanager.md): The text layout manager that lays out text for the text view’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the text view’s text container.
- [textContainer](textcontainer.md): The text container object that defines the area where text displays in the text view.

# textStorage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text storage object holding the text that displays in the text view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSTextStorage * textStorage;
```

<a id="Discussion"></a>

## Discussion

This property is a convenience accessor that provides access through the text container.

## See Also

### Accessing TextKit Objects

- [textLayoutManager](textlayoutmanager.md): The text layout manager that lays out text for the text view’s text container.
- [layoutManager](layoutmanager.md): The layout manager that lays out text for the text view’s text container.
- [textContainer](textcontainer.md): The text container object that defines the area where text displays in the text view.
