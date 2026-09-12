> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalternatives/primarystring](https://developer.apple.com/documentation/appkit/nstextalternatives/primarystring)

# primaryString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The text that was initially chosen as the input string.

## Declaration

```swift
var primaryString: String { get }
```

<a id="Discussion"></a>

## Discussion

The text system uses the `primaryString` property to make sure that the text is still in the same state as when it was entered.

## See Also

### Storing Alternative Text Strings

- [alternativeStrings](alternativestrings.md): An array of alternative possible interpretations that the user might select.

# primaryString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The text that was initially chosen as the input string.

## Declaration

```objectivec
@property (copy, readonly) NSString * primaryString;
```

<a id="Discussion"></a>

## Discussion

The text system uses the `primaryString` property to make sure that the text is still in the same state as when it was entered.

## See Also

### Storing Alternative Text Strings

- [alternativeStrings](alternativestrings.md): An array of alternative possible interpretations that the user might select.
