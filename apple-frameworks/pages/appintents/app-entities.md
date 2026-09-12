> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/app-entities](https://developer.apple.com/documentation/appintents/app-entities)

# App entities

**Framework:** App Intents  
**Kind:** API Collection

Make your app’s core types and data concepts available to the system using app entity types.

<a id="Overview"></a>

## Overview

App entities provide the system with information about your app’s data, or about concepts related to your app’s data. App entities help the system resolve parameters for app intents by letting it introspect relevant types. For example, a photo app that provides app entities for its photos and albums might also provide app entities to represent “the current photo” or “this album.” These specific app entities help resolve intents more quickly and with fewer verbal interactions.

Define app entities for core types and concepts that you want to make available to system experiences. Add properties for any data values that help people discover entities using queries. For example, add the name of a photo album or the currency amount for a financial transaction.

## Topics

### Essentials

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md): Provide the system with information about the types your app uses to model its data so that your intents can use those types as parameters.
- [Making app entities available in Spotlight](making-app-entities-available-in-spotlight.md): Update your app entity types to support Spotlight indexing, and donate entities to make them findable in searches.

### App entity types

- [AppEntity](appentity.md): An interface for making a custom type or app-specific concept discoverable by Apple Intelligence and experiences like Siri or the Shortcuts app.
- [FileEntity](fileentity.md): An entity that refers to a document or other file.
- [IndexedEntity](indexedentity.md): An interface that allows you to include an entity in your app’s Spotlight index.
- [SyncableEntity](syncableentity.md): An interface that indicates your entity has an identifier that’s consistent across devices.
- [TransientAppEntity](transientappentity.md): A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [OwnershipProvidingEntity](ownershipprovidingentity.md): A type that provides the system with ownership and sharing context for an app entity.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValue](appunionvalue.md): A protocol that provides nominal type identity and metadata for union values.
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.

### Entity collections

- [EntityCollection](entitycollection.md): An array of entity identifiers that you use to improve the efficiency of operations involving large numbers of entities.

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [EntityIdentifierConvertible](entityidentifierconvertible.md): An interface for converting between an entity’s identifier and its string representation.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.

### Entity queries

- [Entity queries](entity-queries.md): Implement one or more query types to help the system find your app’s entities.

### Property declarations

- [ComputedProperty()](computedproperty%28%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:)](computedproperty%28title_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(indexingKey:)](computedproperty%28indexingkey_%29.md): A macro that adds a computed app entity property with get and set accessors.
- [ComputedProperty(customIndexingKey:)](computedproperty%28customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:customIndexingKey:)](computedproperty%28title_customindexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [ComputedProperty(title:indexingKey:)](computedproperty%28title_indexingkey_%29.md): A macro that adds a computed app entity property with a get accessor and an optional set accessor.
- [DeferredProperty()](deferredproperty%28%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:)](deferredproperty%28title_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(indexingKey:)](deferredproperty%28indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [DeferredProperty(title:indexingKey:)](deferredproperty%28title_indexingkey_%29.md): A macro that adds an asynchronous app entity property with an asynchronous get accessor.
- [EntityProperty](entityproperty.md): A property wrapper that exposes the associated property to the system.
- [EntityPropertyModifiers](entitypropertymodifiers.md)
- [Property comparators](property-comparators.md): Specify the type of comparison to perform during a property-matched query.

### Data representations

- [DisplayRepresentation](displayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [DisplayRepresentable](displayrepresentable.md): An interface for providing a dynamic visual representation of a specific type and instances of that type.
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md): An interface for providing the visual representation for an instance of a specific type.
- [TypeDisplayRepresentable](typedisplayrepresentable.md): An interface for providing the visual representation of a specific type.
- [TypeDisplayRepresentation](typedisplayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [StaticDisplayRepresentable](staticdisplayrepresentable.md): An interface for providing a static visual representation of a specific type.
- [CaseDisplayRepresentable](casedisplayrepresentable.md): An interface for providing the visual representation for an iterable collection of values.

### Type bridging

- [IntentValueRepresentation](intentvaluerepresentation.md): A transfer representation that enables bidirectional conversion between app entities and system intent values.

### Universal link navigation

- [URLRepresentableEntity](urlrepresentableentity.md): An interface you apply to an app entity type so the system can handle it like a universal link.
- [EntityURLRepresentation](entityurlrepresentation.md): The type that provides the URL for an app entity.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.

### Foundational types

- [AppValue](appvalue.md): An interface that describes conceptual types you use in app intents.
- [AnyIntentValue](anyintentvalue.md): A type the system uses to access a parameter or property value.

## See Also

### App-specific content

- [App intents](app-intents.md): Make your app’s custom actions available to the system by using app intent types.
- [App enums](app-enums.md): Make your app’s enumerations and predefined values available to the system by using app enum types.
- [Common data types](common-data-types.md): Use framework-defined types for common parameter and result data types such as contacts, files, currencies, and more.
- [App extension](app-extension.md): Deliver app intents in an app extension or other package that lives outside your app’s code.
