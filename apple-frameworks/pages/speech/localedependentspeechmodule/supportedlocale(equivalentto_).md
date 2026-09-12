> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/localedependentspeechmodule/supportedlocale(equivalentto:)](https://developer.apple.com/documentation/speech/localedependentspeechmodule/supportedlocale(equivalentto:))

# supportedLocale(equivalentTo:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A locale from the module’s supported locales equivalent to the given locale.

## Declaration

```swift
static func supportedLocale(equivalentTo locale: Locale) async -> Locale?
```

## Parameters

- `locale`: An arbitrary locale.

<a id="return-value"></a>

## Return Value

A locale in the supported locales list, or `nil` if there is no equivalent locale in that list.

<a id="discussion"></a>

## Discussion

Use this method to determine which of this module’s supported locales is equivalent to an arbitrary locale such as `Locale.current`. Use this method instead of `supportedLocales.contains(_:)`; two locales may be equivalent but not equal, and `contains(_:)` uses equality rather than equivalence.

## See Also

### Getting supported locales

- [supportedLocales](supportedlocales.md): The set of all possible asset locales that the module supports.
