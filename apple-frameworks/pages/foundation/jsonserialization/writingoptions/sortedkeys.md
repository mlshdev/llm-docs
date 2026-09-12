> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/writingoptions/sortedkeys](https://developer.apple.com/documentation/foundation/jsonserialization/writingoptions/sortedkeys)

# sortedKeys (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifies that the output sorts keys in lexicographic order.

## Declaration

```swift
static var sortedKeys: JSONSerialization.WritingOptions { get }
```

## See Also

### Formatting JSON

- [fragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [prettyPrinted](prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [withoutEscapingSlashes](withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.

# NSJSONWritingSortedKeys (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifies that the output sorts keys in lexicographic order.

## Declaration

```objectivec
NSJSONWritingSortedKeys
```

## See Also

### Formatting JSON

- [NSJSONWritingFragmentsAllowed](fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [NSJSONWritingPrettyPrinted](prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [NSJSONWritingWithoutEscapingSlashes](withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.
