> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginremoveinstanceforfactory(_:)](https://developer.apple.com/documentation/corefoundation/cfpluginremoveinstanceforfactory(_:))

# CFPlugInRemoveInstanceForFactory(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unregisters an instance of a type with `CFPlugIn`.

## Declaration

```swift
func CFPlugInRemoveInstanceForFactory(_ factoryID: CFUUID!)
```

## Parameters

- `factoryID`: The `CFUUID` object representing the plug-in factory.

<a id="Discussion"></a>

## Discussion

If the instance counts of every factory in a plug-in are zero, the plug-in can be unloaded.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory(\_:)](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType(\_:)](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn(\_:\_:)](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle(\_:)](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID()](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand(\_:)](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInSetLoadOnDemand(\_:\_:)](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

# CFPlugInRemoveInstanceForFactory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unregisters an instance of a type with `CFPlugIn`.

## Declaration

```objectivec
extern void CFPlugInRemoveInstanceForFactory(CFUUIDRef factoryID);
```

## Parameters

- `factoryID`: The `CFUUID` object representing the plug-in factory.

<a id="Discussion"></a>

## Discussion

If the instance counts of every factory in a plug-in are zero, the plug-in can be unloaded.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInSetLoadOnDemand](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).
