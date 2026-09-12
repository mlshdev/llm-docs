> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/core-data-model](https://developer.apple.com/documentation/coredata/core-data-model)

# Core Data model

**Interface languages:** Swift, Objective-C

**Framework:** Core Data  
**Kind:** API Collection

Describe your app’s object structure.

<a id="overview"></a>

## Overview

In most cases, you describe your app’s data model using Xcode’s data model editor. [NSManagedObjectModel](nsmanagedobjectmodel.md) represents the `.xcdatamodeld` file in your project’s source list. This is where you define entities that you use to generate [NSManagedObject](nsmanagedobject.md) subclasses for Core Data to manage.

The entities you create are [NSEntityDescription](nsentitydescription.md) instances. Entities’ properties are subclasses of [NSPropertyDescription](nspropertydescription.md), namely [NSAttributeDescription](nsattributedescription.md) for attributes, [NSRelationshipDescription](nsrelationshipdescription.md) for relationships, and [NSFetchedPropertyDescription](nsfetchedpropertydescription.md) for fetched properties.

The various attribute types are enumerated in [NSAttributeType](nsattributetype.md).

## Topics

### Objects and entities

- [NSManagedObject](nsmanagedobject.md): The base class that all Core Data model objects inherit from.
- [NSEntityDescription](nsentitydescription.md): A description of a Core Data entity.

### Standard attributes

- [NSPropertyDescription](nspropertydescription.md): A description of a single property belonging to an entity.
- [NSAttributeDescription](nsattributedescription.md): A description of a single attribute belonging to an entity.
- [NSAttributeType](nsattributetype.md): The types of attribute that Core Data supports.
- [NSRelationshipDescription](nsrelationshipdescription.md): A description of a relationship between two entities.

### Computed attributes

- [NSCompositeAttributeDescription](nscompositeattributedescription.md): A description of an attribute that derives its value by composing other attributes.
- [NSDerivedAttributeDescription](nsderivedattributedescription.md): A description of an attribute that derives its value by performing a calculation on a related attribute.

### Fetched properties

- [NSFetchedPropertyDescription](nsfetchedpropertydescription.md): A description object used to define which properties are fetched from Core Data.

## See Also

### Data modeling

- [Modeling data](modeling-data.md): Configure the data model file to contain your app’s object graph.
