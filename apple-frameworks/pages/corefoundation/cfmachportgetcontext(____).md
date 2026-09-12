> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportgetcontext(_:_:)](https://developer.apple.com/documentation/corefoundation/cfmachportgetcontext(_:_:))

# CFMachPortGetContext(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFMachPort object.

## Declaration

```swift
func CFMachPortGetContext(_ port: CFMachPort!, _ context: UnsafeMutablePointer<CFMachPortContext>!)
```

## Parameters

- `port`: The CFMachPort object to examine.
- `context`: A pointer to the structure into which the context information for `port` is to be copied. The information being returned is usually the same information you passed to [CFMachPortCreate(\_:\_:\_:\_:)](cfmachportcreate%28________%29.md) or [CFMachPortCreateWithPort(\_:\_:\_:\_:\_:)](cfmachportcreatewithport%28__________%29.md) when creating `port`. However, if [CFMachPortCreateWithPort(\_:\_:\_:\_:\_:)](cfmachportcreatewithport%28__________%29.md) returned a cached CFMachPort object instead of creating a new object, `context` is filled with information from the original CFMachPort object instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for CFMachPort objects is currently `0`. Before calling this function, you need to initialize the `version` member of `context` to `0`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetInvalidationCallBack(\_:)](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort(\_:)](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid(\_:)](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

# CFMachPortGetContext (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the context information for a CFMachPort object.

## Declaration

```objectivec
extern void CFMachPortGetContext(CFMachPortRef port, CFMachPortContext *context);
```

## Parameters

- `port`: The CFMachPort object to examine.
- `context`: A pointer to the structure into which the context information for `port` is to be copied. The information being returned is usually the same information you passed to [CFMachPortCreate](cfmachportcreate%28________%29.md) or [CFMachPortCreateWithPort](cfmachportcreatewithport%28__________%29.md) when creating `port`. However, if [CFMachPortCreateWithPort](cfmachportcreatewithport%28__________%29.md) returned a cached CFMachPort object instead of creating a new object, `context` is filled with information from the original CFMachPort object instead of the information you passed to the function.

<a id="Discussion"></a>

## Discussion

The context version number for CFMachPort objects is currently `0`. Before calling this function, you need to initialize the `version` member of `context` to `0`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetInvalidationCallBack](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.
