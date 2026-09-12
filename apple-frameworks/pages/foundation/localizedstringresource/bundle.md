> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/localizedstringresource/bundle](https://developer.apple.com/documentation/foundation/localizedstringresource/bundle)

# bundle

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The bundle containing the table’s strings file.

## Declaration

```swift
var bundle: LocalizedStringResource.BundleDescription { get }
```

## See Also

### Accessing resource properties

- [key](key.md): The key to use to look up a localized string.
- [defaultValue](defaultvalue.md): The resource’s default value.
- [table](table.md): The name of the table containing the key-value pairs.
- [LocalizedStringResource.BundleDescription](bundledescription.md): The location of a bundle to use for looking up localized strings, such as the main bundle, or a bundle at a specific file URL.
- [locale](locale.md): The locale to use to look up the localized string from the string resource.
