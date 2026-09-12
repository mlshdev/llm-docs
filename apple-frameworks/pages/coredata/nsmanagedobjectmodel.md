> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel)

# NSManagedObjectModel (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A programmatic representation of the `.xcdatamodeld` file describing your objects.

## Declaration

```swift
class NSManagedObjectModel
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

The model contains one or more `NSEntityDescription` objects representing the entities in the schema. Each `NSEntityDescription` object has property description objects (instances of subclasses of [NSPropertyDescription](nspropertydescription.md)) that represent the properties (or fields) of the entity in the schema. The Core Data framework uses this description in several ways:

- Constraining UI creation in Interface Builder
- Validating attribute and relationship values at runtime
- Mapping between your managed objects and a database or file-based schema for object persistence

A managed object model maintains a mapping between each of its entity objects and a corresponding managed object class for use with the persistent storage mechanisms in the Core Data framework. You can determine the entity for a particular managed object with the `entity` method.

You typically create managed object models using the data modeling tool in Xcode, but it’s possible to build a model programmatically if needed.

<a id="Loading-a-model-file"></a>

### Loading a model file

Managed object model files are typically stored in a project or a framework. To load a model, you provide an URL to the constructor. Note that loading a model doesn’t have the effect of loading all of its entities.

<a id="Storing-fetch-requests"></a>

### Storing fetch requests

Frequently, you need a collection of objects that share features in common. Sometimes you can define those features (property values) in advance; sometimes you need to be able to supply values at runtime. For example, suppose you want to retrieve all movies owned by Pixar, or retrieve all movies that earned more than an amount specified by the user at runtime.

Fetch requests are often predefined in a managed object model as templates. They allow you to predefine named queries and their parameters in the model. Typically they contain variables that need to be substituted at runtime. `NSManagedObjectModel` provides an API to retrieve a stored fetch request by name, and to perform variable substitution—see [fetchRequestTemplate(forName:)](nsmanagedobjectmodel/fetchrequesttemplate%28forname_%29.md) and [fetchRequestFromTemplate(withName:substitutionVariables:)](nsmanagedobjectmodel/fetchrequestfromtemplate%28withname_substitutionvariables_%29.md).

You typically define fetch request templates using the Data Model editor in Xcode. You can also create fetch request templates programmatically, and associate them with a model using [setFetchRequestTemplate(\_:forName:)](nsmanagedobjectmodel/setfetchrequesttemplate%28__forname_%29.md).

<a id="Supporting-multiple-configurations-for-the-same-model"></a>

### Supporting multiple configurations for the same model

You may want to specify different sets of entities for the same model to be used in different situations. For example, suppose certain entities should only be available if a user has administrative privileges. To support this requirement, a model may have more than one configuration. Each configuration is named, and has an associated set of entities. The sets may overlap. You establish configurations programmatically using [setEntities(\_:forConfigurationName:)](nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md) or using the Xcode design tool, and retrieve the entities for a given configuration name using [entities(forConfigurationName:)](nsmanagedobjectmodel/entities%28forconfigurationname_%29.md).

<a id="Changing-models"></a>

### Changing models

Because a model describes the structure of the data in a persistent store, changing any parts of a model that alters the schema renders it incompatible with (and so unable to open) the stores it previously created. If you change your schema, you therefore need to migrate the data in existing stores to new version (see [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)). For example, if you add a new entity or a new attribute to an existing entity, you *can’t* open old stores; if you add a validation constraint or set a new default value for an attribute, you *can* open old stores.

<a id="Editing-models-at-runtime"></a>

### Editing models at runtime

Managed object models are editable until they are used by an object graph manager (a managed object context or a persistent store coordinator). This allows you to create or modify them dynamically until their first use. However, once a model is being used, it *must not* be changed. This is enforced at runtime—when the object manager first fetches data using a model, the whole of that model becomes uneditable. Any attempt to mutate a model or any of its sub-objects after that point throws an exception. If you need to modify a model that’s in use, create a copy, modify the copy, and then discard the objects with the old model.

<a id="Enumerating-entities-with-fast-enumeration"></a>

### Enumerating entities with fast enumeration

In macOS 10.5 and later and on iOS, `NSManagedObjectModel` supports the [NSFastEnumeration](../foundation/nsfastenumeration.md) protocol. You can use this to enumerate over a model’s entities, as illustrated in the following example:

```objc
NSManagedObjectModel *aModel = ...;
for (NSEntityDescription *entity in aModel) {
    // entity is each instance of NSEntityDescription in aModel in turn
}
```

## Topics

### Creating a managed object model

- [init(contentsOf:)](nsmanagedobjectmodel/init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init()](nsmanagedobjectmodel/init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:)](nsmanagedobjectmodel/mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModel(from:forStoreMetadata:)](nsmanagedobjectmodel/mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:)](nsmanagedobjectmodel/init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [init(byMerging:forStoreMetadata:)](nsmanagedobjectmodel/init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

### Managing entities and configurations

- [entities](nsmanagedobjectmodel/entities.md): The entities in the model.
- [entitiesByName](nsmanagedobjectmodel/entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](nsmanagedobjectmodel/configurations.md): All the available configuration names of the model.
- [entities(forConfigurationName:)](nsmanagedobjectmodel/entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities(\_:forConfigurationName:)](nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](nsmanagedobjectmodel/fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplate(forName:)](nsmanagedobjectmodel/fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplate(withName:substitutionVariables:)](nsmanagedobjectmodel/fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate(\_:forName:)](nsmanagedobjectmodel/setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.

### Handling localization

- [localizationDictionary](nsmanagedobjectmodel/localizationdictionary.md): The localization dictionary of the model.

### Versioning and migrating entities

- [versionChecksum](nsmanagedobjectmodel/versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](nsmanagedobjectmodel/versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](nsmanagedobjectmodel/entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration(withName:compatibleWithStoreMetadata:)](nsmanagedobjectmodel/isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

### Working with indexes

- [NSFetchIndexElementType](nsfetchindexelementtype.md): Defines the possible types of index elements.
- [NSFetchIndexDescription](nsfetchindexdescription.md): The description of the index.
- [NSFetchIndexElementDescription](nsfetchindexelementdescription.md): Description of an Index Element

### Initializers

- [init(byMergingModels:)](nsmanagedobjectmodel/init%28bymergingmodels_%29.md)
- [init(byMergingModels:forStoreMetadata:)](nsmanagedobjectmodel/init%28bymergingmodels_forstoremetadata_%29.md)
- [init(coder:)](nsmanagedobjectmodel/init%28coder_%29.md)
- [init(contentsOfURL:)](nsmanagedobjectmodel/init%28contentsofurl_%29.md)

### Type Methods

- [makeManagedObjectModel(for:mergedWith:)](nsmanagedobjectmodel/makemanagedobjectmodel%28for_mergedwith_%29-2tc31.md)
- [makeManagedObjectModel(for:mergedWith:)](nsmanagedobjectmodel/makemanagedobjectmodel%28for_mergedwith_%29-37opo.md)
- [makeManagedObjectModel(for:mergedWith:)](nsmanagedobjectmodel/makemanagedobjectmodel%28for_mergedwith_%29-7lqq9.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Object Modeling

- [NSEntityDescription](nsentitydescription.md): A description of a Core Data entity.
- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSDerivedAttributeDescription](nsderivedattributedescription.md): A description of an attribute that derives its value by performing a calculation on a related attribute.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.

# NSManagedObjectModel (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A programmatic representation of the `.xcdatamodeld` file describing your objects.

## Declaration

```objectivec
@interface NSManagedObjectModel : NSObject
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)

