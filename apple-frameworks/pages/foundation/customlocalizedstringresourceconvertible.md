> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/customlocalizedstringresourceconvertible](https://developer.apple.com/documentation/foundation/customlocalizedstringresourceconvertible)

# CustomLocalizedStringResourceConvertible

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that provides an out-of-process localizable description.

## Declaration

```swift
protocol CustomLocalizedStringResourceConvertible
```

<a id="overview"></a>

## Overview

Similar to [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible), types that conform to [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md) provide their own representation when converting to a string instance. Whereas [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) provides a [description](https://developer.apple.com/documentation/swift/customstringconvertible/description) string, this type offers a [LocalizedStringResource](localizedstringresource.md). This allows out-of-process callers to create a localized description from the resource, possibly in a different locale than the current process uses.

## Topics

### Describing a resource

- [localizedStringResource](customlocalizedstringresourceconvertible/localizedstringresource.md): A resource that helps provide a description of this instance.

## Relationships

### Conforming Types

- [LocalizedStringResource](localizedstringresource.md)
- [PersonNameComponents](personnamecomponents.md)

## See Also

### Localization

- [Locale](locale.md): Information about linguistic, cultural, and technological conventions for use in formatting data for presentation.
- [NSOrthography](nsorthography.md): A description of the linguistic content of natural language text, typically used for spelling and grammar checking.
- [NSLocalizedString(\_:tableName:bundle:value:comment:)](nslocalizedstring%28__tablename_bundle_value_comment_%29.md): Returns a localized string from a table that Xcode generates for you when exporting localizations.
- [LocalizedStringResource](localizedstringresource.md): A reference to a localizable string, accessible from another process.
- [URLResource](urlresource.md): A resource located at a particular file URL within a bundle.
