> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsinflectionrule/caninflectpreferredlocalization](https://developer.apple.com/documentation/foundation/nsinflectionrule/caninflectpreferredlocalization)

# canInflectPreferredLocalization

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean value that indicates whether the rule can inflect the user’s current preferred localization.

## Declaration

```objectivec
@property (class, readonly) BOOL canInflectPreferredLocalization;
```

<a id="Discussion"></a>

## Discussion

This value doesn’t change throughout the lifetime of a process.

## See Also

### Determining Availability

- [canInflectLanguage:](caninflectlanguage_.md): Returns a Boolean value that indicates whether the rule can inflect a given language.
