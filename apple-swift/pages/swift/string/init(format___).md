> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(format:_:)](https://developer.apple.com/documentation/swift/string/init(format:_:))

# init(format:\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted.

## Declaration

```swift
init(format: String, _ arguments: any CVarArg...)
```

## See Also

### Creating a String Using Formats

- [init(format:arguments:)](init%28format_arguments_%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to the user’s default locale.
- [init(format:locale:\_:)](init%28format_locale___%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information.
- [init(format:locale:arguments:)](init%28format_locale_arguments_%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information.
- [localizedStringWithFormat(\_:\_:)](localizedstringwithformat%28____%29.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the user’s default locale.
