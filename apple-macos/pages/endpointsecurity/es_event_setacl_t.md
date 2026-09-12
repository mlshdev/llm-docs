> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_setacl_t](https://developer.apple.com/documentation/endpointsecurity/es_event_setacl_t)

# es_event_setacl_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the setting of a file’s access control list.

## Declaration

```swift
struct es_event_setacl_t
```

## Topics

### Inspecting Event Properties

- [target](es_event_setacl_t/target.md): The file containing the access control list to set or clear.
- [acl](es_event_setacl_t/acl.md): A union containing a settable access control list structure.
- [set_or_clear](es_event_setacl_t/set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](es_event_setacl_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init(target:set_or_clear:acl:reserved:)](es_event_setacl_t/init%28target_set_or_clear_acl_reserved_%29.md)

## See Also

### File Metadata Event Types

- [es_event_deleteextattr_t](es_event_deleteextattr_t.md): A type for an event that indicates the deletion of an extended attribute from a file.
- [es_event_fsgetpath_t](es_event_fsgetpath_t.md): A type for an event that indicates the retrieval of a file-system path.
- [es_event_getattrlist_t](es_event_getattrlist_t.md): A type for an event that indicates the retrieval of attributes from a file.
- [es_event_getextattr_t](es_event_getextattr_t.md): A type for an event that indicates the retrieval of an extended attribute from a file.
- [es_event_listextattr_t](es_event_listextattr_t.md): A type for an event that indicates the retrieval of multiple extended attributes from a file.
- [es_event_readdir_t](es_event_readdir_t.md): A type for an event that indicates the reading of a file-system directory.
- [es_event_setattrlist_t](es_event_setattrlist_t.md): A type for an event that indicates the setting of a file attribute.
- [es_event_setextattr_t](es_event_setextattr_t.md): A type for an event that indicates the setting of a file’s extended attribute.
- [es_event_setflags_t](es_event_setflags_t.md): A type for an event that indicates the setting of a file’s flags.
- [es_event_setmode_t](es_event_setmode_t.md): A type for an event that indicates the setting of a file’s mode.
- [es_event_setowner_t](es_event_setowner_t.md): A type for an event that indicates the setting of a file’s owner.
- [es_event_stat_t](es_event_stat_t.md): A type for an event that indicates the retrieval of a file’s status.
- [es_event_utimes_t](es_event_utimes_t.md): A type for an event that indicates a change to a file’s access time or modification time.

# es_event_setacl_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates the setting of a file’s access control list.

## Declaration

```objectivec
typedef struct { ... } es_event_setacl_t;
```

## Topics

### Inspecting Event Properties

- [target](es_event_setacl_t/target.md): The file containing the access control list to set or clear.
- [acl](es_event_setacl_t/acl.md): A union containing a settable access control list structure.
- [set_or_clear](es_event_setacl_t/set_or_clear.md): The access control list action represented by the event, either setting or clearing values.
- [es_set_or_clear_t](es_set_or_clear_t.md): A type that indicates whether an event represents setting or clearing a file’s access control list.
- [reserved](es_event_setacl_t/reserved.md): An unused field reserved for future use.

## See Also

### File Metadata Event Types

- [es_event_deleteextattr_t](es_event_deleteextattr_t.md): A type for an event that indicates the deletion of an extended attribute from a file.
- [es_event_fsgetpath_t](es_event_fsgetpath_t.md): A type for an event that indicates the retrieval of a file-system path.
- [es_event_getattrlist_t](es_event_getattrlist_t.md): A type for an event that indicates the retrieval of attributes from a file.
- [es_event_getextattr_t](es_event_getextattr_t.md): A type for an event that indicates the retrieval of an extended attribute from a file.
- [es_event_listextattr_t](es_event_listextattr_t.md): A type for an event that indicates the retrieval of multiple extended attributes from a file.
- [es_event_readdir_t](es_event_readdir_t.md): A type for an event that indicates the reading of a file-system directory.
- [es_event_setattrlist_t](es_event_setattrlist_t.md): A type for an event that indicates the setting of a file attribute.
- [es_event_setextattr_t](es_event_setextattr_t.md): A type for an event that indicates the setting of a file’s extended attribute.
- [es_event_setflags_t](es_event_setflags_t.md): A type for an event that indicates the setting of a file’s flags.
- [es_event_setmode_t](es_event_setmode_t.md): A type for an event that indicates the setting of a file’s mode.
- [es_event_setowner_t](es_event_setowner_t.md): A type for an event that indicates the setting of a file’s owner.
- [es_event_stat_t](es_event_stat_t.md): A type for an event that indicates the retrieval of a file’s status.
- [es_event_utimes_t](es_event_utimes_t.md): A type for an event that indicates a change to a file’s access time or modification time.
