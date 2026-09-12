> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginunregisterplugintype(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpluginunregisterplugintype(_:_:))

# CFPlugInUnregisterPlugInType(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the given type from a plug-in’s list of registered types.

## Declaration

```swift
func CFPlugInUnregisterPlugInType(_ factoryUUID: CFUUID!, _ typeUUID: CFUUID!) -> Bool
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function for the type to unregister.
- `typeUUID`: The UUID type to unregister.

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
- [CFPlugInUnregisterFactory(\_:)](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.

# CFPlugInUnregisterPlugInType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes the given type from a plug-in’s list of registered types.

## Declaration

```objectivec
extern Boolean CFPlugInUnregisterPlugInType(CFUUIDRef factoryUUID, CFUUIDRef typeUUID);
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function for the type to unregister.
- `typeUUID`: The UUID type to unregister.

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
- [CFPlugInUnregisterFactory](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
