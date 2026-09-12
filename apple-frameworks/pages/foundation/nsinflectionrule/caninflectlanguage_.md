> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinflectionrule/caninflectlanguage:](https://developer.apple.com/documentation/foundation/nsinflectionrule/caninflectlanguage:)

# canInflectLanguage:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns a Boolean value that indicates whether the rule can inflect a given language.

## Declaration

```objectivec
+ (BOOL) canInflectLanguage:(NSString *) language;
```

## Parameters

- `language`: The language to apply inflection to, specified as a BCP 47 language code.

## See Also

### Determining Availability

- [canInflectPreferredLocalization](caninflectpreferredlocalization.md): A Boolean value that indicates whether the rule can inflect the user’s current preferred localization.
