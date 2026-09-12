> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject](https://developer.apple.com/documentation/coredata/nsmanagedobject)

# NSManagedObject (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The base class that all Core Data model objects inherit from.

## Declaration

```swift
nonisolated class NSManagedObject
```

## Mentioned In

- [Syncing a Core Data Store with CloudKit](syncing-a-core-data-store-with-cloudkit.md)
- [Generating code](generating-code.md)
- [Modeling data](modeling-data.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

A managed object has an associated entity description ([NSEntityDescription](nsentitydescription.md)) that provides metadata about the object, including the name of the entity that the object represents and the names of its attributes and relationships. A managed object also has an associated managed object context that tracks changes to the object graph.

You can’t use instances of direct subclasses of [NSObject](../objectivec/nsobject-swift.class.md), or any other class that doesn’t inherit from [NSManagedObject](nsmanagedobject.md), with a managed object context. You may create custom subclasses of [NSManagedObject](nsmanagedobject.md), although this isn’t always necessary. If you don’t need custom logic, you can create a complete object graph with [NSManagedObject](nsmanagedobject.md) instances.

If you instantiate a managed object directly, you must call the designated initializer [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md).

<a id="Data-Storage"></a>

### Data Storage

In some respects, an `NSManagedObject` acts like a dictionary—it’s a generic container object that provides efficient storage for the properties defined by its associated `NSEntityDescription` instance. `NSManagedObject` supports a range of common types for attribute values, including string, date, and number (see [NSAttributeDescription](nsattributedescription.md) for full details). Therefore, typically you don’t need to define instance variables in subclasses. Sometimes, however, you want to use types that aren’t supported directly, such as colors and C structures. For example, in a graphics application you might want to define a Rectangle entity that has color and bounds attributes that are an instance of `NSColor` and an `NSRect` struct, respectively. For some types you can use a transformable attribute, for others this may require you to create a subclass of `NSManagedObject`.

> **Note**

> The default value for [automaticallyNotifiesObservers(forKey:)](../objectivec/nsobject-swift.class/automaticallynotifiesobservers%28forkey_%29.md) is `false` for managed properties of a `NSManagedObject`, and `true` for unmanaged properties.

<a id="Faulting"></a>

### Faulting

Managed objects typically represent data held in a persistent store. In some situations a managed object may be a *fault*—an object whose property values haven’t yet been loaded from the external data store. When you access persistent property values, the fault “fires” and the data is retrieved from the store automatically. This can be a comparatively expensive process (potentially requiring a round trip to the persistent store), and you may wish to avoid unnecessarily firing a fault. See [Faulting and Uniquing](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/FaultingandUniquing.html#//apple_ref/doc/uid/TP40001075-CH18) for more details on faults.

You can safely invoke the following methods and properties on a fault without causing it to fire: [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md), [hash](../objectivec/nsobjectprotocol/hash.md), [superclass](../objectivec/nsobjectprotocol/superclass.md), [class](../objectivec/nsobject-c.protocol/class.md), [self()](../objectivec/nsobjectprotocol/self%28%29.md), [isProxy()](../objectivec/nsobjectprotocol/isproxy%28%29.md), [isKind(of:)](../objectivec/nsobjectprotocol/iskind%28of_%29.md), [isMember(of:)](../objectivec/nsobjectprotocol/ismember%28of_%29.md), [conforms(to:)](../objectivec/nsobject-swift.class/conforms%28to_%29.md), [responds(to:)](../objectivec/nsobjectprotocol/responds%28to_%29.md), [description](../objectivec/nsobjectprotocol/description.md), [managedObjectContext](nsmanagedobject/managedobjectcontext.md), [entity](nsmanagedobject/entity-swift.property.md), [objectID](nsmanagedobject/objectid.md), [isInserted](nsmanagedobject/isinserted.md), [isUpdated](nsmanagedobject/isupdated.md), [isDeleted](nsmanagedobject/isdeleted.md), [faultingState](nsmanagedobject/faultingstate.md), and [isFault](nsmanagedobject/isfault.md). Because `isEqual` and `hash` don’t cause a fault to fire, managed objects can typically be placed in collections without firing a fault. Note, however, that invoking key-value coding methods on the collection object might in turn result in an invocation of `valueForKey:` on a managed object, which would fire the fault.

Although the `description` property doesn’t cause a fault to fire, if you implement a custom `description` that accesses the object’s persistent properties, this does cause a fault to fire. You are strongly discouraged from overriding `description` in this way.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In combination with the entity description in the managed object model, `NSManagedObject` provides a rich set of default behaviors including support for arbitrary properties and value validation. If you decide to subclass `NSManagedObject` to implement custom features, make sure you don’t disrupt Core Data’s behavior.

<a id="Methods-and-Properties-You-Must-Not-Override"></a>

#### Methods and Properties You Must Not Override

`NSManagedObject` itself customizes many features of `NSObject` so that managed objects can be properly integrated into the Core Data infrastructure. Core Data relies on the `NSManagedObject` implementation of the following methods and properties, which you therefore absolutely must not override: [primitiveValue(forKey:)](nsmanagedobject/primitivevalue%28forkey_%29.md), [setPrimitiveValue(\_:forKey:)](nsmanagedobject/setprimitivevalue%28__forkey_%29.md), [isEqual(\_:)](../objectivec/nsobjectprotocol/isequal%28__%29.md), [hash](../objectivec/nsobjectprotocol/hash.md), [superclass](../objectivec/nsobjectprotocol/superclass.md), [class](../objectivec/nsobject-c.protocol/class.md), [self()](../objectivec/nsobjectprotocol/self%28%29.md), [isProxy()](../objectivec/nsobjectprotocol/isproxy%28%29.md), [isKind(of:)](../objectivec/nsobjectprotocol/iskind%28of_%29.md), [isMember(of:)](../objectivec/nsobjectprotocol/ismember%28of_%29.md), [conforms(to:)](../objectivec/nsobjectprotocol/conforms%28to_%29.md), [responds(to:)](../objectivec/nsobjectprotocol/responds%28to_%29.md), [managedObjectContext](nsmanagedobject/managedobjectcontext.md), [entity](nsmanagedobject/entity-swift.property.md), [objectID](nsmanagedobject/objectid.md), [isInserted](nsmanagedobject/isinserted.md), [isUpdated](nsmanagedobject/isupdated.md), [isDeleted](nsmanagedobject/isdeleted.md), and [isFault](nsmanagedobject/isfault.md), [alloc](../objectivec/nsobject-swift.class/alloc.md), [allocWithZone:](../objectivec/nsobject-swift.class/allocwithzone_.md), [new](../objectivec/nsobject-swift.class/new.md),  [instancesRespond(to:)](../objectivec/nsobject-swift.class/instancesrespond%28to_%29.md), [instanceMethod(for:)](../objectivec/nsobject-swift.class/instancemethod%28for_%29.md), [method(for:)](../objectivec/nsobject-swift.class/method%28for_%29.md), [methodSignatureForSelector:](../objectivec/nsobject-swift.class/methodsignatureforselector_.md), [instanceMethodSignatureForSelector:](../objectivec/nsobject-swift.class/instancemethodsignatureforselector_.md), or [isSubclass(of:)](../objectivec/nsobject-swift.class/issubclass%28of_%29.md).

<a id="Methods-and-Properties-You-Shouldnt-Override"></a>

#### Methods and Properties You Shouldn’t Override

As with any class, you are strongly discouraged from overriding the key-value observing methods such as [willChangeValue(forKey:)](../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) and [didChangeValue(forKey:withSetMutation:using:)](../objectivec/nsobject-swift.class/didchangevalue%28forkey_withsetmutation_using_%29.md). Avoid overriding `description`—if this method fires a fault during a debugging operation, the results may be unpredictable. Also avoid overriding [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md), or `dealloc`. Changing values in the [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md) method won’t be noticed by the context, and if you aren’t careful, those changes may not be saved. Perform most initialization customization in one of the `awake…` methods. If you do override [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md), make sure you adhere to the requirements set out in the method description. See [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md).

Don’t override `dealloc` because [didTurnIntoFault()](nsmanagedobject/didturnintofault%28%29.md) is usually a better time to clear values—a managed object may not be reclaimed for some time after it has been turned into a fault. Core Data doesn’t guarantee that `dealloc` will be called in all scenarios (such as when the application quits). Therefore, don’t include required side effects (like saving or changes to the file system, user preferences, and so on) in these methods.

In summary, for [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md) and `dealloc`, Core Data reserves exclusive control over the life cycle of the managed object (that is, raw memory management). This is so that the framework can provide features such as uniquing and by consequence, relationship maintenance, as well as much better performance than would be possible otherwise.

<a id="Additional-Override-Considerations"></a>

#### Additional Override Considerations

The following methods are intended to be fine grained and aren’t suitable for large-scale operations. Don’t fetch or save in these methods. In particular, they shouldn’t have side effects on the managed object context.

- [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md)
- [didTurnIntoFault()](nsmanagedobject/didturnintofault%28%29.md)
- [willTurnIntoFault()](nsmanagedobject/willturnintofault%28%29.md)
- `dealloc`

In addition, if you plan to override `awakeFromInsert`, `awakeFromFetch`, and validation methods, first invoke `super.method()`, the superclass’s implementation. Don’t modify relationships in [awakeFromFetch()](nsmanagedobject/awakefromfetch%28%29.md)—see the method description for details.

<a id="Custom-Accessor-Methods"></a>

#### Custom Accessor Methods

Typically, you don’t need to write custom accessor methods for properties that are defined in the entity of a managed object’s corresponding managed object model. If you need to do so, follow the implementation patterns described in Managed Object Accessor Methods in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

Core Data automatically generates accessor methods (and primitive accessor methods) for you. For attributes and to-one relationships, Core Data generates the standard get and set accessor methods; for to-many relationships, Core Data generates the indexed accessor methods as described in [Achieving Basic Key-Value Coding Compliance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/AccessorConventions.html#//apple_ref/doc/uid/20002174) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i). You do however need to declare the accessor methods or use Objective-C properties to suppress compiler warnings. For a full discussion, see Managed Object Accessor Methods in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

<a id="Custom-Instance-Variables"></a>

#### Custom Instance Variables

By default, `NSManagedObject` stores its properties in an internal structure as objects, and in general Core Data is more efficient working with storage under its own control rather than by using custom instance variables.

`NSManagedObject` provides support for a range of common types for attribute values, including string, date, and number (see [NSAttributeDescription](nsattributedescription.md) for full details). If you want to use types that aren’t supported directly, like colors and C structures, you can either use transformable attributes or create a subclass of `NSManagedObject`.

Sometimes it’s convenient to represent variables as scalars—in drawing applications, for example, where variables represent dimensions and x and y coordinates and are frequently used in calculations. To represent attributes as scalars, you declare instance variables as you do in any other class. You also need to implement suitable accessor methods as described in Managed Object Accessor Methods.

If you define custom instance variables for example to store derived attributes or other transient properties, clean up these variables in [didTurnIntoFault()](nsmanagedobject/didturnintofault%28%29.md) rather than `dealloc`.

<a id="Validation-Methods"></a>

#### Validation Methods

`NSManagedObject` provides consistent hooks for validating property and inter-property values. You typically shouldn’t override [validateValue(\_:forKey:)](nsmanagedobject/validatevalue%28__forkey_%29.md). Instead implement methods of the form `validate<Key>:error:`, as defined by the NSKeyValueCoding protocol. If you want to validate inter-property values, you can override [validateForUpdate()](nsmanagedobject/validateforupdate%28%29.md) and/or related validation methods.

Don’t call `validateValue:forKey:error:` within custom property validation methods—if you do, you create an infinite loop when `validateValue:forKey:error:` is invoked at runtime. If you do implement custom validation methods, don’t call them directly. Instead, call `validateValue:forKey:error:` with the appropriate key. This ensures that any constraints defined in the managed object model are applied.

If you implement custom inter-property validation methods like [validateForUpdate()](nsmanagedobject/validateforupdate%28%29.md), call the superclass’s implementation first. This ensures that individual property validation methods are also invoked. If there are multiple validation failures in one operation, collect them in an array and add the array—using the key `NSDetailedErrorsKey`—to the userInfo dictionary in the `NSError` object you return. For an example, see Managed Object Validation.

## Topics

### Creating a Managed Object

- [init(entity:insertInto:)](nsmanagedobject/init%28entity_insertinto_%29.md): Initializes a managed object from an entity description and inserts it into the specified managed object context.
- [init(context:)](nsmanagedobject/init%28context_%29.md): Initializes a managed object subclass and inserts it into the specified managed object context.

### Getting a Managed Object’s Identity

- [entity](nsmanagedobject/entity-swift.property.md): The entity description of the managed object.
- [objectID](nsmanagedobject/objectid.md): The object ID of the managed object.
- [entity()](nsmanagedobject/entity%28%29.md): Returns the entity description that is associated with this subclass.

### Getting State Information

- [managedObjectContext](nsmanagedobject/managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](nsmanagedobject/haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [isInserted](nsmanagedobject/isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [isUpdated](nsmanagedobject/isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [isDeleted](nsmanagedobject/isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [isFault](nsmanagedobject/isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](nsmanagedobject/faultingstate.md): The faulting state of the managed object.
- [hasFault(forRelationshipNamed:)](nsmanagedobject/hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](nsmanagedobject/haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](nsmanagedobject/contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch()](nsmanagedobject/awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
- [awakeFromInsert()](nsmanagedobject/awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awake(fromSnapshotEvents:)](nsmanagedobject/awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValues()](nsmanagedobject/changedvalues%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [changedValuesForCurrentEvent()](nsmanagedobject/changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValues(forKeys:)](nsmanagedobject/committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion()](nsmanagedobject/preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave()](nsmanagedobject/willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave()](nsmanagedobject/didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault()](nsmanagedobject/willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault()](nsmanagedobject/didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest()](nsmanagedobject/fetchrequest%28%29.md): Returns an initialized fetch request with the entity this subclass represents.

### Supporting Key-Value Coding

- [value(forKey:)](nsmanagedobject/value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue(\_:forKey:)](nsmanagedobject/setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValue(forKey:)](nsmanagedobject/primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue(\_:forKey:)](nsmanagedobject/setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDs(forRelationshipNamed:)](nsmanagedobject/objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

### Managing Data Validation

- [validateValue(\_:forKey:)](nsmanagedobject/validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForDelete()](nsmanagedobject/validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert()](nsmanagedobject/validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate()](nsmanagedobject/validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.

### Supporting Key-Value Observing

- [didAccessValue(forKey:)](nsmanagedobject/didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo()](nsmanagedobject/observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo(\_:)](nsmanagedobject/setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValue(forKey:)](nsmanagedobject/willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValue(forKey:)](nsmanagedobject/didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValue(forKey:withSetMutation:using:)](nsmanagedobject/didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValue(forKey:)](nsmanagedobject/willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValue(forKey:withSetMutation:using:)](nsmanagedobject/willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

### Reinitializing Values

- [NSSnapshotEventType](nssnapshoteventtype.md): Constants that specify the reason the managed object may need to reinitialize its values.

### Initializers

- [init(entity:insertIntoManagedObjectContext:)](nsmanagedobject/init%28entity_insertintomanagedobjectcontext_%29.md)

### Subscripts

- [subscript(\_:)](nsmanagedobject/subscript%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFetchRequestResult](nsfetchrequestresult.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ObservableObject](../combine/observableobject.md)

## See Also

### Objects and entities

- [NSEntityDescription](nsentitydescription.md): A description of a Core Data entity.

# NSManagedObject (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The base class that all Core Data model objects inherit from.

## Declaration

```objectivec
@interface NSManagedObject : NSObject
```

## Mentioned In

- [Syncing a Core Data Store with CloudKit](syncing-a-core-data-store-with-cloudkit.md)
- [Generating code](generating-code.md)
- [Modeling data](modeling-data.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

A managed object has an associated entity description ([NSEntityDescription](nsentitydescription.md)) that provides metadata about the object, including the name of the entity that the object represents and the names of its attributes and relationships. A managed object also has an associated managed object context that tracks changes to the object graph.

You can’t use instances of direct subclasses of [NSObject](../objectivec/nsobject-swift.class.md), or any other class that doesn’t inherit from [NSManagedObject](nsmanagedobject.md), with a managed object context. You may create custom subclasses of [NSManagedObject](nsmanagedobject.md), although this isn’t always necessary. If you don’t need custom logic, you can create a complete object graph with [NSManagedObject](nsmanagedobject.md) instances.

If you instantiate a managed object directly, you must call the designated initializer [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md).

<a id="Data-Storage"></a>

### Data Storage

In some respects, an `NSManagedObject` acts like a dictionary—it’s a generic container object that provides efficient storage for the properties defined by its associated `NSEntityDescription` instance. `NSManagedObject` supports a range of common types for attribute values, including string, date, and number (see [NSAttributeDescription](nsattributedescription.md) for full details). Therefore, typically you don’t need to define instance variables in subclasses. Sometimes, however, you want to use types that aren’t supported directly, such as colors and C structures. For example, in a graphics application you might want to define a Rectangle entity that has color and bounds attributes that are an instance of `NSColor` and an `NSRect` struct, respectively. For some types you can use a transformable attribute, for others this may require you to create a subclass of `NSManagedObject`.

> **Note**

> The default value for [automaticallyNotifiesObserversForKey:](../objectivec/nsobject-swift.class/automaticallynotifiesobservers%28forkey_%29.md) is `false` for managed properties of a `NSManagedObject`, and `true` for unmanaged properties.

<a id="Faulting"></a>

### Faulting

Managed objects typically represent data held in a persistent store. In some situations a managed object may be a *fault*—an object whose property values haven’t yet been loaded from the external data store. When you access persistent property values, the fault “fires” and the data is retrieved from the store automatically. This can be a comparatively expensive process (potentially requiring a round trip to the persistent store), and you may wish to avoid unnecessarily firing a fault. See [Faulting and Uniquing](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/FaultingandUniquing.html#//apple_ref/doc/uid/TP40001075-CH18) for more details on faults.

You can safely invoke the following methods and properties on a fault without causing it to fire: [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md), [hash](../objectivec/nsobjectprotocol/hash.md), [superclass](../objectivec/nsobjectprotocol/superclass.md), [class](../objectivec/nsobject-c.protocol/class.md), [self](../objectivec/nsobjectprotocol/self%28%29.md), [isProxy](../objectivec/nsobjectprotocol/isproxy%28%29.md), [isKindOfClass:](../objectivec/nsobjectprotocol/iskind%28of_%29.md), [isMemberOfClass:](../objectivec/nsobjectprotocol/ismember%28of_%29.md), [conformsToProtocol:](../objectivec/nsobject-swift.class/conforms%28to_%29.md), [respondsToSelector:](../objectivec/nsobjectprotocol/responds%28to_%29.md), [description](../objectivec/nsobjectprotocol/description.md), [managedObjectContext](nsmanagedobject/managedobjectcontext.md), [entity](nsmanagedobject/entity-swift.property.md), [objectID](nsmanagedobject/objectid.md), [inserted](nsmanagedobject/isinserted.md), [updated](nsmanagedobject/isupdated.md), [deleted](nsmanagedobject/isdeleted.md), [faultingState](nsmanagedobject/faultingstate.md), and [fault](nsmanagedobject/isfault.md). Because `isEqual` and `hash` don’t cause a fault to fire, managed objects can typically be placed in collections without firing a fault. Note, however, that invoking key-value coding methods on the collection object might in turn result in an invocation of `valueForKey:` on a managed object, which would fire the fault.

Although the `description` property doesn’t cause a fault to fire, if you implement a custom `description` that accesses the object’s persistent properties, this does cause a fault to fire. You are strongly discouraged from overriding `description` in this way.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In combination with the entity description in the managed object model, `NSManagedObject` provides a rich set of default behaviors including support for arbitrary properties and value validation. If you decide to subclass `NSManagedObject` to implement custom features, make sure you don’t disrupt Core Data’s behavior.

<a id="Methods-and-Properties-You-Must-Not-Override"></a>

#### Methods and Properties You Must Not Override

`NSManagedObject` itself customizes many features of `NSObject` so that managed objects can be properly integrated into the Core Data infrastructure. Core Data relies on the `NSManagedObject` implementation of the following methods and properties, which you therefore absolutely must not override: [primitiveValueForKey:](nsmanagedobject/primitivevalue%28forkey_%29.md), [setPrimitiveValue:forKey:](nsmanagedobject/setprimitivevalue%28__forkey_%29.md), [isEqual:](../objectivec/nsobjectprotocol/isequal%28__%29.md), [hash](../objectivec/nsobjectprotocol/hash.md), [superclass](../objectivec/nsobjectprotocol/superclass.md), [class](../objectivec/nsobject-c.protocol/class.md), [self](../objectivec/nsobjectprotocol/self%28%29.md), [isProxy](../objectivec/nsobjectprotocol/isproxy%28%29.md), [isKindOfClass:](../objectivec/nsobjectprotocol/iskind%28of_%29.md), [isMemberOfClass:](../objectivec/nsobjectprotocol/ismember%28of_%29.md), [conformsToProtocol:](../objectivec/nsobjectprotocol/conforms%28to_%29.md), [respondsToSelector:](../objectivec/nsobjectprotocol/responds%28to_%29.md), [managedObjectContext](nsmanagedobject/managedobjectcontext.md), [entity](nsmanagedobject/entity-swift.property.md), [objectID](nsmanagedobject/objectid.md), [inserted](nsmanagedobject/isinserted.md), [updated](nsmanagedobject/isupdated.md), [deleted](nsmanagedobject/isdeleted.md), and [fault](nsmanagedobject/isfault.md), [alloc](../objectivec/nsobject-swift.class/alloc.md), [allocWithZone:](../objectivec/nsobject-swift.class/allocwithzone_.md), [new](../objectivec/nsobject-swift.class/new.md),  [instancesRespondToSelector:](../objectivec/nsobject-swift.class/instancesrespond%28to_%29.md), [instanceMethodForSelector:](../objectivec/nsobject-swift.class/instancemethod%28for_%29.md), [methodForSelector:](../objectivec/nsobject-swift.class/method%28for_%29.md), [methodSignatureForSelector:](../objectivec/nsobject-swift.class/methodsignatureforselector_.md), [instanceMethodSignatureForSelector:](../objectivec/nsobject-swift.class/instancemethodsignatureforselector_.md), or [isSubclassOfClass:](../objectivec/nsobject-swift.class/issubclass%28of_%29.md).

<a id="Methods-and-Properties-You-Shouldnt-Override"></a>

#### Methods and Properties You Shouldn’t Override

As with any class, you are strongly discouraged from overriding the key-value observing methods such as [willChangeValueForKey:](../objectivec/nsobject-swift.class/willchangevalue%28forkey_%29.md) and [didChangeValueForKey:withSetMutation:usingObjects:](../objectivec/nsobject-swift.class/didchangevalue%28forkey_withsetmutation_using_%29.md). Avoid overriding `description`—if this method fires a fault during a debugging operation, the results may be unpredictable. Also avoid overriding [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md), or `dealloc`. Changing values in the [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md) method won’t be noticed by the context, and if you aren’t careful, those changes may not be saved. Perform most initialization customization in one of the `awake…` methods. If you do override [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md), make sure you adhere to the requirements set out in the method description. See [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md).

Don’t override `dealloc` because [didTurnIntoFault](nsmanagedobject/didturnintofault%28%29.md) is usually a better time to clear values—a managed object may not be reclaimed for some time after it has been turned into a fault. Core Data doesn’t guarantee that `dealloc` will be called in all scenarios (such as when the application quits). Therefore, don’t include required side effects (like saving or changes to the file system, user preferences, and so on) in these methods.

In summary, for [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md) and `dealloc`, Core Data reserves exclusive control over the life cycle of the managed object (that is, raw memory management). This is so that the framework can provide features such as uniquing and by consequence, relationship maintenance, as well as much better performance than would be possible otherwise.

<a id="Additional-Override-Considerations"></a>

#### Additional Override Considerations

The following methods are intended to be fine grained and aren’t suitable for large-scale operations. Don’t fetch or save in these methods. In particular, they shouldn’t have side effects on the managed object context.

- [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md)
- [didTurnIntoFault](nsmanagedobject/didturnintofault%28%29.md)
- [willTurnIntoFault](nsmanagedobject/willturnintofault%28%29.md)
- `dealloc`

In addition, if you plan to override `awakeFromInsert`, `awakeFromFetch`, and validation methods, first invoke `super.method()`, the superclass’s implementation. Don’t modify relationships in [awakeFromFetch](nsmanagedobject/awakefromfetch%28%29.md)—see the method description for details.

<a id="Custom-Accessor-Methods"></a>

#### Custom Accessor Methods

Typically, you don’t need to write custom accessor methods for properties that are defined in the entity of a managed object’s corresponding managed object model. If you need to do so, follow the implementation patterns described in Managed Object Accessor Methods in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

Core Data automatically generates accessor methods (and primitive accessor methods) for you. For attributes and to-one relationships, Core Data generates the standard get and set accessor methods; for to-many relationships, Core Data generates the indexed accessor methods as described in [Achieving Basic Key-Value Coding Compliance](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/AccessorConventions.html#//apple_ref/doc/uid/20002174) in [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i). You do however need to declare the accessor methods or use Objective-C properties to suppress compiler warnings. For a full discussion, see Managed Object Accessor Methods in [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075).

<a id="Custom-Instance-Variables"></a>

#### Custom Instance Variables

By default, `NSManagedObject` stores its properties in an internal structure as objects, and in general Core Data is more efficient working with storage under its own control rather than by using custom instance variables.

`NSManagedObject` provides support for a range of common types for attribute values, including string, date, and number (see [NSAttributeDescription](nsattributedescription.md) for full details). If you want to use types that aren’t supported directly, like colors and C structures, you can either use transformable attributes or create a subclass of `NSManagedObject`.

Sometimes it’s convenient to represent variables as scalars—in drawing applications, for example, where variables represent dimensions and x and y coordinates and are frequently used in calculations. To represent attributes as scalars, you declare instance variables as you do in any other class. You also need to implement suitable accessor methods as described in Managed Object Accessor Methods.

If you define custom instance variables for example to store derived attributes or other transient properties, clean up these variables in [didTurnIntoFault](nsmanagedobject/didturnintofault%28%29.md) rather than `dealloc`.

<a id="Validation-Methods"></a>

#### Validation Methods

`NSManagedObject` provides consistent hooks for validating property and inter-property values. You typically shouldn’t override [validateValue:forKey:error:](nsmanagedobject/validatevalue%28__forkey_%29.md). Instead implement methods of the form `validate<Key>:error:`, as defined by the NSKeyValueCoding protocol. If you want to validate inter-property values, you can override [validateForUpdate:](nsmanagedobject/validateforupdate%28%29.md) and/or related validation methods.

Don’t call `validateValue:forKey:error:` within custom property validation methods—if you do, you create an infinite loop when `validateValue:forKey:error:` is invoked at runtime. If you do implement custom validation methods, don’t call them directly. Instead, call `validateValue:forKey:error:` with the appropriate key. This ensures that any constraints defined in the managed object model are applied.

If you implement custom inter-property validation methods like [validateForUpdate:](nsmanagedobject/validateforupdate%28%29.md), call the superclass’s implementation first. This ensures that individual property validation methods are also invoked. If there are multiple validation failures in one operation, collect them in an array and add the array—using the key `NSDetailedErrorsKey`—to the userInfo dictionary in the `NSError` object you return. For an example, see Managed Object Validation.

## Topics

### Creating a Managed Object

- [initWithEntity:insertIntoManagedObjectContext:](nsmanagedobject/init%28entity_insertinto_%29.md): Initializes a managed object from an entity description and inserts it into the specified managed object context.
- [initWithContext:](nsmanagedobject/init%28context_%29.md): Initializes a managed object subclass and inserts it into the specified managed object context.

### Getting a Managed Object’s Identity

- [entity](nsmanagedobject/entity-swift.property.md): The entity description of the managed object.
- [objectID](nsmanagedobject/objectid.md): The object ID of the managed object.
- [entity](nsmanagedobject/entity%28%29.md): Returns the entity description that is associated with this subclass.

### Getting State Information

- [managedObjectContext](nsmanagedobject/managedobjectcontext.md): The managed object context with which the managed object is registered.
- [hasChanges](nsmanagedobject/haschanges.md): A Boolean value that indicates whether the managed object has been inserted, has been deleted, or has unsaved changes.
- [inserted](nsmanagedobject/isinserted.md): A Boolean value that indicates whether the managed object has been inserted in a managed object context.
- [updated](nsmanagedobject/isupdated.md): A Boolean value that indicates whether the managed object has unsaved changes.
- [deleted](nsmanagedobject/isdeleted.md): A Boolean value that indicates whether the managed object will be deleted during the next save.
- [fault](nsmanagedobject/isfault.md): A Boolean value that indicates whether the managed object is a fault.
- [faultingState](nsmanagedobject/faultingstate.md): The faulting state of the managed object.
- [hasFaultForRelationshipNamed:](nsmanagedobject/hasfault%28forrelationshipnamed_%29.md): Returns a Boolean value that indicates whether the relationship for a given key is a fault.
- [hasPersistentChangedValues](nsmanagedobject/haspersistentchangedvalues.md): A Boolean value that indicates whether the managed object has persistent changes.

### Managing Change Events

- [contextShouldIgnoreUnmodeledPropertyChanges](nsmanagedobject/contextshouldignoreunmodeledpropertychanges.md): A Boolean value that indicates whether to mark instances of the class as having changes when an unmodeled property changes.
- [awakeFromFetch](nsmanagedobject/awakefromfetch%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when fufilling it from a fault.
- [awakeFromInsert](nsmanagedobject/awakefrominsert%28%29.md): Provides an opportunity to add code into the life cycle of the managed object when initially creating it.
- [awakeFromSnapshotEvents:](nsmanagedobject/awake%28fromsnapshotevents_%29.md): Provides an opportunity to add code into the life cycle of the managed object when fulfilling it from a snapshot.
- [changedValues](nsmanagedobject/changedvalues%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [changedValuesForCurrentEvent](nsmanagedobject/changedvaluesforcurrentevent%28%29.md): Returns a dictionary containing the keys and new values of persistent properties with changes since the last fetching or saving of the managed object.
- [committedValuesForKeys:](nsmanagedobject/committedvalues%28forkeys_%29.md): Returns a dictionary of the most recent fetched or saved values of the managed object for the properties of the specified keys.
- [prepareForDeletion](nsmanagedobject/preparefordeletion%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before deleting it.
- [willSave](nsmanagedobject/willsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before saving it.
- [didSave](nsmanagedobject/didsave%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after the managed object’s context completes a save operation.
- [willTurnIntoFault](nsmanagedobject/willturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object before converting it to a fault.
- [didTurnIntoFault](nsmanagedobject/didturnintofault%28%29.md): Provides an opportunity to add code into the life cycle of the managed object after converting it to a fault.
- [fetchRequest](nsmanagedobject/fetchrequest.md): Returns an initialized fetch request with the entity this subclass represents.

### Supporting Key-Value Coding

- [valueForKey:](nsmanagedobject/value%28forkey_%29.md): Returns the value for the property specified by `key`.
- [setValue:forKey:](nsmanagedobject/setvalue%28__forkey_%29.md): Sets the specified property of the managed object to the specified value.
- [primitiveValueForKey:](nsmanagedobject/primitivevalue%28forkey_%29.md): Returns the value for the specified property from the managed object’s private internal storage .
- [setPrimitiveValue:forKey:](nsmanagedobject/setprimitivevalue%28__forkey_%29.md): Sets the value of a given property in the managed object’s private internal storage.
- [objectIDsForRelationshipNamed:](nsmanagedobject/objectids%28forrelationshipnamed_%29.md): Returns the object IDs for all of the managed objects that are in the named relationship.

### Managing Data Validation

- [validateValue:forKey:error:](nsmanagedobject/validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForDelete:](nsmanagedobject/validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert:](nsmanagedobject/validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate:](nsmanagedobject/validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.

### Supporting Key-Value Observing

- [didAccessValueForKey:](nsmanagedobject/didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo](nsmanagedobject/observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo:](nsmanagedobject/setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValueForKey:](nsmanagedobject/willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValueForKey:](nsmanagedobject/didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValueForKey:withSetMutation:usingObjects:](nsmanagedobject/didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValueForKey:](nsmanagedobject/willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValueForKey:withSetMutation:usingObjects:](nsmanagedobject/willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

### Reinitializing Values

- [NSSnapshotEventType](nssnapshoteventtype.md): Constants that specify the reason the managed object may need to reinitialize its values.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFetchRequestResult](nsfetchrequestresult.md)

## See Also

### Objects and entities

- [NSEntityDescription](nsentitydescription.md): A description of a Core Data entity.
