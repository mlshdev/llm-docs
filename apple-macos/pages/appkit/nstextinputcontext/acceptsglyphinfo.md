> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputcontext/acceptsglyphinfo](https://developer.apple.com/documentation/appkit/nstextinputcontext/acceptsglyphinfo)

# acceptsGlyphInfo (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.

## Declaration

```swift
var acceptsGlyphInfo: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is determined by examining the return value from sending a `validAttributesForMarkedText` message to the client at initialization.

## See Also

### Configuring the Input Context

- [allowedInputSourceLocales](allowedinputsourcelocales.md): The set of keyboard input source locales allowed when this input context is active.

# acceptsGlyphInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that indicates whether the client handles `NSGlyphInfoAttributeName` or not.

## Declaration

```objectivec
@property BOOL acceptsGlyphInfo;
```

<a id="Discussion"></a>

## Discussion

The default value is determined by examining the return value from sending a `validAttributesForMarkedText` message to the client at initialization.

## See Also

### Configuring the Input Context

- [allowedInputSourceLocales](allowedinputsourcelocales.md): The set of keyboard input source locales allowed when this input context is active.
