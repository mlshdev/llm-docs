> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bedirectionaltextrange](https://developer.apple.com/documentation/browserenginekit/bedirectionaltextrange)

# BEDirectionalTextRange (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Modifications to text length based on its offset.

## Declaration

```swift
struct BEDirectionalTextRange
```

<a id="overview"></a>

## Overview

This class encapsulates instructions that modify a text selection. In a given instance, the sign of [length](bedirectionaltextrange/length.md) determines the selection direction from its [offset](bedirectionaltextrange/offset.md). Positive length indicates moving the selection forward in the string, whereas a negative  [length](bedirectionaltextrange/length.md) moves the selection backward in the string. For example, applying a directional text range of `{ -6, -2 }` to the selection “world” in the string “Hello world” results in the selection, “Hel”.

## Topics

### Creating a directional text range

- [init()](bedirectionaltextrange/init%28%29.md): Creates an empty directional text range.
- [init(offset:length:)](bedirectionaltextrange/init%28offset_length_%29.md): Creates a range for a text selection that also specifies a direction.

### Measuring text range

- [length](bedirectionaltextrange/length.md): The number of characters included in the directional text range.
- [offset](bedirectionaltextrange/offset.md): The starting position of the directional text range within the text.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Information about text

- [BEExtendedTextInputTraits](beextendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.

# BEDirectionalTextRange (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS · visionOS · watchOS

Modifications to text length based on its offset.

## Declaration

```objectivec
typedef struct { ... } BEDirectionalTextRange;
```

<a id="overview"></a>

## Overview

This class encapsulates instructions that modify a text selection. In a given instance, the sign of [length](bedirectionaltextrange/length.md) determines the selection direction from its [offset](bedirectionaltextrange/offset.md). Positive length indicates moving the selection forward in the string, whereas a negative  [length](bedirectionaltextrange/length.md) moves the selection backward in the string. For example, applying a directional text range of `{ -6, -2 }` to the selection “world” in the string “Hello world” results in the selection, “Hel”.

## Topics

### Measuring text range

- [length](bedirectionaltextrange/length.md): The number of characters included in the directional text range.
- [offset](bedirectionaltextrange/offset.md): The starting position of the directional text range within the text.

## See Also

### Information about text

- [BEExtendedTextInputTraits](beextendedtextinputtraits.md): An object that customizes text-input appearance and behavior beyond the standard system traits.
