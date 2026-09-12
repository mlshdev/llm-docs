> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/indexedentity](https://developer.apple.com/documentation/appintents/indexedentity)

# IndexedEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An interface that allows you to include an entity in your app’s Spotlight index.

## Declaration

```swift
protocol IndexedEntity : AppEntity
```

## Mentioned In

- [Making app entities available in Spotlight](making-app-entities-available-in-spotlight.md)
- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

Adopt this protocol in app entities you want to include in your app’s Spotlight index. Adding entities to Spotlight makes them discoverable by Apple Intelligence, and also serves as the first step in letting Spotlight launch your app and display items that appear in search results. Use the properties of this protocol to configure additional Spotlight metadata to accompany your app entity in the index.

For more information about adding entities to your app’s Spotlight index, see [Making app entities available in Spotlight](making-app-entities-available-in-spotlight.md).

## Topics

### Specifying entity-related attributes

- [attributeSet](indexedentity/attributeset.md): A custom attribute set that you include with your entity to improve search accuracy.
- [defaultAttributeSet](indexedentity/defaultattributeset.md): The default set of attributes to include with your app entity in the Spotlight index.

### Hiding an entity from search results

- [hideInSpotlight](indexedentity/hideinspotlight.md): A Boolean value that indicates whether Spotlight prevents the inclusion of the entity in the index.

## Relationships

### Inherits From

- [AppEntity](appentity.md)
- [AppValue](appvalue.md)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### App entity types

- [AppEntity](appentity.md): An interface for making a custom type or app-specific concept discoverable by Apple Intelligence and experiences like Siri or the Shortcuts app.
- [FileEntity](fileentity.md): An entity that refers to a document or other file.
- [SyncableEntity](syncableentity.md): An interface that indicates your entity has an identifier that’s consistent across devices.
- [TransientAppEntity](transientappentity.md): A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [OwnershipProvidingEntity](ownershipprovidingentity.md): A type that provides the system with ownership and sharing context for an app entity.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValue](appunionvalue.md): A protocol that provides nominal type identity and metadata for union values.
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.
