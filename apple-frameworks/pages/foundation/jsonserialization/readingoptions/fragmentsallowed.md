> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/readingoptions/fragmentsallowed](https://developer.apple.com/documentation/foundation/jsonserialization/readingoptions/fragmentsallowed)

# fragmentsAllowed (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.

## Declaration

```swift
static var fragmentsAllowed: JSONSerialization.ReadingOptions { get }
```

## See Also

### Reading Options

- [mutableContainers](mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [mutableLeaves](mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [json5Allowed](json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [topLevelDictionaryAssumed](topleveldictionaryassumed.md): Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.
- [allowFragments](allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.

# NSJSONReadingFragmentsAllowed (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.

## Declaration

```objectivec
NSJSONReadingFragmentsAllowed
```

## See Also

### Reading Options

- [NSJSONReadingMutableContainers](mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [NSJSONReadingMutableLeaves](mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [NSJSONReadingJSON5Allowed](json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [NSJSONReadingTopLevelDictionaryAssumed](topleveldictionaryassumed.md): Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.
- [NSJSONReadingAllowFragments](allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
