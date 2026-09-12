> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpluginregisterfactoryfunctionbyname(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfpluginregisterfactoryfunctionbyname(_:_:_:))

# CFPlugInRegisterFactoryFunctionByName(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.

## Declaration

```swift
func CFPlugInRegisterFactoryFunctionByName(_ factoryUUID: CFUUID!, _ plugIn: CFPlugIn!, _ functionName: CFString!) -> Bool
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function to register.
- `plugIn`: The plug-in containing `functionName`.
- `functionName`: The name of the factory function to register.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully registered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function is used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction(\_:\_:)](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterPlugInType(\_:\_:)](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterFactory(\_:)](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType(\_:\_:)](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.

# CFPlugInRegisterFactoryFunctionByName (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Registers a factory function with a `CFPlugIn` object using the function’s name instead of its UUID.

## Declaration

```objectivec
extern Boolean CFPlugInRegisterFactoryFunctionByName(CFUUIDRef factoryUUID, CFPlugInRef plugIn, CFStringRef functionName);
```

## Parameters

- `factoryUUID`: The `CFUUID` object representing the factory function to register.
- `plugIn`: The plug-in containing `functionName`.
- `functionName`: The name of the factory function to register.

<a id="return-value"></a>

## Return Value

`true` if the factory function was successfully registered, otherwise `false`.

<a id="Discussion"></a>

## Discussion

This function is used by a plug-in or host when performing dynamic registration.

## See Also

### Registration

- [CFPlugInRegisterFactoryFunction](cfpluginregisterfactoryfunction%28____%29.md): Registers a factory function and its UUID with a `CFPlugIn` object.
- [CFPlugInRegisterPlugInType](cfpluginregisterplugintype%28____%29.md): Registers a type and its corresponding factory function with a `CFPlugIn` object.
- [CFPlugInUnregisterFactory](cfpluginunregisterfactory%28__%29.md): Removes the given function from a plug-in’s list of registered factory functions.
- [CFPlugInUnregisterPlugInType](cfpluginunregisterplugintype%28____%29.md): Removes the given type from a plug-in’s list of registered types.