<a id="overview"></a>

## Overview

The model contains one or more `NSEntityDescription` objects representing the entities in the schema. Each `NSEntityDescription` object has property description objects (instances of subclasses of [NSPropertyDescription](nspropertydescription.md)) that represent the properties (or fields) of the entity in the schema. The Core Data framework uses this description in several ways:

- Constraining UI creation in Interface Builder
- Validating attribute and relationship values at runtime
- Mapping between your managed objects and a database or file-based schema for object persistence

A managed object model maintains a mapping between each of its entity objects and a corresponding managed object class for use with the persistent storage mechanisms in the Core Data framework. You can determine the entity for a particular managed object with the `entity` method.

You typically create managed object models using the data modeling tool in Xcode, but it’s possible to build a model programmatically if needed.

<a id="Loading-a-model-file"></a>

### Loading a model file

Managed object model files are typically stored in a project or a framework. To load a model, you provide an URL to the constructor. Note that loading a model doesn’t have the effect of loading all of its entities.

<a id="Storing-fetch-requests"></a>

### Storing fetch requests

Frequently, you need a collection of objects that share features in common. Sometimes you can define those features (property values) in advance; sometimes you need to be able to supply values at runtime. For example, suppose you want to retrieve all movies owned by Pixar, or retrieve all movies that earned more than an amount specified by the user at runtime.

Fetch requests are often predefined in a managed object model as templates. They allow you to predefine named queries and their parameters in the model. Typically they contain variables that need to be substituted at runtime. `NSManagedObjectModel` provides an API to retrieve a stored fetch request by name, and to perform variable substitution—see [fetchRequestTemplateForName:](nsmanagedobjectmodel/fetchrequesttemplate%28forname_%29.md) and [fetchRequestFromTemplateWithName:substitutionVariables:](nsmanagedobjectmodel/fetchrequestfromtemplate%28withname_substitutionvariables_%29.md).

You typically define fetch request templates using the Data Model editor in Xcode. You can also create fetch request templates programmatically, and associate them with a model using [setFetchRequestTemplate:forName:](nsmanagedobjectmodel/setfetchrequesttemplate%28__forname_%29.md).

<a id="Supporting-multiple-configurations-for-the-same-model"></a>

### Supporting multiple configurations for the same model

You may want to specify different sets of entities for the same model to be used in different situations. For example, suppose certain entities should only be available if a user has administrative privileges. To support this requirement, a model may have more than one configuration. Each configuration is named, and has an associated set of entities. The sets may overlap. You establish configurations programmatically using [setEntities:forConfiguration:](nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md) or using the Xcode design tool, and retrieve the entities for a given configuration name using [entitiesForConfiguration:](nsmanagedobjectmodel/entities%28forconfigurationname_%29.md).

