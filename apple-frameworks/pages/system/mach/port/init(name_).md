> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/init(name:)](https://developer.apple.com/documentation/system/mach/port/init(name:))

# init(name:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Transfer ownership of an existing unmanaged Mach port right into a `Mach.Port` by name.

## Declaration

```swift
init(name: mach_port_name_t)
```

<a id="discussion"></a>

## Discussion

This initializer traps if `name` is `MACH_PORT_NULL`, or if `name` is `MACH_PORT_DEAD` and the `RightType` is `Mach.ReceiveRight`.

If the type of the right does not match the `RightType` of the `Mach.Port` being constructed, behavior is undefined.

The underlying port right will be automatically deallocated at the end of the `Mach.Port` instance’s lifetime.

This initializer makes a syscall to guard the right.
