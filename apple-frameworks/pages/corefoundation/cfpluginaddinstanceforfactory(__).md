> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginaddinstanceforfactory(_:)](https://developer.apple.com/documentation/corefoundation/cfpluginaddinstanceforfactory(_:))

# CFPlugInAddInstanceForFactory(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a new instance of a type with `CFPlugIn`.

## Declaration

```swift
func CFPlugInAddInstanceForFactory(_ factoryID: CFUUID!)
```

## Parameters

- `factoryID`: The `CFUUID` object representing the plug-in factory.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInFindFactoriesForPlugInType(\_:)](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn(\_:\_:)](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle(\_:)](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID()](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand(\_:)](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory(\_:)](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand(\_:\_:)](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

# CFPlugInAddInstanceForFactory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a new instance of a type with `CFPlugIn`.

## Declaration

```objectivec
extern void CFPlugInAddInstanceForFactory(CFUUIDRef factoryID);
```

## Parameters

- `factoryID`: The `CFUUID` object representing the plug-in factory.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInFindFactoriesForPlugInType](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).
