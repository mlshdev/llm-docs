> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextinputcontext/allowedinputsourcelocales

# allowedInputSourceLocales (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The set of keyboard input source locales allowed when this input context is active.

## Declaration

```swift
var allowedInputSourceLocales: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

`NSAllRomanInputSourcesLocaleIdentifier` can be specified as a valid locale.

## See Also

### Configuring the Input Context

- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.

# allowedInputSourceLocales (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The set of keyboard input source locales allowed when this input context is active.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * allowedInputSourceLocales;
```

<a id="Discussion"></a>

## Discussion

`NSAllRomanInputSourcesLocaleIdentifier` can be specified as a valid locale.

## See Also

### Configuring the Input Context

- [acceptsGlyphInfo](acceptsglyphinfo.md): A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.
