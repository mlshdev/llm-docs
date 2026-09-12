> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalternatives/alternativestrings](https://developer.apple.com/documentation/appkit/nstextalternatives/alternativestrings)

# alternativeStrings (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

An array of alternative possible interpretations that the user might select.

## Declaration

```swift
var alternativeStrings: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The text system presents the alternative strings via a user interface similar to that used for spelling correction alternatives.

## See Also

### Storing Alternative Text Strings

- [primaryString](primarystring.md): The text that was initially chosen as the input string.

# alternativeStrings (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

An array of alternative possible interpretations that the user might select.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * alternativeStrings;
```

<a id="Discussion"></a>

## Discussion

The text system presents the alternative strings via a user interface similar to that used for spelling correction alternatives.

## See Also

### Storing Alternative Text Strings

- [primaryString](primarystring.md): The text that was initially chosen as the input string.
