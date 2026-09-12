> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/init(machport:)](https://developer.apple.com/documentation/foundation/nsmachport/init(machport:))

# init(machPort:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated `NSMachPort` object with a given Mach port.

## Declaration

```swift
init(machPort: UInt32)
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.

<a id="return-value"></a>

## Return Value

Returns an initialized `NSMachPort` object that uses `machPort` to send or receive messages. The returned object might be different than the original receiver

<a id="Discussion"></a>

## Discussion

Depending on the access rights for `machPort`, the new port may be able to only send messages. If a port with `machPort` already exists, this method deallocates the receiver, then retains and returns the existing port.

This method is the designated initializer for the `NSMachPort` class.

## See Also

### Creating and Initializing

- [port(withMachPort:)](port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [port(withMachPort:options:)](port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [init(machPort:options:)](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.

# initWithMachPort: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated `NSMachPort` object with a given Mach port.

## Declaration

```objectivec
- (instancetype) initWithMachPort:(uint32_t) machPort;
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.

<a id="return-value"></a>

## Return Value

Returns an initialized `NSMachPort` object that uses `machPort` to send or receive messages. The returned object might be different than the original receiver

<a id="Discussion"></a>

## Discussion

Depending on the access rights for `machPort`, the new port may be able to only send messages. If a port with `machPort` already exists, this method deallocates the receiver, then retains and returns the existing port.

This method is the designated initializer for the `NSMachPort` class.

## See Also

### Creating and Initializing

- [portWithMachPort:](port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [portWithMachPort:options:](port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [initWithMachPort:options:](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.
