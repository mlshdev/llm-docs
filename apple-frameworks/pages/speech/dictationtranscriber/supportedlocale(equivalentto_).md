> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/dictationtranscriber/supportedlocale(equivalentto:)](https://developer.apple.com/documentation/speech/dictationtranscriber/supportedlocale(equivalentto:))

# supportedLocale(equivalentTo:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

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

Use this method to determine which of this module’s supported locales is equivalent to an arbitrary locale such as `Locale.current`.

If there is no exact equivalent, this method will return a near-equivalent: a supported (and by preference already-installed) locale that shares the same `Locale.LanguageCode` value but has a different `Locale.Region` value. This may result in an unexpected transcription, such as between “color” and “colour”.

> **Tip**

> If you use this method, your application should ideally still provide a way for the user to correct the locale by selecting from the supported locales list.

## See Also

### Checking locale support

- [installedLocales](installedlocales.md): The locales that the transcriber can transcribe into, considering only locales that are installed on the device.
- [supportedLocales](supportedlocales.md): The locales that the transcriber can transcribe into, including locales that may not be installed but are downloadable.
