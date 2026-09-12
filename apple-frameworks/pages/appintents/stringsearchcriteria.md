> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/stringsearchcriteria](https://developer.apple.com/documentation/appintents/stringsearchcriteria)

# StringSearchCriteria

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

A type that tells your app to match its items against a provided string.

## Declaration

```swift
struct StringSearchCriteria
```

<a id="overview"></a>

## Overview

Use this type in app intents that match your app’s content against a string-based value. When you define an app intent using the [search](appschema/systemintent/search.md) schema or the [ShowInAppSearchResultsIntent](showinappsearchresultsintent.md) protocol, apply this type to the [criteria](showinappsearchresultsintent/criteria-swift.property.md) property. When your app intent runs, the system sets that property to an instance of this structure and fills it with the search term. When you use this type in your app intent, use the accompanying [StringSearchScope](stringsearchscope.md) type for the [searchScopes](showinappsearchresultsintent/searchscopes.md) property.

## Topics

### Creating the search criteria

- [init(term:)](stringsearchcriteria/init%28term_%29.md): Initializes the type with the specified search term.

### Getting the search term

- [term](stringsearchcriteria/term.md): The string to use when matching items in your app.

### Getting related types

- [defaultResolverSpecification](stringsearchcriteria/defaultresolverspecification.md)
- [StringSearchCriteria.Specification](stringsearchcriteria/specification.md)
- [StringSearchCriteria.UnwrappedType](stringsearchcriteria/unwrappedtype.md)
- [StringSearchCriteria.ValueType](stringsearchcriteria/valuetype.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [SearchCriteria](searchcriteria.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Search

- [ShowInAppSearchResultsIntent](showinappsearchresultsintent.md): An app intent that displays a set of search results in the app’s interface.
- [StringSearchScope](stringsearchscope.md): Constants that describe the types of content your app includes in search results when the search criteria is a string.
