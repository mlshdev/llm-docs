> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizedstringresource/bundledescription](https://developer.apple.com/documentation/foundation/localizedstringresource/bundledescription)

# LocalizedStringResource.BundleDescription

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The location of a bundle to use for looking up localized strings, such as the main bundle, or a bundle at a specific file URL.

## Declaration

```swift
enum BundleDescription
```

## Topics

### Bundle descriptions

- [LocalizedStringResource.BundleDescription.main](bundledescription/main.md): The app’s main bundle.
- [LocalizedStringResource.BundleDescription.atURL(\_:)](bundledescription/aturl%28__%29.md): A bundle located at a specific file URL.
- [LocalizedStringResource.BundleDescription.forClass(\_:)](bundledescription/forclass%28__%29.md): The bundle for a specific class.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing resource properties

- [key](key.md): The key to use to look up a localized string.
- [defaultValue](defaultvalue.md): The resource’s default value.
- [table](table.md): The name of the table containing the key-value pairs.
- [bundle](bundle.md): The bundle containing the table’s strings file.
- [locale](locale.md): The locale to use to look up the localized string from the string resource.
