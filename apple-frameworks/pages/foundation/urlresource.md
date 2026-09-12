> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresource](https://developer.apple.com/documentation/foundation/urlresource)

# URLResource

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A resource located at a particular file URL within a bundle.

## Declaration

```swift
struct URLResource
```

<a id="overview"></a>

## Overview

This type is similar to [LocalizedStringResource](localizedstringresource.md) in its ability to provide access to a resource in a bundle, possibly from another process. Use the [URL](url.md) initializer [init(resource:)](url/init%28resource_%29.md) to resolve the resource.

## Topics

### Creating a URL resource

- [init(name:subdirectory:locale:bundle:)](urlresource/init%28name_subdirectory_locale_bundle_%29.md): Creates a URL resource from the given bundle, name, and subdirectory, optionally specifying a locale.

### Accessing resource properties

- [bundle](urlresource/bundle.md): The bundle containing the resource.
- [name](urlresource/name.md): The name of the resource in the bundle.
- [subdirectory](urlresource/subdirectory.md): The subdirectory, if any, of the resource.
- [locale](urlresource/locale.md): The bundle containing the resource.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Localization

- [Locale](locale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString(\_:tableName:bundle:value:comment:)](nslocalizedstring%28__tablename_bundle_value_comment_%29.md): Returns a localized string from a table that Xcode generates for you when exporting localizations.
- [LocalizedStringResource](localizedstringresource.md): A reference to a localizable string, accessible from another process.
- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md): A type that provides an out-of-process localizable description.
