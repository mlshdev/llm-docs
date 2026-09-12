> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportgetport(_:)](https://developer.apple.com/documentation/corefoundation/cfmachportgetport(_:))

# CFMachPortGetPort(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the native Mach port represented by a CFMachPort object.

## Declaration

```swift
func CFMachPortGetPort(_ port: CFMachPort!) -> mach_port_t
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

The native Mach port represented by `port`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext(\_:\_:)](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack(\_:)](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortIsValid(\_:)](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

# CFMachPortGetPort (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the native Mach port represented by a CFMachPort object.

## Declaration

```objectivec
extern mach_port_t CFMachPortGetPort(CFMachPortRef port);
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

The native Mach port represented by `port`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortIsValid](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.
