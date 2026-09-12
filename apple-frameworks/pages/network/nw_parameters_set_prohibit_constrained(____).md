> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_set_prohibit_constrained(_:_:)](https://developer.apple.com/documentation/network/nw_parameters_set_prohibit_constrained(_:_:))

# nw_parameters_set_prohibit_constrained(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.

## Declaration

```swift
func nw_parameters_set_prohibit_constrained(_ parameters: nw_parameters_t, _ prohibit_constrained: Bool)
```

## See Also

### Selecting Paths

- [nw_parameters_set_required_interface_type(\_:\_:)](nw_parameters_set_required_interface_type%28____%29.md): Sets an interface type to require on connections and listeners.
- [nw_parameters_get_required_interface_type(\_:)](nw_parameters_get_required_interface_type%28__%29.md): Accesses the interface type required on connections and listeners.
- [nw_parameters_require_interface(\_:\_:)](nw_parameters_require_interface%28____%29.md): Sets a specific interface to require on connections, listeners, and browsers.
- [nw_parameters_copy_required_interface(\_:)](nw_parameters_copy_required_interface%28__%29.md): Accesses the interface required on connections, listeners, and browsers.
- [nw_parameters_set_local_endpoint(\_:\_:)](nw_parameters_set_local_endpoint%28____%29.md): Sets a specific local IP address and port to use for connections and listeners.
- [nw_parameters_copy_local_endpoint(\_:)](nw_parameters_copy_local_endpoint%28__%29.md): Accesses the local IP address and port used for connections and listeners.
- [nw_parameters_get_prohibit_constrained(\_:)](nw_parameters_get_prohibit_constrained%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_set_prohibit_expensive(\_:\_:)](nw_parameters_set_prohibit_expensive%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as expensive.
- [nw_parameters_get_prohibit_expensive(\_:)](nw_parameters_get_prohibit_expensive%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as expensive.
- [nw_parameters_prohibit_interface_type(\_:\_:)](nw_parameters_prohibit_interface_type%28____%29.md): Prevents connections, listeners, and browsers from using a specific interface type.
- [nw_parameters_clear_prohibited_interface_types(\_:)](nw_parameters_clear_prohibited_interface_types%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interface_types(\_:\_:)](nw_parameters_iterate_prohibited_interface_types%28____%29.md): Examines the list of prohibited interface types.
- [nw_parameters_iterate_interface_types_block_t](nw_parameters_iterate_interface_types_block_t.md): A block that allows inspection of a list of interface types.
- [nw_parameters_prohibit_interface(\_:\_:)](nw_parameters_prohibit_interface%28____%29.md): Prevents connections and listeners from using a specific interface.
- [nw_parameters_clear_prohibited_interfaces(\_:)](nw_parameters_clear_prohibited_interfaces%28__%29.md): Removes all prohibited interface types.

# nw_parameters_set_prohibit_constrained (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Prevents connections, listeners, and browsers from using network paths marked as constrained by Low Data Mode.

## Declaration

```objectivec
void nw_parameters_set_prohibit_constrained(nw_parameters_t parameters, bool prohibit_constrained);
```

## See Also

### Selecting Paths

- [nw_parameters_set_required_interface_type](nw_parameters_set_required_interface_type%28____%29.md): Sets an interface type to require on connections and listeners.
- [nw_parameters_get_required_interface_type](nw_parameters_get_required_interface_type%28__%29.md): Accesses the interface type required on connections and listeners.
- [nw_parameters_require_interface](nw_parameters_require_interface%28____%29.md): Sets a specific interface to require on connections, listeners, and browsers.
- [nw_parameters_copy_required_interface](nw_parameters_copy_required_interface%28__%29.md): Accesses the interface required on connections, listeners, and browsers.
- [nw_parameters_set_local_endpoint](nw_parameters_set_local_endpoint%28____%29.md): Sets a specific local IP address and port to use for connections and listeners.
- [nw_parameters_copy_local_endpoint](nw_parameters_copy_local_endpoint%28__%29.md): Accesses the local IP address and port used for connections and listeners.
- [nw_parameters_get_prohibit_constrained](nw_parameters_get_prohibit_constrained%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as constrained by Low Data Mode.
- [nw_parameters_set_prohibit_expensive](nw_parameters_set_prohibit_expensive%28____%29.md): Prevents connections, listeners, and browsers from using network paths marked as expensive.
- [nw_parameters_get_prohibit_expensive](nw_parameters_get_prohibit_expensive%28__%29.md): Checks if connections, listeners, and browsers are prevented from using network paths marked as expensive.
- [nw_parameters_prohibit_interface_type](nw_parameters_prohibit_interface_type%28____%29.md): Prevents connections, listeners, and browsers from using a specific interface type.
- [nw_parameters_clear_prohibited_interface_types](nw_parameters_clear_prohibited_interface_types%28__%29.md): Removes all prohibited interface types.
- [nw_parameters_iterate_prohibited_interface_types](nw_parameters_iterate_prohibited_interface_types%28____%29.md): Examines the list of prohibited interface types.
- [nw_parameters_iterate_interface_types_block_t](nw_parameters_iterate_interface_types_block_t.md): A block that allows inspection of a list of interface types.
- [nw_parameters_prohibit_interface](nw_parameters_prohibit_interface%28____%29.md): Prevents connections and listeners from using a specific interface.
- [nw_parameters_clear_prohibited_interfaces](nw_parameters_clear_prohibited_interfaces%28__%29.md): Removes all prohibited interface types.
