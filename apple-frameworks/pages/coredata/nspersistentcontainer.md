> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer](https://developer.apple.com/documentation/coredata/nspersistentcontainer)

# NSPersistentContainer (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A container that encapsulates the Core Data stack in your app.

## Declaration

```swift
class NSPersistentContainer
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

NSPersistentContainer simplifies the creation and management of the Core Data stack by handling the creation of the managed object model ([NSManagedObjectModel](nsmanagedobjectmodel.md)), persistent store coordinator ([NSPersistentStoreCoordinator](nspersistentstorecoordinator.md)), and the managed object context ([NSManagedObjectContext](nsmanagedobjectcontext.md)).

## Topics

### Creating a Container

- [init(name:)](nspersistentcontainer/init%28name_%29.md): Creates a container with the specified name.
- [init(name:managedObjectModel:)](nspersistentcontainer/init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.

### Getting the Container’s Configuration

- [managedObjectModel](nspersistentcontainer/managedobjectmodel.md): The container’s managed object model.
- [name](nspersistentcontainer/name.md): The container’s name.
- [persistentStoreCoordinator](nspersistentcontainer/persistentstorecoordinator.md): The container’s persistent store coordinator.

### Accessing the Default Directory

- [defaultDirectoryURL](nspersistentcontainer/defaultdirectoryurl-swift.type.property.md): The location of the directory that contains the persistent stores.
- [defaultDirectoryURL()](nspersistentcontainer/defaultdirectoryurl%28%29.md): Returns the location of the directory that contains the persistent stores.

### Managing Persistent Stores

- [persistentStoreDescriptions](nspersistentcontainer/persistentstoredescriptions.md): The descriptions of the container’s persistent stores.
- [loadPersistentStores(completionHandler:)](nspersistentcontainer/loadpersistentstores%28completionhandler_%29.md): Loads the persistent stores.

### Acquiring Contexts

- [newBackgroundContext()](nspersistentcontainer/newbackgroundcontext%28%29.md): Returns a new managed object context that executes on a private queue.
- [viewContext](nspersistentcontainer/viewcontext.md): The main queue’s managed object context.

### Performing Background Tasks

- [performBackgroundTask(\_:)](nspersistentcontainer/performbackgroundtask%28__%29-39sch.md): Executes a closure on a private queue using an ephemeral managed object context.
- [performBackgroundTask(\_:)](nspersistentcontainer/performbackgroundtask%28__%29-25nok.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPersistentContainer (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A container that encapsulates the Core Data stack in your app.

## Declaration

```objectivec
@interface NSPersistentContainer : NSObject
```

## Mentioned In

- [Setting up a Core Data stack manually](setting-up-a-core-data-stack-manually.md)
- [Setting Up Core Data with CloudKit](setting-up-core-data-with-cloudkit.md)
- [Setting up a Core Data stack](setting-up-a-core-data-stack.md)
- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

NSPersistentContainer simplifies the creation and management of the Core Data stack by handling the creation of the managed object model ([NSManagedObjectModel](nsmanagedobjectmodel.md)), persistent store coordinator ([NSPersistentStoreCoordinator](nspersistentstorecoordinator.md)), and the managed object context ([NSManagedObjectContext](nsmanagedobjectcontext.md)).

## Topics

### Creating a Container

- [initWithName:](nspersistentcontainer/init%28name_%29.md): Creates a container with the specified name.
- [initWithName:managedObjectModel:](nspersistentcontainer/init%28name_managedobjectmodel_%29.md): Create a container with the specified name and managed object model.
- [persistentContainerWithName:](nspersistentcontainer/persistentcontainerwithname_.md): Initializes a new persistent container using the provided name for the container.
- [persistentContainerWithName:managedObjectModel:](nspersistentcontainer/persistentcontainerwithname_managedobjectmodel_.md): Initializes a new persistent container using the provided name and managed object model.

### Getting the Container’s Configuration

- [managedObjectModel](nspersistentcontainer/managedobjectmodel.md): The container’s managed object model.
- [name](nspersistentcontainer/name.md): The container’s name.
- [persistentStoreCoordinator](nspersistentcontainer/persistentstorecoordinator.md): The container’s persistent store coordinator.

### Accessing the Default Directory

- [defaultDirectoryURL](nspersistentcontainer/defaultdirectoryurl%28%29.md): Returns the location of the directory that contains the persistent stores.

### Managing Persistent Stores

- [persistentStoreDescriptions](nspersistentcontainer/persistentstoredescriptions.md): The descriptions of the container’s persistent stores.
- [loadPersistentStoresWithCompletionHandler:](nspersistentcontainer/loadpersistentstores%28completionhandler_%29.md): Loads the persistent stores.

### Acquiring Contexts

- [newBackgroundContext](nspersistentcontainer/newbackgroundcontext%28%29.md): Returns a new managed object context that executes on a private queue.
- [viewContext](nspersistentcontainer/viewcontext.md): The main queue’s managed object context.

### Performing Background Tasks

- [performBackgroundTask:](nspersistentcontainer/performbackgroundtask%28__%29-39sch.md): Executes a closure on a private queue using an ephemeral managed object context.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSPersistentCloudKitContainer](nspersistentcloudkitcontainer.md)
