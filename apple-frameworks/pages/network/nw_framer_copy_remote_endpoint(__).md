> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_framer_copy_remote_endpoint(_:)](https://developer.apple.com/documentation/network/nw_framer_copy_remote_endpoint(_:))

# nw_framer_copy_remote_endpoint(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses the remote endpoint of the connection in which your protocol is running.

## Declaration

```swift
func nw_framer_copy_remote_endpoint(_ framer: nw_framer_t) -> nw_endpoint_t
```

## See Also

### Inspecting Instance Properties

- [nw_framer_copy_local_endpoint(\_:)](nw_framer_copy_local_endpoint%28__%29.md): Accesses the local endpoint of the connection in which your protocol is running.
- [nw_framer_copy_parameters(\_:)](nw_framer_copy_parameters%28__%29.md): Accesses the parameters of the connection in which your protocol is running.

# nw_framer_copy_remote_endpoint (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Accesses the remote endpoint of the connection in which your protocol is running.

## Declaration

```objectivec
nw_endpoint_tnw_framer_copy_remote_endpoint(nw_framer_t framer);
```

## See Also

### Inspecting Instance Properties

- [nw_framer_copy_local_endpoint](nw_framer_copy_local_endpoint%28__%29.md): Accesses the local endpoint of the connection in which your protocol is running.
- [nw_framer_copy_parameters](nw_framer_copy_parameters%28__%29.md): Accesses the parameters of the connection in which your protocol is running.
