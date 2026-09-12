> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/port(withmachport:)](https://developer.apple.com/documentation/foundation/nsmachport/port(withmachport:))

# port(withMachPort:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a port object configured with the given Mach port.

## Declaration

```swift
class func port(withMachPort machPort: UInt32) -> Port
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.

<a id="return-value"></a>

## Return Value

An `NSMachPort` object that uses `machPort` to send or receive messages.

<a id="Discussion"></a>

## Discussion

Creates the port object if necessary. Depending on the access rights associated with `machPort`, the new port object may be usable only for sending messages.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating and Initializing

- [port(withMachPort:options:)](port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [init(machPort:)](init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [init(machPort:options:)](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.

# portWithMachPort: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a port object configured with the given Mach port.

## Declaration

```objectivec
+ (NSPort *) portWithMachPort:(uint32_t) machPort;
```

## Parameters

- `machPort`: The Mach port for the new port. This parameter should originally be of type mach_port_t.

<a id="return-value"></a>

## Return Value

An `NSMachPort` object that uses `machPort` to send or receive messages.

<a id="Discussion"></a>

## Discussion

Creates the port object if necessary. Depending on the access rights associated with `machPort`, the new port object may be usable only for sending messages.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating and Initializing

- [portWithMachPort:options:](port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [initWithMachPort:](init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [initWithMachPort:options:](init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.
