> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginunregisterfactory(_:)](https://developer.apple.com/documentation/corefoundation/cfpluginunregisterfactory(_:))

# CFPlugInUnregisterFactory(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the given function from a plug-in’s list of registered factory functions.

## Declaration

```swift
func CFPlugInUnregisterFactory(_ factoryUUID: CFUUID!) -> Bool
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory to unregister.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully unregistered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction(\_:\_:)](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName(\_:\_:\_:)](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInRegisterPlugInType(\_:\_:)](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterPlugInType(\_:\_:)](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.

# CFPlugInUnregisterFactory (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the given function from a plug-in’s list of registered factory functions.

## Declaration

```objectivec
extern Boolean CFPlugInUnregisterFactory(CFUUIDRef factoryUUID);
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory to unregister.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully unregistered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInRegisterPlugInType](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterPlugInType](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.
