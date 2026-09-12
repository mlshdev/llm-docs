> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sectionedfetchrequest/configuration](https://developer.apple.com/documentation/swiftui/sectionedfetchrequest/configuration)

# SectionedFetchRequest.Configuration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The request’s configurable properties.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

You initialize a [SectionedFetchRequest](../sectionedfetchrequest.md) with a section identifier, an optional predicate, and sort descriptors, either explicitly or with a configured [NSFetchRequest](https://developer.apple.com/documentation/coredata/nsfetchrequest). Later, you can dynamically update the identifier, predicate, and sort parameters using the request’s configuration structure.

You access or bind to a request’s configuration components through properties on the associated [SectionedFetchResults](../sectionedfetchresults.md) instance, just like you do for a [FetchRequest](../fetchrequest.md) using [FetchRequest.Configuration](../fetchrequest/configuration.md).

When configuring a sectioned fetch request, ensure that the combination of the section identifier and the primary sort descriptor doesn’t create discontiguous sections.

## Topics

### Setting the section identifier

- [sectionIdentifier](configuration/sectionidentifier.md): The request’s section identifier key path.

### Setting a predicate

- [nsPredicate](configuration/nspredicate.md): The request’s predicate.

### Setting sort descriptors

- [sortDescriptors](configuration/sortdescriptors.md): Conforms when `SectionIdentifier` conforms to `Hashable` and `Result` inherits `NSManagedObject`. The request’s sort descriptors, accessed as value types.
- [nsSortDescriptors](configuration/nssortdescriptors.md): The request’s sort descriptors, accessed as reference types.

## See Also

### Configuring a request dynamically

- [projectedValue](projectedvalue.md): A binding to the request’s mutable configuration properties.
