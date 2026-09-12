> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/port(withmachport:options:)](https://developer.apple.com/documentation/foundation/nsmachport/port(withmachport:options:))

# port(withMachPort:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a port object configured with the specified options and the given Mach port.

## Declaration

```swift
class func port(withMachPort machPort: UInt32, options f: NSMachPort.Options = []) -> Port
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.
- `f`: Specifies options for what to do with the underlying port rights when the `NSMachPort` object is invalidated or destroyed. For a list of constants, see `Mach Port Rights`.

<a id="return-value"></a>

## Return Value

An `NSMachPort` object that uses `machPort` to send or receive messages.

<a id="Discussion"></a>

## Discussion

Creates the port object if necessary. Depending on the access rights associated with `machPort`, the new port object may be usable only for sending messages.

## See Also

### Creating and Initializing

- [port(withMachPort:)](port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [init(machPort:)](init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [init(machPort:options:)](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.

# portWithMachPort:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a port object configured with the specified options and the given Mach port.

## Declaration

```objectivec
+ (NSPort *) portWithMachPort:(uint32_t) machPort options:(NSMachPortOptions) f;
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.
- `f`: Specifies options for what to do with the underlying port rights when the `NSMachPort` object is invalidated or destroyed. For a list of constants, see `Mach Port Rights`.

<a id="return-value"></a>

## Return Value

An `NSMachPort` object that uses `machPort` to send or receive messages.

<a id="Discussion"></a>

## Discussion

Creates the port object if necessary. Depending on the access rights associated with `machPort`, the new port object may be usable only for sending messages.

## See Also

### Creating and Initializing

- [portWithMachPort:](port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [initWithMachPort:](init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [initWithMachPort:options:](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.
