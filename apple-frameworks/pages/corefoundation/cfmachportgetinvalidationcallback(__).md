> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfmachportgetinvalidationcallback(_:)

# CFMachPortGetInvalidationCallBack(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the invalidation callback function for a CFMachPort object.

## Declaration

```swift
func CFMachPortGetInvalidationCallBack(_ port: CFMachPort!) -> CFMachPortInvalidationCallBack!
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

The callback function invoked when `port` is invalidated. `NULL` if no callback has been set with [CFMachPortSetInvalidationCallBack(\_:\_:)](cfmachportsetinvalidationcallback%28____%29.md).

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext(\_:\_:)](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetPort(\_:)](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid(\_:)](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.

# CFMachPortGetInvalidationCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the invalidation callback function for a CFMachPort object.

## Declaration

```objectivec
extern CFMachPortInvalidationCallBackCFMachPortGetInvalidationCallBack(CFMachPortRef port);
```

## Parameters

- `port`: The CFMachPort object to examine.

<a id="return-value"></a>

## Return Value

The callback function invoked when `port` is invalidated. `NULL` if no callback has been set with [CFMachPortSetInvalidationCallBack](cfmachportsetinvalidationcallback%28____%29.md).

## See Also

### Examining a CFMachPort Object

- [CFMachPortGetContext](cfmachportgetcontext%28____%29.md): Returns the context information for a CFMachPort object.
- [CFMachPortGetPort](cfmachportgetport%28__%29.md): Returns the native Mach port represented by a CFMachPort object.
- [CFMachPortIsValid](cfmachportisvalid%28__%29.md): Returns a Boolean value that indicates whether a CFMachPort object is valid and able to receive messages.
