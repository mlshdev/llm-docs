> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginsetloadondemand(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpluginsetloadondemand(_:_:))

# CFPlugInSetLoadOnDemand(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

## Declaration

```swift
func CFPlugInSetLoadOnDemand(_ plugIn: CFPlugIn!, _ flag: Bool)
```

## Parameters

- `plugIn`: The plug-in to be loaded on demand.
- `flag`: `true` to enable load on demand, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Plug-ins that do static registration are load on demand by default. Plug-ins that do dynamic registration are not load on demand by default.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory(\_:)](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType(\_:)](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn(\_:\_:)](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle(\_:)](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID()](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand(\_:)](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory(\_:)](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.

# CFPlugInSetLoadOnDemand (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

## Declaration

```objectivec
extern void CFPlugInSetLoadOnDemand(CFPlugInRef plugIn, Boolean flag);
```

## Parameters

- `plugIn`: The plug-in to be loaded on demand.
- `flag`: `true` to enable load on demand, `false` otherwise.

<a id="Discussion"></a>

## Discussion

Plug-ins that do static registration are load on demand by default. Plug-ins that do dynamic registration are not load on demand by default.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetBundle](cfplugingetbundle%28__%29.md): Returns a plug-in’s bundle.
- [CFPlugInGetTypeID](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
