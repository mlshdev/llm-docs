> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugin](https://developer.apple.com/documentation/corefoundation/cfplugin)

# CFPlugIn (Swift)

**Framework:** Core Foundation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
class CFPlugIn
```

<a id="Overview"></a>

## Overview

`CFPlugIn` provides a standard architecture for application extensions. With `CFPlugIn`, you can design your application as a host framework that uses a set of executable code modules called plug-ins to provide certain well-defined areas of functionality. This approach allows third-party developers to add features to your application without requiring access to your source code. You can also bundle together plug-ins for multiple platforms and let `CFPlugIn` transparently load the appropriate plug-in at runtime. You can use `CFPlugIn` to add plug-in capability to, or write a plug-in for, your application.

## Topics

### Creating Plug-ins

- [CFPlugInCreate(\_:\_:)](cfplugincreate%28____%29.md): Creates a CFPlugIn given its URL.
- [CFPlugInInstanceCreate(\_:\_:\_:)](cfplugininstancecreate%28______%29.md): Creates a `CFPlugIn` instance of a given type using a given factory.

### Registration

- [CFPlugInRegisterFactoryFunction(\_:\_:)](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName(\_:\_:\_:)](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInRegisterPlugInType(\_:\_:)](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterFactory(\_:)](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType(\_:\_:)](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory(\_:)](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType(\_:)](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn(\_:\_:)](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle(\_:)](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID()](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand(\_:)](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory(\_:)](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand(\_:\_:)](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInFactoryFunction](cfpluginfactoryfunction.md): Callback function that a plug-in author must implement to create a plug-in instance.
- [CFPlugInUnloadFunction](cfpluginunloadfunction.md): Callback function that is called, if present, just before a plug-in’s code is unloaded.

### Constants

- [Information Property List Keys](cfplugin-information-property-list-keys.md): A plug-in’s information property list can contain these keys used for registering types, factories, and interfaces.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Opaque Types

- [CFAllocator](cfallocator.md)
- [CFArray](cfarray.md)
- [CFAttributedString](cfattributedstring.md)
- [CFBag](cfbag.md)
- [CFBinaryHeap](cfbinaryheap.md)
- [CFBitVector](cfbitvector.md)
- [CFBoolean](cfboolean.md)
- [CFBundle](cfbundle.md)
- [CFCalendar](cfcalendar.md)
- [CFCharacterSet](cfcharacterset.md)
- [CFData](cfdata.md)
- [CFDate](cfdate.md)
- [CFDateFormatter](cfdateformatter.md)
- [CFDictionary](cfdictionary.md)
- [CFError](cferror.md)

# CFPlugInRef (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct __CFBundle * CFPlugInRef;
```

<a id="Overview"></a>

## Overview

`CFPlugIn` provides a standard architecture for application extensions. With `CFPlugIn`, you can design your application as a host framework that uses a set of executable code modules called plug-ins to provide certain well-defined areas of functionality. This approach allows third-party developers to add features to your application without requiring access to your source code. You can also bundle together plug-ins for multiple platforms and let `CFPlugIn` transparently load the appropriate plug-in at runtime. You can use `CFPlugIn` to add plug-in capability to, or write a plug-in for, your application.

## Topics

### Creating Plug-ins

- [CFPlugInCreate](cfplugincreate%28____%29.md): Creates a CFPlugIn given its URL.
- [CFPlugInInstanceCreate](cfplugininstancecreate%28______%29.md): Creates a `CFPlugIn` instance of a given type using a given factory.

### Registration

- [CFPlugInRegisterFactoryFunction](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInRegisterPlugInType](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterFactory](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

### Callbacks

- [CFPlugInDynamicRegisterFunction](cfplugindynamicregisterfunction.md): A callback which provides a plug-in the opportunity to dynamically register its types with a host.
- [CFPlugInFactoryFunction](cfpluginfactoryfunction.md): Callback function that a plug-in author must implement to create a plug-in instance.
- [CFPlugInUnloadFunction](cfpluginunloadfunction.md): Callback function that is called, if present, just before a plug-in’s code is unloaded.

### Constants

- [Information Property List Keys](cfplugin-information-property-list-keys.md): A plug-in’s information property list can contain these keys used for registering types, factories, and interfaces.

## See Also

### Opaque Types

- [CFAllocatorRef](cfallocator.md)
- [CFArrayRef](cfarray.md)
- [CFAttributedStringRef](cfattributedstring.md)
- [CFBagRef](cfbag.md)
- [CFBinaryHeapRef](cfbinaryheap.md)
- [CFBitVectorRef](cfbitvector.md)
- [CFBooleanRef](cfboolean.md)
- [CFBundleRef](cfbundle.md)
- [CFCalendarRef](cfcalendar.md)
- [CFCharacterSetRef](cfcharacterset.md)
- [CFDataRef](cfdata.md)
- [CFDateRef](cfdate.md)
- [CFDateFormatterRef](cfdateformatter.md)
- [CFDictionaryRef](cfdictionary.md)
- [CFErrorRef](cferror.md)
