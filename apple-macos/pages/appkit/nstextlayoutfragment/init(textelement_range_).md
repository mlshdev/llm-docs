> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/init(textelement:range:)](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/init(textelement:range:))

# init(textElement:range:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Create a new layout fragment using the provided text element and range.

## Declaration

```swift
init(textElement: NSTextElement, range rangeInElement: NSTextRange?)
```

## Parameters

- `textElement`: An [NSTextElement](../nstextelement.md).
- `rangeInElement`: A range that defines the boundaries of the text for the new layout fragment.

## See Also

### Creating a layout fragment

- [init(coder:)](init%28coder_%29.md): Creates a new layout fragment with the coder you provide.

# initWithTextElement:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Create a new layout fragment using the provided text element and range.

## Declaration

```objectivec
- (instancetype) initWithTextElement:(NSTextElement *) textElement range:(NSTextRange *) rangeInElement;
```

## Parameters

- `textElement`: An [NSTextElement](../nstextelement.md).
- `rangeInElement`: A range that defines the boundaries of the text for the new layout fragment.

## See Also

### Creating a layout fragment

- [initWithCoder:](init%28coder_%29.md): Creates a new layout fragment with the coder you provide.
