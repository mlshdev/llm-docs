> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginregisterplugintype(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpluginregisterplugintype(_:_:))

# CFPlugInRegisterPlugInType(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a type and its corresponding factory function with a `CFPlugIn` object.

## Declaration

```swift
func CFPlugInRegisterPlugInType(_ factoryUUID: CFUUID!, _ typeUUID: CFUUID!) -> Bool
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function that can create the type being registered.
- `typeUUID`: The UUID type to register.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully registered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function is used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction(\_:\_:)](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName(\_:\_:\_:)](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInUnregisterFactory(\_:)](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType(\_:\_:)](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.

# CFPlugInRegisterPlugInType (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a type and its corresponding factory function with a `CFPlugIn` object.

## Declaration

```objectivec
extern Boolean CFPlugInRegisterPlugInType(CFUUIDRef factoryUUID, CFUUIDRef typeUUID);
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function that can create the type being registered.
- `typeUUID`: The UUID type to register.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully registered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function is used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterFactoryFunctionByName](cfpluginregisterfactoryfunctionbyname%28______%29.md): Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.
- [CFPlugInUnregisterFactory](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.
