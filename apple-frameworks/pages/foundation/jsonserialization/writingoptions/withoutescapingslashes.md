> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/writingoptions/withoutescapingslashes](https://developer.apple.com/documentation/foundation/jsonserialization/writingoptions/withoutescapingslashes)

# withoutEscapingSlashes (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies that the output doesn’t prefix slash characters with escape characters.

## Declaration

```swift
static var withoutEscapingSlashes: JSONSerialization.WritingOptions { get }
```

## See Also

### Formatting JSON

- [fragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [prettyPrinted](prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [sortedKeys](sortedkeys.md): Specifies that the output sorts keys in lexicographic order.

# NSJSONWritingWithoutEscapingSlashes (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies that the output doesn’t prefix slash characters with escape characters.

## Declaration

```objectivec
NSJSONWritingWithoutEscapingSlashes
```

## See Also

### Formatting JSON

- [NSJSONWritingFragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [NSJSONWritingPrettyPrinted](prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [NSJSONWritingSortedKeys](sortedkeys.md): Specifies that the output sorts keys in lexicographic order.
