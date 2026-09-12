> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/init(name:context:)-14mp9](https://developer.apple.com/documentation/system/mach/port/init(name:context:)-14mp9)

# init(name:context:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** macOS 14.4+

Transfer ownership of an existing, unmanaged, but already guarded, Mach port right into a Mach.Port by name.

## Declaration

```swift
init(name: mach_port_name_t, context: mach_port_context_t)
```

<a id="discussion"></a>

## Discussion

This initializer aborts if name is MACH_PORT_NULL.

If the type of the right does not match the type T of Mach.Port being constructed, the behavior is undefined.

The underlying port right will be automatically deallocated when the Mach.Port object is destroyed.
