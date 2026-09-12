> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport/machport](https://developer.apple.com/documentation/foundation/nsmachport/machport)

# machPort (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Mach port used by the receiver, represented as an integer.

## Declaration

```swift
var machPort: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The Mach port used by the receiver. Cast this value to a mach_port_t when using it with Mach system calls.

# machPort (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The Mach port used by the receiver, represented as an integer.

## Declaration

```objectivec
@property (readonly) uint32_t machPort;
```

<a id="Discussion"></a>

## Discussion

The Mach port used by the receiver. Cast this value to a mach_port_t when using it with Mach system calls.
