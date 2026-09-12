> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/searchcriteria](https://developer.apple.com/documentation/appintents/searchcriteria)

# SearchCriteria

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

An interface for defining the criteria to use when searching your app’s content.

## Declaration

```swift
protocol SearchCriteria : _IntentValue, Hashable, Sendable
```

<a id="overview"></a>

## Overview

The system uses this protocol to define the search criteria it supports. Use only the system-defined types that adopt this protocol, and don’t adopt this protocol in your own types.

## Topics

### Associated Types

- [SearchScopes](searchcriteria/searchscopes.md)

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [StringSearchCriteria](stringsearchcriteria.md)

## See Also

### Providing the search criteria

- [criteria](showinappsearchresultsintent/criteria-swift.property.md): The information to use when performing the search.
- [Criteria](showinappsearchresultsintent/criteria-swift.associatedtype.md)