<a id="Changing-models"></a>

### Changing models

Because a model describes the structure of the data in a persistent store, changing any parts of a model that alters the schema renders it incompatible with (and so unable to open) the stores it previously created. If you change your schema, you therefore need to migrate the data in existing stores to new version (see [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)). For example, if you add a new entity or a new attribute to an existing entity, you *can’t* open old stores; if you add a validation constraint or set a new default value for an attribute, you *can* open old stores.

<a id="Editing-models-at-runtime"></a>

### Editing models at runtime

Managed object models are editable until they are used by an object graph manager (a managed object context or a persistent store coordinator). This allows you to create or modify them dynamically until their first use. However, once a model is being used, it *must not* be changed. This is enforced at runtime—when the object manager first fetches data using a model, the whole of that model becomes uneditable. Any attempt to mutate a model or any of its sub-objects after that point throws an exception. If you need to modify a model that’s in use, create a copy, modify the copy, and then discard the objects with the old model.

<a id="Enumerating-entities-with-fast-enumeration"></a>

### Enumerating entities with fast enumeration

In macOS 10.5 and later and on iOS, `NSManagedObjectModel` supports the [NSFastEnumeration](../foundation/nsfastenumeration.md) protocol. You can use this to enumerate over a model’s entities, as illustrated in the following example:

```objc
NSManagedObjectModel *aModel = ...;
for (NSEntityDescription *entity in aModel) {
    // entity is each instance of NSEntityDescription in aModel in turn
}
```

## Topics

### Creating a managed object model

- [initWithContentsOfURL:](nsmanagedobjectmodel/init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init](nsmanagedobjectmodel/init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:](nsmanagedobjectmodel/mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModelFromBundles:forStoreMetadata:](nsmanagedobjectmodel/mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:](nsmanagedobjectmodel/init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [modelByMergingModels:forStoreMetadata:](nsmanagedobjectmodel/init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

### Managing entities and configurations

- [entities](nsmanagedobjectmodel/entities.md): The entities in the model.
- [entitiesByName](nsmanagedobjectmodel/entitiesbyname.md): The entities of the model, keyed by name.
- [configurations](nsmanagedobjectmodel/configurations.md): All the available configuration names of the model.
- [entitiesForConfiguration:](nsmanagedobjectmodel/entities%28forconfigurationname_%29.md): Returns the entities of the model for a specified configuration.
- [setEntities:forConfiguration:](nsmanagedobjectmodel/setentities%28__forconfigurationname_%29.md): Associates the specified entities with the model using the given configuration name.

### Manipulating fetch request templates

- [fetchRequestTemplatesByName](nsmanagedobjectmodel/fetchrequesttemplatesbyname.md): A dictionary of the receiver’s fetch request templates, keyed by name.
- [fetchRequestTemplateForName:](nsmanagedobjectmodel/fetchrequesttemplate%28forname_%29.md): Returns the fetch request with a specified name.
- [fetchRequestFromTemplateWithName:substitutionVariables:](nsmanagedobjectmodel/fetchrequestfromtemplate%28withname_substitutionvariables_%29.md): Returns a copy of the fetch request template with the variables substituted by values from the substitutions dictionary.
- [setFetchRequestTemplate:forName:](nsmanagedobjectmodel/setfetchrequesttemplate%28__forname_%29.md): Associates the specified fetch request with the receiver using the given name.

### Handling localization

- [localizationDictionary](nsmanagedobjectmodel/localizationdictionary.md): The localization dictionary of the model.

### Versioning and migrating entities

- [versionChecksum](nsmanagedobjectmodel/versionchecksum.md): The Base64-encoded 128-bit model version hash.
- [versionIdentifiers](nsmanagedobjectmodel/versionidentifiers.md): The set of developer-defined version identifiers for the object model.
- [entityVersionHashesByName](nsmanagedobjectmodel/entityversionhashesbyname.md): The dictionary of the model’s entity names and their corresponding version hashes.
- [isConfiguration:compatibleWithStoreMetadata:](nsmanagedobjectmodel/isconfiguration%28withname_compatiblewithstoremetadata_%29.md): Returns a Boolean value that indicates whether a given configuration in the model is compatible with given metadata from a persistent store.

### Working with indexes

- [NSFetchIndexElementType](nsfetchindexelementtype.md): Defines the possible types of index elements.
- [NSFetchIndexDescription](nsfetchindexdescription.md): The description of the index.
- [NSFetchIndexElementDescription](nsfetchindexelementdescription.md): Description of an Index Element

### Type Methods

- [checksumsForVersionedModelAtURL:error:](nsmanagedobjectmodel/checksumsforversionedmodelaturl_error_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Object Modeling

- [NSEntityDescription](nsentitydescription.md): A description of a Core Data entity.
- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSDerivedAttributeDescription](nsderivedattributedescription.md): A description of an attribute that derives its value by performing a calculation on a related attribute.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.
