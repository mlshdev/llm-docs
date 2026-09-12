> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextwritingdirectionoverride](https://developer.apple.com/documentation/appkit/nstextwritingdirectionoverride)

# NSTextWritingDirectionOverride (Swift)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.11)

> Use NSWritingDirectionOverride instead

## Declaration

```swift
var NSTextWritingDirectionOverride: Int { get }
```

<a id="Discussion"></a>

## Discussion

Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

Use the [NSWritingDirectionFormatType.override](nswritingdirectionformattype/override.md) constant instead.

## See Also

### Constants

- [NSTextWritingDirectionEmbedding](nstextwritingdirectionembedding.md): Deprecated. Text is embedded in text with another writing direction.

# NSTextWritingDirectionOverride (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.11)

> Use NSWritingDirectionOverride instead

## Declaration

```objectivec
NSTextWritingDirectionOverride
```

<a id="Discussion"></a>

## Discussion

Enables character types with inherent directionality to be overridden when required for special cases, such as for part numbers made of mixed English, digits, and Hebrew letters to be written from right to left.

Use the [NSWritingDirectionOverride](nswritingdirectionformattype/override.md) constant instead.

## See Also

### Constants

- [NSTextWritingDirectionEmbedding](nstextwritingdirectionembedding.md): Deprecated. Text is embedded in text with another writing direction.
