> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/inflectionrule/caninflect(language:)

# canInflect(language:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean value that indicates whether the rule can inflect a given language.

## Declaration

```swift
static func canInflect(language: String) -> Bool
```

## Parameters

- `language`: The language to apply inflection to, specified as a BCP 47 language code.

<a id="return-value"></a>

## Return Value

`true` if the rule can inflect the given language; otherwise, `false`.

## See Also

### Determining Availability

- [canInflectPreferredLocalization](caninflectpreferredlocalization.md): A Boolean value that indicates whether the rule can inflect the user’s current preferred localization.
