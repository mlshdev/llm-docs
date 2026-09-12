> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportisvalid(_:)](https://developer.apple.com/documentation/corefoundation/cfmachportisvalid(_:))

# CFMachPortIsValid(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

## Declaration

```swift
func CFMachPortIsValid(_ port: CFMachPort!) -> Bool
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

`true` if `port` can be used for communication, otherwise `false`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext(\_:\_:)](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack(\_:)](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort(\_:)](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.

# CFMachPortIsValid (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

## Declaration

```objectivec
extern Boolean CFMachPortIsValid(CFMachPortRef port);
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

`true` if `port` can be used for communication, otherwise `false`.

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetInvalidationCallBack](cfmachportgetinvalidationcallback%28__%29.md): Returns the invalidation callback function for a CFMachPort object.
- [CFMachPortGetPort](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
