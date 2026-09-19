> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/dictationtranscriber/installedlocales

# installedLocales

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The locales that the transcriber can transcribe into, considering only locales that are installed on the device.

## Declaration

```swift
static var installedLocales: [Locale] { get async }
```

## See Also

### Checking locale support

- [supportedLocales](supportedlocales.md): The locales that the transcriber can transcribe into, including locales that may not be installed but are downloadable.
- [supportedLocale(equivalentTo:)](supportedlocale%28equivalentto_%29.md): A locale from the module’s supported locales equivalent to the given locale.
