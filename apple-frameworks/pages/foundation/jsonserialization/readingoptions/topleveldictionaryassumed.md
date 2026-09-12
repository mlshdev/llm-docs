> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/readingoptions/topleveldictionaryassumed](https://developer.apple.com/documentation/foundation/jsonserialization/readingoptions/topleveldictionaryassumed)

# topLevelDictionaryAssumed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.

## Declaration

```swift
static var topLevelDictionaryAssumed: JSONSerialization.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This is an extension to JSON5 that isn’t part of the specification. [AttributedString](../../attributedstring.md) uses this option, along with [json5Allowed](json5allowed.md), to support the use of JSON5 inside Markdown strings that use multiple custom attributes. Using [topLevelDictionaryAssumed](topleveldictionaryassumed.md) allows for the following syntax in the parentheses of the custom attribute markup:

```other
This is a [Markdown](https://commonmark.org) string with a ^[custom attribute](factor: 10, other: true).
```

Without [topLevelDictionaryAssumed](topleveldictionaryassumed.md), the markup would have to use explicit enclosing braces to declare the contents of the parentheses to be a dictionary:

```other
This is a [Markdown](https://commonmark.org) string with a ^[custom attribute]({factor: 10, other: true}).
```

When you use braces, you must use matched pairs. This means that with [topLevelDictionaryAssumed](topleveldictionaryassumed.md) set, the syntax `({…})` and `(…)` are both legal, but `({…)` and `(…})` are not.

## See Also

### Reading Options

- [mutableContainers](mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [mutableLeaves](mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [fragmentsAllowed](fragmentsallowed.md): Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.
- [json5Allowed](json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [allowFragments](allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.

# NSJSONReadingTopLevelDictionaryAssumed (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.

## Declaration

```objectivec
NSJSONReadingTopLevelDictionaryAssumed
```

<a id="Discussion"></a>

## Discussion

This is an extension to JSON5 that isn’t part of the specification. [AttributedString](../../attributedstring.md) uses this option, along with [NSJSONReadingJSON5Allowed](json5allowed.md), to support the use of JSON5 inside Markdown strings that use multiple custom attributes. Using [NSJSONReadingTopLevelDictionaryAssumed](topleveldictionaryassumed.md) allows for the following syntax in the parentheses of the custom attribute markup:

```other
This is a [Markdown](https://commonmark.org) string with a ^[custom attribute](factor: 10, other: true).
```

Without [NSJSONReadingTopLevelDictionaryAssumed](topleveldictionaryassumed.md), the markup would have to use explicit enclosing braces to declare the contents of the parentheses to be a dictionary:

```other
This is a [Markdown](https://commonmark.org) string with a ^[custom attribute]({factor: 10, other: true}).
```

When you use braces, you must use matched pairs. This means that with [NSJSONReadingTopLevelDictionaryAssumed](topleveldictionaryassumed.md) set, the syntax `({…})` and `(…)` are both legal, but `({…)` and `(…})` are not.

## See Also

### Reading Options

- [NSJSONReadingMutableContainers](mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [NSJSONReadingMutableLeaves](mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [NSJSONReadingFragmentsAllowed](fragmentsallowed.md): Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.
- [NSJSONReadingJSON5Allowed](json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [NSJSONReadingAllowFragments](allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
