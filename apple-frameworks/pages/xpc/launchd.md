> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/launchd](https://developer.apple.com/documentation/xpc/launchd)

# launchd

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** API Collection

Browse APIs for interacting with `launchd`.

## Topics

### Sockets

- [launch_activate_socket](launch_activate_socket.md): Retrieves the file descriptors for sockets in the process’s `launchd` property list.

### Data types

- [launch_data_t](launch_data_t.md): A type that represents launch data.
- [launch_data_type_t](launch_data_type_t.md): A type that represents possible types of launch data.
- [launch_data_dict_iterator_t](launch_data_dict_iterator_t.md): A type for iterating over a launch data dictionary.

### Deprecated

- [launch_data_alloc](launch_data_alloc.md): Deprecated.
- [launch_data_array_get_count](launch_data_array_get_count.md): Deprecated.
- [launch_data_array_get_index](launch_data_array_get_index.md): Deprecated.
- [launch_data_array_set_index](launch_data_array_set_index.md): Deprecated.
- [launch_data_copy](launch_data_copy.md): Deprecated.
- [launch_data_dict_get_count](launch_data_dict_get_count.md): Deprecated.
- [launch_data_dict_insert](launch_data_dict_insert.md): Deprecated.
- [launch_data_dict_iterate](launch_data_dict_iterate.md): Deprecated.
- [launch_data_dict_lookup](launch_data_dict_lookup.md): Deprecated.
- [launch_data_dict_remove](launch_data_dict_remove.md): Deprecated.
- [launch_data_free](launch_data_free.md): Deprecated.
- [launch_data_get_bool](launch_data_get_bool.md): Deprecated.
- [launch_data_get_errno](launch_data_get_errno.md): Deprecated.
- [launch_data_get_fd](launch_data_get_fd.md): Deprecated.
- [launch_data_get_integer](launch_data_get_integer.md): Deprecated.
- [launch_data_get_machport](launch_data_get_machport.md): Deprecated.
- [launch_data_get_opaque](launch_data_get_opaque.md): Deprecated.
- [launch_data_get_opaque_size](launch_data_get_opaque_size.md): Deprecated.
- [launch_data_get_real](launch_data_get_real.md): Deprecated.
- [launch_data_get_string](launch_data_get_string.md): Deprecated.
- [launch_data_get_type](launch_data_get_type.md): Deprecated.
- [launch_data_new_bool](launch_data_new_bool.md): Deprecated.
- [launch_data_new_fd](launch_data_new_fd.md): Deprecated.
- [launch_data_new_integer](launch_data_new_integer.md): Deprecated.
- [launch_data_new_machport](launch_data_new_machport.md): Deprecated.
- [launch_data_new_opaque](launch_data_new_opaque.md): Deprecated.
- [launch_data_new_real](launch_data_new_real.md): Deprecated.
- [launch_data_new_string](launch_data_new_string.md): Deprecated.
- [launch_data_set_bool](launch_data_set_bool.md): Deprecated.
- [launch_data_set_fd](launch_data_set_fd.md): Deprecated.
- [launch_data_set_integer](launch_data_set_integer.md): Deprecated.
- [launch_data_set_machport](launch_data_set_machport.md): Deprecated.
- [launch_data_set_opaque](launch_data_set_opaque.md): Deprecated.
- [launch_data_set_real](launch_data_set_real.md): Deprecated.
- [launch_data_set_string](launch_data_set_string.md): Deprecated.
- [launch_get_fd](launch_get_fd.md): Deprecated.
- [launch_msg](launch_msg.md): Deprecated.

## See Also

### Additional types

- [XPC objects](xpc-objects.md): Encapsulate data in objects that represent primitive types, collections, and more.
- [Utilities](utilities.md): Browse debugging utilities and constants to use with the XPC APIs.
- [XPC connections](xpc-connections.md): Create and manage connections to services using connection-based APIs.
