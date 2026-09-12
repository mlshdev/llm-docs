> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitystringquery](https://developer.apple.com/documentation/appintents/entitystringquery)

# EntityStringQuery

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface that locates entities using arbitrary string input.

## Declaration

```swift
protocol EntityStringQuery : EntityQuery
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

EntityStringQuery adds to a [EntityQuery](entityquery.md) the ability to query instances by `String`. The `String` value against which entities are matched typically represents the name a user would use to refer to a particular instance.

## Topics

### Searching for entities

- [entities(matching:)](entitystringquery/entities%28matching_%29.md): Retrieves instances by string.

## Relationships

### Inherits From

- [DynamicOptionsProvider](dynamicoptionsprovider.md)
- [EntityQuery](entityquery.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
