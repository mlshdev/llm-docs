> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstext/alignment

# alignment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alignment of all the receiver’s text.

## Declaration

```swift
var alignment: NSTextAlignment { get set }
```

<a id="Discussion"></a>

## Discussion

The value of  `mode` must be one of the alignments described in [NSTextAlignment](../nstextalignment.md).

Text using `NSNaturalTextAlignment` is actually displayed using one of the other alignments, depending on the natural alignment of the text’s script.

## See Also

### Setting text alignment

- [alignCenter(\_:)](aligncenter%28__%29.md): This action method applies center alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignLeft(\_:)](alignleft%28__%29.md): This action method applies left alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignRight(\_:)](alignright%28__%29.md): This action method applies right alignment to selected paragraphs (or all text if the receiver is a plain text object).

# alignment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The alignment of all the receiver’s text.

## Declaration

```objectivec
@property NSTextAlignment alignment;
```

<a id="Discussion"></a>

## Discussion

The value of  `mode` must be one of the alignments described in [NSTextAlignment](../nstextalignment.md).

Text using `NSNaturalTextAlignment` is actually displayed using one of the other alignments, depending on the natural alignment of the text’s script.

## See Also

### Setting text alignment

- [alignCenter:](aligncenter%28__%29.md): This action method applies center alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignLeft:](alignleft%28__%29.md): This action method applies left alignment to selected paragraphs (or all text if the receiver is a plain text object).
- [alignRight:](alignright%28__%29.md): This action method applies right alignment to selected paragraphs (or all text if the receiver is a plain text object).
