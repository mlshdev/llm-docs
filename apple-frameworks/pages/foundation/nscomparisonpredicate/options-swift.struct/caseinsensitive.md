> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/options-swift.struct/caseinsensitive](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct/caseinsensitive)

# caseInsensitive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A case-insensitive predicate.

## Declaration

```swift
static var caseInsensitive: NSComparisonPredicate.Options { get }
```

<a id="Discussion"></a>

## Discussion

You represent this option in a predicate format string using a `[c]` following a string operation (for example, `"NeXT" like[c] "next"`).

## See Also

### Constants

- [diacriticInsensitive](diacriticinsensitive.md): A diacritic-insensitive predicate.
- [normalized](normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.

# NSCaseInsensitivePredicateOption (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A case-insensitive predicate.

## Declaration

```objectivec
NSCaseInsensitivePredicateOption
```

<a id="Discussion"></a>

## Discussion

You represent this option in a predicate format string using a `[c]` following a string operation (for example, `"NeXT" like[c] "next"`).

## See Also

### Constants

- [NSDiacriticInsensitivePredicateOption](diacriticinsensitive.md): A diacritic-insensitive predicate.
- [NSNormalizedPredicateOption](normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.
