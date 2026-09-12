> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/options-swift.struct/normalized](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct/normalized)

# normalized (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate that indicates you’ve preprocessed the strings to compare.

## Declaration

```swift
static var normalized: NSComparisonPredicate.Options { get }
```

<a id="Discussion"></a>

## Discussion

This option supersedes `NSCaseInsensitivePredicateOption` and `NSDiacriticInsensitivePredicateOption`, and is a performance optimization option.

You represent this option in a predicate format string using a `[n]` following a string operation (for example, `"WXYZlan" matches[n] ".lan"`).

## See Also

### Constants

- [caseInsensitive](caseinsensitive.md): A case-insensitive predicate.
- [diacriticInsensitive](diacriticinsensitive.md): A diacritic-insensitive predicate.

# NSNormalizedPredicateOption (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate that indicates you’ve preprocessed the strings to compare.

## Declaration

```objectivec
NSNormalizedPredicateOption
```

<a id="Discussion"></a>

## Discussion

This option supersedes `NSCaseInsensitivePredicateOption` and `NSDiacriticInsensitivePredicateOption`, and is a performance optimization option.

You represent this option in a predicate format string using a `[n]` following a string operation (for example, `"WXYZlan" matches[n] ".lan"`).

## See Also

### Constants

- [NSCaseInsensitivePredicateOption](caseinsensitive.md): A case-insensitive predicate.
- [NSDiacriticInsensitivePredicateOption](diacriticinsensitive.md): A diacritic-insensitive predicate.
