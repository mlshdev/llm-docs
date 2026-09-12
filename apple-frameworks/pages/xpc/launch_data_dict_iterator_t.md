> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/launch_data_dict_iterator_t](https://developer.apple.com/documentation/xpc/launch_data_dict_iterator_t)

# launch_data_dict_iterator_t

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** Mac Catalyst · macOS

A type for iterating over a launch data dictionary.

## Declaration

```objectivec
typedef void (*)(struct _launch_data *, const char *, void *) launch_data_dict_iterator_t;
```

## See Also

### Data types

- [launch_data_t](launch_data_t.md): A type that represents launch data.
- [launch_data_type_t](launch_data_type_t.md): A type that represents possible types of launch data.
