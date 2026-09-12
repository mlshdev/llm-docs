> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttab/init(textalignment:location:options:)](https://developer.apple.com/documentation/appkit/nstexttab/init(textalignment:location:options:))

# init(textAlignment:location:options:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes a text tab with the specified text alignment, location, and options.

## Declaration

```swift
init(textAlignment alignment: NSTextAlignment, location loc: CGFloat, options: [NSTextTab.OptionKey : Any] = [:])
```

## Parameters

- `alignment`: The alignment of the text.
- `loc`: The position of the text tab on the ruler, relative to the back margin.
- `options`: Options to apply to the text tab.

<a id="return-value"></a>

## Return Value

An initialized text tab.

<a id="Discussion"></a>

## Discussion

The text alignment is used to determine the position of text inside the tab column. See [NSParagraphStyle.TextTabType](../nsparagraphstyle/texttabtype.md) for a mapping between alignments and tab stop types

# initWithTextAlignment:location:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Initializes a text tab with the specified text alignment, location, and options.

## Declaration

```objectivec
- (instancetype) initWithTextAlignment:(NSTextAlignment) alignment location:(CGFloat) loc options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `alignment`: The alignment of the text.
- `loc`: The position of the text tab on the ruler, relative to the back margin.
- `options`: Options to apply to the text tab.

<a id="return-value"></a>

## Return Value

An initialized text tab.

<a id="Discussion"></a>

## Discussion

The text alignment is used to determine the position of text inside the tab column. See [NSTextTabType](../nsparagraphstyle/texttabtype.md) for a mapping between alignments and tab stop types
