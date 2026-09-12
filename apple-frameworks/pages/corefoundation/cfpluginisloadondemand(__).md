> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginisloadondemand(_:)](https://developer.apple.com/documentation/corefoundation/cfpluginisloadondemand(_:))

# CFPlugInIsLoadOnDemand(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether or not a plug-in is loaded on demand.

## Declaration

```swift
func CFPlugInIsLoadOnDemand(_ plugIn: CFPlugIn!) -> Bool
```

## Parameters

- `plugIn`: The plug-in to query.

<a id="return-value"></a>

## Return Value

`true` if the plug-in is loaded only when a client requests an instance of a supported type, otherwise  `false`.

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
- [CFPlugInRemoveInstanceForFactory(\_:)](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand(\_:\_:)](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

# CFPlugInIsLoadOnDemand (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether or not a plug-in is loaded on demand.

## Declaration

```objectivec
extern Boolean CFPlugInIsLoadOnDemand(CFPlugInRef plugIn);
```

## Parameters

- `plugIn`: The plug-in to query.

<a id="return-value"></a>

## Return Value

`true` if the plug-in is loaded only when a client requests an instance of a supported type, otherwise  `false`.

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
- [CFPlugInRemoveInstanceForFactory](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).
