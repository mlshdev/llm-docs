> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerformattingdescriptor/initwithstring:range:

# initWithString:range:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Initializes formatting descriptor with a string and selected range of string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSAttributedString *) string range:(NSRange) range;
```

## Parameters

- `string`: Attributed string for which we are creating formatting descriptor.
- `range`: Range of string that is being represented by descriptor
