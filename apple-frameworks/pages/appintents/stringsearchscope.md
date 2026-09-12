> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/stringsearchscope](https://developer.apple.com/documentation/appintents/stringsearchscope)

# StringSearchScope

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

Constants that describe the types of content your app includes in search results when the search criteria is a string.

## Declaration

```swift
enum StringSearchScope
```

<a id="overview"></a>

## Overview

When the search criteria is [StringSearchCriteria](stringsearchcriteria.md), use this type to specify the types of content your app searches. For most types of content, use the [StringSearchScope.general](stringsearchscope/general.md) option, which covers a broad range of content. If your app also searches media types, specify one or more of the other options.

## Topics

### Getting the search scopes

- [StringSearchScope.freeformVideo](stringsearchscope/freeformvideo.md): The app supports searching for free-form video content like videos people upload to social media platforms.
- [StringSearchScope.general](stringsearchscope/general.md): The app offers a general search functionality that’s exposed to the system.
- [StringSearchScope.movies](stringsearchscope/movies.md): The app supports searching for structured movie content.
- [StringSearchScope.tv](stringsearchscope/tv.md): The app supports searching for structured TV content including shows, seasons, or episodes.

### Getting the related types

- [StringSearchScope.Specification](stringsearchscope/specification.md)
- [StringSearchScope.UnwrappedType](stringsearchscope/unwrappedtype.md)
- [StringSearchScope.ValueType](stringsearchscope/valuetype.md)

## Relationships

### Conforms To

- [AppEnum](appenum.md)
- [AppValue](appvalue.md)
- [CaseDisplayRepresentable](casedisplayrepresentable.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StaticDisplayRepresentable](staticdisplayrepresentable.md)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Search

- [ShowInAppSearchResultsIntent](showinappsearchresultsintent.md): An app intent that displays a set of search results in the app’s interface.
- [StringSearchCriteria](stringsearchcriteria.md): A type that tells your app to match its items against a provided string.
