> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/init(textelement:range:)](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/init(textelement:range:))

# init(textElement:range:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
