> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/options-swift.struct/diacriticinsensitive](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct/diacriticinsensitive)

# diacriticInsensitive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A diacritic-insensitive predicate.

## Declaration

```swift
static var diacriticInsensitive: NSComparisonPredicate.Options { get }
```

<a id="Discussion"></a>

## Discussion

You represent this option in a predicate format string using a `[d]` following a string operation (for example, `"naïve" like[d] "naive"`).

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): A case-insensitive predicate.
- [normalized](normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.

# NSDiacriticInsensitivePredicateOption (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A diacritic-insensitive predicate.

## Declaration

```objectivec
NSDiacriticInsensitivePredicateOption
```

<a id="Discussion"></a>

## Discussion

You represent this option in a predicate format string using a `[d]` following a string operation (for example, `"naïve" like[d] "naive"`).

## See Also

### Constants

- [NSCaseInsensitivePredicateOption](caseinsensitive.md): A case-insensitive predicate.
- [NSNormalizedPredicateOption](normalized.md): A predicate that indicates you’ve preprocessed the strings to compare.
