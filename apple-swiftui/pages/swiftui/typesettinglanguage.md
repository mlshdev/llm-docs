> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/typesettinglanguage](https://developer.apple.com/documentation/swiftui/typesettinglanguage)

# TypesettingLanguage

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Defines how typesetting language is determined for text.

## Declaration

```swift
struct TypesettingLanguage
```

<a id="overview"></a>

## Overview

Use a modifier like [typesettingLanguage(\_:isEnabled:)](view/typesettinglanguage%28__isenabled_%29.md) to specify the typesetting language.

## Topics

### Getting language behavior

- [automatic](typesettinglanguage/automatic.md): Automatic language behavior.
- [explicit(\_:)](typesettinglanguage/explicit%28__%29.md): Use explicit language.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Localizing text

- [Preparing views for localization](preparing-views-for-localization.md): Specify hints and add strings to localize your SwiftUI views.
- [LocalizedStringKey](localizedstringkey.md): The key used to look up an entry in a strings file or strings dictionary file.
- [locale](environmentvalues/locale.md): The current locale that views should use.
- [typesettingLanguage(\_:isEnabled:)](view/typesettinglanguage%28__isenabled_%29.md): Specifies the language for typesetting.
