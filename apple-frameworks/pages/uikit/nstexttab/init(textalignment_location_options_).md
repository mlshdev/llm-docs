> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstexttab/init(textalignment:location:options:)

# init(textAlignment:location:options:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

The text alignment is used to determine the position of text inside the tab column. See [NSParagraphStyle.TextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype) for a mapping between alignments and tab stop types

# initWithTextAlignment:location:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

The text alignment is used to determine the position of text inside the tab column. See [NSTextTabType](https://developer.apple.com/documentation/appkit/nsparagraphstyle/texttabtype) for a mapping between alignments and tab stop types
