> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/init(identifier:)](https://developer.apple.com/documentation/foundation/locale/components/init(identifier:))

# init(identifier:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a locale components instance with the specified identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: A BCP-47 language identifier such as `en-u-nu-thai-ca-buddhist` or an ICU-style identifier such as `en@calendar=buddhist;numbers=thai`.

## See Also

### Creating a locale components instance

- [init(languageCode:script:languageRegion:)](init%28languagecode_script_languageregion_%29.md): Creates a locale components instance with the specified language code, script, and region identifier.
- [init(locale:)](init%28locale_%29.md): Creates a language components instance from an existing locale.
