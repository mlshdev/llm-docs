> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/allowsdefaulttighteningfortruncation](https://developer.apple.com/documentation/appkit/nstextfield/allowsdefaulttighteningfortruncation)

# allowsDefaultTighteningForTruncation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.

## Declaration

```swift
var allowsDefaultTighteningForTruncation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The text field ignores this property when its value is an attributed string.

## See Also

### Configuring line wrapping

- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.

# allowsDefaultTighteningForTruncation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.

## Declaration

```objectivec
@property BOOL allowsDefaultTighteningForTruncation;
```

<a id="Discussion"></a>

## Discussion

The text field ignores this property when its value is an attributed string.

## See Also

### Configuring line wrapping

- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.
