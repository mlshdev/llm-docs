> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/writingoptions/prettyprinted](https://developer.apple.com/documentation/foundation/jsonserialization/writingoptions/prettyprinted)

# prettyPrinted (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the output uses white space and indentation to make the resulting data more readable.

## Declaration

```swift
static var prettyPrinted: JSONSerialization.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

If this option isn’t set, the serialization generates the most compact possible JSON representation.

## See Also

### Formatting JSON

- [fragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [sortedKeys](sortedkeys.md): Specifies that the output sorts keys in lexicographic order.
- [withoutEscapingSlashes](withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.

# NSJSONWritingPrettyPrinted (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the output uses white space and indentation to make the resulting data more readable.

## Declaration

```objectivec
NSJSONWritingPrettyPrinted
```

<a id="Discussion"></a>

## Discussion

If this option isn’t set, the serialization generates the most compact possible JSON representation.

## See Also

### Formatting JSON

- [NSJSONWritingFragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [NSJSONWritingSortedKeys](sortedkeys.md): Specifies that the output sorts keys in lexicographic order.
- [NSJSONWritingWithoutEscapingSlashes](withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.
