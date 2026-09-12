> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechtranscriber/supportedlocales](https://developer.apple.com/documentation/speech/speechtranscriber/supportedlocales)

# supportedLocales

**Framework:** Speech  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The locales that the transcriber can transcribe into, including locales that may not be installed but are downloadable.

## Declaration

```swift
static var supportedLocales: [Locale] { get async }
```

<a id="discussion"></a>

## Discussion

This array is empty if the device does not support the transcriber.

## See Also

### Checking locale support

- [installedLocales](installedlocales.md): The locales that the transcriber can transcribe into, considering only locales that are installed on the device.
- [supportedLocale(equivalentTo:)](supportedlocale%28equivalentto_%29.md): A locale from the module’s supported locales equivalent to the given locale.
