> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfplugingetbundle(_:)](https://developer.apple.com/documentation/corefoundation/cfplugingetbundle(_:))

# CFPlugInGetBundle(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a plug-in’s bundle.

## Declaration

```swift
func CFPlugInGetBundle(_ plugIn: CFPlugIn!) -> CFBundle!
```

## Parameters

- `plugIn`: The plug-in whose bundle to obtain.

<a id="return-value"></a>

## Return Value

The bundle for `plugIn`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should *always* use this function to get a plug-in’s bundle. Never attempt to access the plug-in directly as a bundle.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory(\_:)](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType(\_:)](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn(\_:\_:)](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetTypeID()](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand(\_:)](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory(\_:)](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand(\_:\_:)](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).

# CFPlugInGetBundle (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a plug-in’s bundle.

## Declaration

```objectivec
extern CFBundleRefCFPlugInGetBundle(CFPlugInRef plugIn);
```

## Parameters

- `plugIn`: The plug-in whose bundle to obtain.

<a id="return-value"></a>

## Return Value

The bundle for `plugIn`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="Discussion"></a>

## Discussion

You should *always* use this function to get a plug-in’s bundle. Never attempt to access the plug-in directly as a bundle.

## See Also

### CFPlugIn Miscellaneous Functions

- [CFPlugInAddInstanceForFactory](cfpluginaddinstanceforfactory%28__%29.md): Registers a new instance of a type with `CFPlugIn`.
- [CFPlugInFindFactoriesForPlugInType](cfpluginfindfactoriesforplugintype%28__%29.md): Searches all registered plug-ins for factory functions capable of creating an instance of the given type.
- [CFPlugInFindFactoriesForPlugInTypeInPlugIn](cfpluginfindfactoriesforplugintypeinplugin%28____%29.md): Searches the given plug-in for factory functions capable of creating an instance of the given type.
- [CFPlugInGetTypeID](cfplugingettypeid%28%29.md): Returns the type identifier for the `CFPlugIn` opaque type.
- [CFPlugInIsLoadOnDemand](cfpluginisloadondemand%28__%29.md): Determines whether or not a plug-in is loaded on demand.
- [CFPlugInRemoveInstanceForFactory](cfpluginremoveinstanceforfactory%28__%29.md): Unregisters an instance of a type with `CFPlugIn`.
- [CFPlugInSetLoadOnDemand](cfpluginsetloadondemand%28____%29.md): Enables or disables load on demand for plug-ins that do dynamic registration (only when a client requests an instance of a supported type).
