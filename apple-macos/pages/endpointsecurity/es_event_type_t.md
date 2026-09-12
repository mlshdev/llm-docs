> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_type_t](https://developer.apple.com/documentation/endpointsecurity/es_event_type_t)

# es_event_type_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type used to identify a message’s event type and subscribe to events of that type.

## Declaration

```swift
struct es_event_type_t
```

<a id="overview"></a>

## Overview

Call the [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md) function with the constants defined by this type to subscribe to specific Endpoint Security events.

You also use this type when inspecting a received message. The [es_message_t](es_message_t.md) member [event_type](es_message_t/event_type.md), which is of this type, indicates what kind of event the [event](es_message_t/event.md) field contains.

## Topics

### Authorization Event Types

- [ES_EVENT_TYPE_AUTH_CHDIR](es_event_type_auth_chdir.md): An identifier for a process that requests permission from the operating system to change the working directory for the process.
- [ES_EVENT_TYPE_AUTH_CHROOT](es_event_type_auth_chroot.md): An identifier for a process that requests permission from the operating system to change the root directory for the process.
- [ES_EVENT_TYPE_AUTH_CLONE](es_event_type_auth_clone.md): An identifier for a process that requests permission from the operating system to clone a file.
- [ES_EVENT_TYPE_AUTH_COPYFILE](es_event_type_auth_copyfile.md): An identifier for a process that requests permission from the operating system to copy a file.
- [ES_EVENT_TYPE_AUTH_CREATE](es_event_type_auth_create.md): An identifier for a process that requests permission from the operating system to create a file.
- [ES_EVENT_TYPE_AUTH_DELETEEXTATTR](es_event_type_auth_deleteextattr.md): An identifier for a process that requests permission from the operating system to delete an extended attribute from a file.
- [ES_EVENT_TYPE_AUTH_EXCHANGEDATA](es_event_type_auth_exchangedata.md): An identifier for a process that requests permission from the operating system to exchange data between two files.
- [ES_EVENT_TYPE_AUTH_EXEC](es_event_type_auth_exec.md): An identifier for a process that requests permission from the operating system to execute another image.
- [ES_EVENT_TYPE_AUTH_FCNTL](es_event_type_auth_fcntl.md): An identifier for a process that requests permission from the operating system to manipulate a file descriptor.
- [ES_EVENT_TYPE_AUTH_FILE_PROVIDER_MATERIALIZE](es_event_type_auth_file_provider_materialize.md): An identifier for a process that requests permission for a file provider to return a reference to a file.
- [ES_EVENT_TYPE_AUTH_FILE_PROVIDER_UPDATE](es_event_type_auth_file_provider_update.md): An identifier for a process that requests permission from the operating system to update a file.
- [ES_EVENT_TYPE_AUTH_FSGETPATH](es_event_type_auth_fsgetpath.md): An identifier for a process that requests permission from the operating system to retrieve a file system path.
- [ES_EVENT_TYPE_AUTH_GET_TASK](es_event_type_auth_get_task.md): An identifier for a process that requests permission from the operating system to retrieve a process’s task control port.
- [ES_EVENT_TYPE_AUTH_GET_TASK_READ](es_event_type_auth_get_task_read.md): An identifier for a process that requests permission from the operating system to retrieve a process’s task read port.
- [ES_EVENT_TYPE_AUTH_GETATTRLIST](es_event_type_auth_getattrlist.md): An identifier for a process that requests permission from the operating system to retrieve attributes from a file.
- [ES_EVENT_TYPE_AUTH_GETEXTATTR](es_event_type_auth_getextattr.md): An identifier for a process that requests permission from the operating system to retrieve an extended attribute from a file.
- [ES_EVENT_TYPE_AUTH_IOKIT_OPEN](es_event_type_auth_iokit_open.md): An identifier for a process that requests permission from the operating system to open an IOKit device.
- [ES_EVENT_TYPE_AUTH_KEXTLOAD](es_event_type_auth_kextload.md): An identifier for a process that requests permission from the operating system to load a kernel extension (KEXT).
- [ES_EVENT_TYPE_AUTH_LINK](es_event_type_auth_link.md): An identifier for a process that requests permission from the operating system to create a hard link.
- [ES_EVENT_TYPE_AUTH_LISTEXTATTR](es_event_type_auth_listextattr.md): An identifier for a process that requests permission from the operating system to retrieve multiple extended attributes from a file.
- [ES_EVENT_TYPE_AUTH_MMAP](es_event_type_auth_mmap.md): An identifier for a process that requests permission from the operating system to map a file into memory.
- [ES_EVENT_TYPE_AUTH_MOUNT](es_event_type_auth_mount.md): An identifier for a process that requests permission from the operating system to mount a file system.
- [ES_EVENT_TYPE_AUTH_MPROTECT](es_event_type_auth_mprotect.md): An identifier for a process that requests permission from the operating system to change the protection of memory-mapped pages.
- [ES_EVENT_TYPE_AUTH_OPEN](es_event_type_auth_open.md): An identifier for a process that requests permission from the operating system to open a file.
- [ES_EVENT_TYPE_AUTH_PROC_CHECK](es_event_type_auth_proc_check.md): An identifier for a process that requests permission from the operating system to get information about a process.
- [ES_EVENT_TYPE_AUTH_PROC_SUSPEND_RESUME](es_event_type_auth_proc_suspend_resume.md): An identifier for a process that requests permission from the operating system to suspend, resume, or shut down sockets for another process.
- [ES_EVENT_TYPE_AUTH_READDIR](es_event_type_auth_readdir.md): An identifier for a process that requests permission from the operating system to read a file system directory.
- [ES_EVENT_TYPE_AUTH_READLINK](es_event_type_auth_readlink.md): An identifier for a process that requests permission from the operating system to read a symbolic link.
- [ES_EVENT_TYPE_AUTH_REMOUNT](es_event_type_auth_remount.md): An identifier for a process that requests permission from the operating system to mount a file system.
- [ES_EVENT_TYPE_AUTH_RENAME](es_event_type_auth_rename.md): An identifier for a process that requests permission from the operating system to rename a file.
- [ES_EVENT_TYPE_AUTH_SEARCHFS](es_event_type_auth_searchfs.md): An identifier for a process that requests permission from the operating system to search a volume or mounted file system.
- [ES_EVENT_TYPE_AUTH_SETACL](es_event_type_auth_setacl.md): An identifier for a process that requests permission from the operating system to set a file’s access control list.
- [ES_EVENT_TYPE_AUTH_SETATTRLIST](es_event_type_auth_setattrlist.md): An identifier for a process that requests permission from the operating system to set attributes of a file.
- [ES_EVENT_TYPE_AUTH_SETEXTATTR](es_event_type_auth_setextattr.md): An identifier for a process that requests permission from the operating system to set an extended attribute of a file.
- [ES_EVENT_TYPE_AUTH_SETFLAGS](es_event_type_auth_setflags.md): An identifier for a process that requests permission from the operating system to set a file’s flags.
- [ES_EVENT_TYPE_AUTH_SETMODE](es_event_type_auth_setmode.md): An identifier for a process that requests permission from the operating system to set a file’s mode.
- [ES_EVENT_TYPE_AUTH_SETOWNER](es_event_type_auth_setowner.md): An identifier for a process that requests permission from the operating system to set a file’s owner.
- [ES_EVENT_TYPE_AUTH_SETTIME](es_event_type_auth_settime.md): An identifier for a process that requests permission from the operating system to modify the system time.
- [ES_EVENT_TYPE_AUTH_SIGNAL](es_event_type_auth_signal.md): An identifier for a process that requests permission from the operating system to send a signal to a process.
- [ES_EVENT_TYPE_AUTH_TRUNCATE](es_event_type_auth_truncate.md): An identifier for a process that requests permission from the operating system to truncate a file.
- [ES_EVENT_TYPE_AUTH_UIPC_BIND](es_event_type_auth_uipc_bind.md): An identifier for a process that requests permission from the operating system to bind a UNIX domain socket.
- [ES_EVENT_TYPE_AUTH_UIPC_CONNECT](es_event_type_auth_uipc_connect.md): An identifier for a process that requests permission from the operating system to connect a UNIX domain socket.
- [ES_EVENT_TYPE_AUTH_UNLINK](es_event_type_auth_unlink.md): An identifier for a process that requests permission from the operating system to delete a file.
- [ES_EVENT_TYPE_AUTH_UTIMES](es_event_type_auth_utimes.md): An identifier for a process that requests permission from the operating system to change a file’s access or modification time.

### Notification Event Types

- [ES_EVENT_TYPE_NOTIFY_ACCESS](es_event_type_notify_access.md): An identifier for a process that notifies endpoint security that it is checking a file’s access permission.
- [ES_EVENT_TYPE_NOTIFY_CHDIR](es_event_type_notify_chdir.md): An identifier for a process that notifies endpoint security that it is changing the working directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CHROOT](es_event_type_notify_chroot.md): An identifier for a process that notifies endpoint security that it is changing the root directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CLONE](es_event_type_notify_clone.md): An identifier for a process that notifies endpoint security that it is cloning a file.
- [ES_EVENT_TYPE_NOTIFY_CLOSE](es_event_type_notify_close.md): An identifier for a process that notifies endpoint security that it is closing a file.
- [ES_EVENT_TYPE_NOTIFY_COPYFILE](es_event_type_notify_copyfile.md): An identifier for a process that notifies endpoint security that it is copying a file.
- [ES_EVENT_TYPE_NOTIFY_CREATE](es_event_type_notify_create.md): An identifier for a process that notifies endpoint security that it is creating a file.
- [ES_EVENT_TYPE_NOTIFY_CS_INVALIDATED](es_event_type_notify_cs_invalidated.md): An identifier for a process that notifies endpoint security that its code signing status is now invalid.
- [ES_EVENT_TYPE_NOTIFY_DELETEEXTATTR](es_event_type_notify_deleteextattr.md): An identifier for a process that notifies endpoint security that it is deleting an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_DUP](es_event_type_notify_dup.md): An identifier for a process that notifies endpoint security that it is duplicating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_EXCHANGEDATA](es_event_type_notify_exchangedata.md): An identifier for a process that notifies endpoint security that it is exchanging data between two files.
- [ES_EVENT_TYPE_NOTIFY_EXEC](es_event_type_notify_exec.md): An identifier for a process that notifies endpoint security that it is executing an image.
- [ES_EVENT_TYPE_NOTIFY_EXIT](es_event_type_notify_exit.md): An identifier for a process that notifies endpoint security that it is exiting.
- [ES_EVENT_TYPE_NOTIFY_FCNTL](es_event_type_notify_fcntl.md): An identifier for a process that notifies endpoint security that it is manipulating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_MATERIALIZE](es_event_type_notify_file_provider_materialize.md): An identifier for a process that notifies endpoint security that a file provider returned a reference to a file.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_UPDATE](es_event_type_notify_file_provider_update.md): An identifier for a process that notifies endpoint security that it is updating a file.
- [ES_EVENT_TYPE_NOTIFY_FORK](es_event_type_notify_fork.md): An identifier for a process that notifies endpoint security that it is forking another process.
- [ES_EVENT_TYPE_NOTIFY_FSGETPATH](es_event_type_notify_fsgetpath.md): An identifier for a process that notifies endpoint security that it is retrieving a file system path.
- [ES_EVENT_TYPE_NOTIFY_GETATTRLIST](es_event_type_notify_getattrlist.md): An identifier for a process that notifies endpoint security that it is retrieving attributes from a file.
- [ES_EVENT_TYPE_NOTIFY_GETEXTATTR](es_event_type_notify_getextattr.md): An identifier for a process that notifies endpoint security that it is retrieving an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK](es_event_type_notify_get_task.md): An identifier for a process that notifies endpoint security that it is retrieving the task control port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_READ](es_event_type_notify_get_task_read.md): An identifier for a process that notifies endpoint security that it is retrieving the task read port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT](es_event_type_notify_get_task_inspect.md): An identifier for a process that notifies endpoint security that it is retrieving the task inspect port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_NAME](es_event_type_notify_get_task_name.md): An identifier for a process that notifies endpoint security that it is retrieving the task name port for another process.
- [ES_EVENT_TYPE_NOTIFY_IOKIT_OPEN](es_event_type_notify_iokit_open.md): An identifier for a process that notifies endpoint security that it is opening an IOKit device.
- [ES_EVENT_TYPE_NOTIFY_KEXTLOAD](es_event_type_notify_kextload.md): An identifier for a process that notifies endpoint security that it is loading a kernel extension (KEXT).
- [ES_EVENT_TYPE_NOTIFY_KEXTUNLOAD](es_event_type_notify_kextunload.md): An identifier for a process that notifies endpoint security that it is unloading a kernel extension (KEXT).
- [ES_EVENT_TYPE_NOTIFY_LINK](es_event_type_notify_link.md): An identifier for a process that notifies endpoint security that it is creating a hard link.
- [ES_EVENT_TYPE_NOTIFY_LISTEXTATTR](es_event_type_notify_listextattr.md): An identifier for a process that notifies endpoint security that it is retrieving multiple extended attributes from a file.
- [ES_EVENT_TYPE_NOTIFY_LOOKUP](es_event_type_notify_lookup.md): An identifier for a process that notifies endpoint security that it is looking up a file’s path.
- [ES_EVENT_TYPE_NOTIFY_MMAP](es_event_type_notify_mmap.md): An identifier for a process that notifies endpoint security that it is mapping a file into memory.
- [ES_EVENT_TYPE_NOTIFY_MOUNT](es_event_type_notify_mount.md): An identifier for a process that notifies endpoint security that it is mounting a file system.
- [ES_EVENT_TYPE_NOTIFY_MPROTECT](es_event_type_notify_mprotect.md): An identifier for a process that notifies endpoint security that it is changing the protection of memory-mapped pages.
- [ES_EVENT_TYPE_NOTIFY_OPEN](es_event_type_notify_open.md): An identifier for a process that notifies endpoint security that it is opening a file.
- [ES_EVENT_TYPE_NOTIFY_PROC_CHECK](es_event_type_notify_proc_check.md): An identifier for a process that notifies endpoint security that it is checking information about another process.
- [ES_EVENT_TYPE_NOTIFY_PROC_SUSPEND_RESUME](es_event_type_notify_proc_suspend_resume.md): An identifier for a process that notifies endpoint security that it is suspending, resuming, or shutting down sockets for another process.
- [ES_EVENT_TYPE_NOTIFY_PTY_CLOSE](es_event_type_notify_pty_close.md): An identifier for a process that notifies endpoint security that it is closing a pseudoterminal device.
- [ES_EVENT_TYPE_NOTIFY_PTY_GRANT](es_event_type_notify_pty_grant.md): An identifier for a process that notifies endpoint security that it is granting a pseudoterminal device to a user.
- [ES_EVENT_TYPE_NOTIFY_READDIR](es_event_type_notify_readdir.md): An identifier for a process that notifies endpoint security that it is reading a file system directory.
- [ES_EVENT_TYPE_NOTIFY_READLINK](es_event_type_notify_readlink.md): An identifier for a process that notifies endpoint security that it is reading a symbolic link.
- [ES_EVENT_TYPE_NOTIFY_REMOTE_THREAD_CREATE](es_event_type_notify_remote_thread_create.md): An identifier for a process that notifies endpoint security that it is spawning a thread in another process.
- [ES_EVENT_TYPE_NOTIFY_REMOUNT](es_event_type_notify_remount.md): An identifier for a process that notifies endpoint security that it is remounting a file system.
- [ES_EVENT_TYPE_NOTIFY_RENAME](es_event_type_notify_rename.md): An identifier for a process that notifies endpoint security that it is renaming a file.
- [ES_EVENT_TYPE_NOTIFY_SEARCHFS](es_event_type_notify_searchfs.md): An identifier for a process that notifies endpoint security that it is searching a volume or mounted file system.
- [ES_EVENT_TYPE_NOTIFY_SETACL](es_event_type_notify_setacl.md): An identifier for a process that notifies endpoint security that it is setting a file’s access control list.
- [ES_EVENT_TYPE_NOTIFY_SETATTRLIST](es_event_type_notify_setattrlist.md): An identifier for a process that notifies endpoint security that it is setting attributes of a file.
- [ES_EVENT_TYPE_NOTIFY_SETEGID](es_event_type_notify_setegid.md): An identifier for a process that notifies endpoint security that it is setting its effective group ID.
- [ES_EVENT_TYPE_NOTIFY_SETEUID](es_event_type_notify_seteuid.md): An identifier for a process that notifies endpoint security that it is setting its effective user ID.
- [ES_EVENT_TYPE_NOTIFY_SETEXTATTR](es_event_type_notify_setextattr.md): An identifier for a process that notifies endpoint security that it is setting an extended attribute of a file.
- [ES_EVENT_TYPE_NOTIFY_SETGID](es_event_type_notify_setgid.md): An identifier for a process that notifies endpoint security that it is setting its group ID.
- [ES_EVENT_TYPE_NOTIFY_SETFLAGS](es_event_type_notify_setflags.md): An identifier for a process that notifies endpoint security that it is setting a file’s flags.
- [ES_EVENT_TYPE_NOTIFY_SETMODE](es_event_type_notify_setmode.md): An identifier for a process that notifies endpoint security that it is setting a file’s mode.
- [ES_EVENT_TYPE_NOTIFY_SETOWNER](es_event_type_notify_setowner.md): An identifier for a process that notifies endpoint security that it is setting a file’s owner.
- [ES_EVENT_TYPE_NOTIFY_SETREGID](es_event_type_notify_setregid.md): An identifier for a process that notifies endpoint security that it is setting its real and effective group IDs.
- [ES_EVENT_TYPE_NOTIFY_SETREUID](es_event_type_notify_setreuid.md): An identifier for a process that notifies endpoint security that it is setting its real and effective user IDs.
- [ES_EVENT_TYPE_NOTIFY_SETTIME](es_event_type_notify_settime.md): An identifier for a process that notifies endpoint security that it is modifying the system time.
- [ES_EVENT_TYPE_NOTIFY_SETUID](es_event_type_notify_setuid.md): An identifier for a process that notifies endpoint security that it is setting its user ID.
- [ES_EVENT_TYPE_NOTIFY_SIGNAL](es_event_type_notify_signal.md): An identifier for a process that notifies endpoint security that it is sending a signal to another process.
- [ES_EVENT_TYPE_NOTIFY_STAT](es_event_type_notify_stat.md): An identifier for a process that notifies endpoint security that it is retrieving a file’s status.
- [ES_EVENT_TYPE_NOTIFY_TRACE](es_event_type_notify_trace.md): An identifier for a process that notifies endpoint security that it is attaching to another process.
- [ES_EVENT_TYPE_NOTIFY_TRUNCATE](es_event_type_notify_truncate.md): An identifier for a process that notifies endpoint security that it is truncating a file.
- [ES_EVENT_TYPE_NOTIFY_UIPC_BIND](es_event_type_notify_uipc_bind.md): An identifier for a process that notifies endpoint security that it is binding a UNIX domain socket.
- [ES_EVENT_TYPE_NOTIFY_UIPC_CONNECT](es_event_type_notify_uipc_connect.md): An identifier for a process that notifies endpoint security that it is connecting to a UNIX domain socket.
- [ES_EVENT_TYPE_NOTIFY_UNLINK](es_event_type_notify_unlink.md): An identifier for a process that notifies endpoint security that it is deleting a file.
- [ES_EVENT_TYPE_NOTIFY_UNMOUNT](es_event_type_notify_unmount.md): An identifier for a process that notifies endpoint security that it is unmounting a file system.
- [ES_EVENT_TYPE_NOTIFY_UTIMES](es_event_type_notify_utimes.md): An identifier for a process that notifies endpoint security that it is changing a file’s access or modification time.
- [ES_EVENT_TYPE_NOTIFY_WRITE](es_event_type_notify_write.md): An identifier for a process that notifies endpoint security that it is writing data to a file.

### Enumeration Marker

- [ES_EVENT_TYPE_LAST](es_event_type_last.md): A value that indicates the last member of the enumeration.

### Initializers

- [init(\_:)](es_event_type_t/init%28__%29.md)
- [init(rawValue:)](es_event_type_t/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](es_event_type_t/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Subscribing to Events

- [es_subscribe(\_:\_:\_:)](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions(\_:\_:\_:)](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe(\_:\_:\_:)](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_unsubscribe_all(\_:)](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.

# es_event_type_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

A type used to identify a message’s event type and subscribe to events of that type.

## Declaration

```objectivec
typedef enum { ... } es_event_type_t;
```

<a id="overview"></a>

## Overview

Call the [es_subscribe](es_subscribe%28______%29.md) function with the constants defined by this type to subscribe to specific Endpoint Security events.

You also use this type when inspecting a received message. The [es_message_t](es_message_t.md) member [event_type](es_message_t/event_type.md), which is of this type, indicates what kind of event the [event](es_message_t/event.md) field contains.

## Topics

### Authorization Event Types

- [ES_EVENT_TYPE_AUTH_CHDIR](es_event_type_auth_chdir.md): An identifier for a process that requests permission from the operating system to change the working directory for the process.
- [ES_EVENT_TYPE_AUTH_CHROOT](es_event_type_auth_chroot.md): An identifier for a process that requests permission from the operating system to change the root directory for the process.
- [ES_EVENT_TYPE_AUTH_CLONE](es_event_type_auth_clone.md): An identifier for a process that requests permission from the operating system to clone a file.
- [ES_EVENT_TYPE_AUTH_COPYFILE](es_event_type_auth_copyfile.md): An identifier for a process that requests permission from the operating system to copy a file.
- [ES_EVENT_TYPE_AUTH_CREATE](es_event_type_auth_create.md): An identifier for a process that requests permission from the operating system to create a file.
- [ES_EVENT_TYPE_AUTH_DELETEEXTATTR](es_event_type_auth_deleteextattr.md): An identifier for a process that requests permission from the operating system to delete an extended attribute from a file.
- [ES_EVENT_TYPE_AUTH_EXCHANGEDATA](es_event_type_auth_exchangedata.md): An identifier for a process that requests permission from the operating system to exchange data between two files.
- [ES_EVENT_TYPE_AUTH_EXEC](es_event_type_auth_exec.md): An identifier for a process that requests permission from the operating system to execute another image.
- [ES_EVENT_TYPE_AUTH_FCNTL](es_event_type_auth_fcntl.md): An identifier for a process that requests permission from the operating system to manipulate a file descriptor.
- [ES_EVENT_TYPE_AUTH_FILE_PROVIDER_MATERIALIZE](es_event_type_auth_file_provider_materialize.md): An identifier for a process that requests permission for a file provider to return a reference to a file.
- [ES_EVENT_TYPE_AUTH_FILE_PROVIDER_UPDATE](es_event_type_auth_file_provider_update.md): An identifier for a process that requests permission from the operating system to update a file.
- [ES_EVENT_TYPE_AUTH_FSGETPATH](es_event_type_auth_fsgetpath.md): An identifier for a process that requests permission from the operating system to retrieve a file system path.
- [ES_EVENT_TYPE_AUTH_GET_TASK](es_event_type_auth_get_task.md): An identifier for a process that requests permission from the operating system to retrieve a process’s task control port.
- [ES_EVENT_TYPE_AUTH_GET_TASK_READ](es_event_type_auth_get_task_read.md): An identifier for a process that requests permission from the operating system to retrieve a process’s task read port.
- [ES_EVENT_TYPE_AUTH_GETATTRLIST](es_event_type_auth_getattrlist.md): An identifier for a process that requests permission from the operating system to retrieve attributes from a file.
- [ES_EVENT_TYPE_AUTH_GETEXTATTR](es_event_type_auth_getextattr.md): An identifier for a process that requests permission from the operating system to retrieve an extended attribute from a file.
- [ES_EVENT_TYPE_AUTH_IOKIT_OPEN](es_event_type_auth_iokit_open.md): An identifier for a process that requests permission from the operating system to open an IOKit device.
- [ES_EVENT_TYPE_AUTH_KEXTLOAD](es_event_type_auth_kextload.md): An identifier for a process that requests permission from the operating system to load a kernel extension (KEXT).
- [ES_EVENT_TYPE_AUTH_LINK](es_event_type_auth_link.md): An identifier for a process that requests permission from the operating system to create a hard link.
- [ES_EVENT_TYPE_AUTH_LISTEXTATTR](es_event_type_auth_listextattr.md): An identifier for a process that requests permission from the operating system to retrieve multiple extended attributes from a file.
- [ES_EVENT_TYPE_AUTH_MMAP](es_event_type_auth_mmap.md): An identifier for a process that requests permission from the operating system to map a file into memory.
- [ES_EVENT_TYPE_AUTH_MOUNT](es_event_type_auth_mount.md): An identifier for a process that requests permission from the operating system to mount a file system.
- [ES_EVENT_TYPE_AUTH_MPROTECT](es_event_type_auth_mprotect.md): An identifier for a process that requests permission from the operating system to change the protection of memory-mapped pages.
- [ES_EVENT_TYPE_AUTH_OPEN](es_event_type_auth_open.md): An identifier for a process that requests permission from the operating system to open a file.
- [ES_EVENT_TYPE_AUTH_PROC_CHECK](es_event_type_auth_proc_check.md): An identifier for a process that requests permission from the operating system to get information about a process.
- [ES_EVENT_TYPE_AUTH_PROC_SUSPEND_RESUME](es_event_type_auth_proc_suspend_resume.md): An identifier for a process that requests permission from the operating system to suspend, resume, or shut down sockets for another process.
- [ES_EVENT_TYPE_AUTH_READDIR](es_event_type_auth_readdir.md): An identifier for a process that requests permission from the operating system to read a file system directory.
- [ES_EVENT_TYPE_AUTH_READLINK](es_event_type_auth_readlink.md): An identifier for a process that requests permission from the operating system to read a symbolic link.
- [ES_EVENT_TYPE_AUTH_REMOUNT](es_event_type_auth_remount.md): An identifier for a process that requests permission from the operating system to mount a file system.
- [ES_EVENT_TYPE_AUTH_RENAME](es_event_type_auth_rename.md): An identifier for a process that requests permission from the operating system to rename a file.
- [ES_EVENT_TYPE_AUTH_SEARCHFS](es_event_type_auth_searchfs.md): An identifier for a process that requests permission from the operating system to search a volume or mounted file system.
- [ES_EVENT_TYPE_AUTH_SETACL](es_event_type_auth_setacl.md): An identifier for a process that requests permission from the operating system to set a file’s access control list.
- [ES_EVENT_TYPE_AUTH_SETATTRLIST](es_event_type_auth_setattrlist.md): An identifier for a process that requests permission from the operating system to set attributes of a file.
- [ES_EVENT_TYPE_AUTH_SETEXTATTR](es_event_type_auth_setextattr.md): An identifier for a process that requests permission from the operating system to set an extended attribute of a file.
- [ES_EVENT_TYPE_AUTH_SETFLAGS](es_event_type_auth_setflags.md): An identifier for a process that requests permission from the operating system to set a file’s flags.
- [ES_EVENT_TYPE_AUTH_SETMODE](es_event_type_auth_setmode.md): An identifier for a process that requests permission from the operating system to set a file’s mode.
- [ES_EVENT_TYPE_AUTH_SETOWNER](es_event_type_auth_setowner.md): An identifier for a process that requests permission from the operating system to set a file’s owner.
- [ES_EVENT_TYPE_AUTH_SETTIME](es_event_type_auth_settime.md): An identifier for a process that requests permission from the operating system to modify the system time.
- [ES_EVENT_TYPE_AUTH_SIGNAL](es_event_type_auth_signal.md): An identifier for a process that requests permission from the operating system to send a signal to a process.
- [ES_EVENT_TYPE_AUTH_TRUNCATE](es_event_type_auth_truncate.md): An identifier for a process that requests permission from the operating system to truncate a file.
- [ES_EVENT_TYPE_AUTH_UIPC_BIND](es_event_type_auth_uipc_bind.md): An identifier for a process that requests permission from the operating system to bind a UNIX domain socket.
- [ES_EVENT_TYPE_AUTH_UIPC_CONNECT](es_event_type_auth_uipc_connect.md): An identifier for a process that requests permission from the operating system to connect a UNIX domain socket.
- [ES_EVENT_TYPE_AUTH_UNLINK](es_event_type_auth_unlink.md): An identifier for a process that requests permission from the operating system to delete a file.
- [ES_EVENT_TYPE_AUTH_UTIMES](es_event_type_auth_utimes.md): An identifier for a process that requests permission from the operating system to change a file’s access or modification time.

### Notification Event Types

- [ES_EVENT_TYPE_NOTIFY_ACCESS](es_event_type_notify_access.md): An identifier for a process that notifies endpoint security that it is checking a file’s access permission.
- [ES_EVENT_TYPE_NOTIFY_CHDIR](es_event_type_notify_chdir.md): An identifier for a process that notifies endpoint security that it is changing the working directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CHROOT](es_event_type_notify_chroot.md): An identifier for a process that notifies endpoint security that it is changing the root directory for the process.
- [ES_EVENT_TYPE_NOTIFY_CLONE](es_event_type_notify_clone.md): An identifier for a process that notifies endpoint security that it is cloning a file.
- [ES_EVENT_TYPE_NOTIFY_CLOSE](es_event_type_notify_close.md): An identifier for a process that notifies endpoint security that it is closing a file.
- [ES_EVENT_TYPE_NOTIFY_COPYFILE](es_event_type_notify_copyfile.md): An identifier for a process that notifies endpoint security that it is copying a file.
- [ES_EVENT_TYPE_NOTIFY_CREATE](es_event_type_notify_create.md): An identifier for a process that notifies endpoint security that it is creating a file.
- [ES_EVENT_TYPE_NOTIFY_CS_INVALIDATED](es_event_type_notify_cs_invalidated.md): An identifier for a process that notifies endpoint security that its code signing status is now invalid.
- [ES_EVENT_TYPE_NOTIFY_DELETEEXTATTR](es_event_type_notify_deleteextattr.md): An identifier for a process that notifies endpoint security that it is deleting an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_DUP](es_event_type_notify_dup.md): An identifier for a process that notifies endpoint security that it is duplicating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_EXCHANGEDATA](es_event_type_notify_exchangedata.md): An identifier for a process that notifies endpoint security that it is exchanging data between two files.
- [ES_EVENT_TYPE_NOTIFY_EXEC](es_event_type_notify_exec.md): An identifier for a process that notifies endpoint security that it is executing an image.
- [ES_EVENT_TYPE_NOTIFY_EXIT](es_event_type_notify_exit.md): An identifier for a process that notifies endpoint security that it is exiting.
- [ES_EVENT_TYPE_NOTIFY_FCNTL](es_event_type_notify_fcntl.md): An identifier for a process that notifies endpoint security that it is manipulating a file descriptor.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_MATERIALIZE](es_event_type_notify_file_provider_materialize.md): An identifier for a process that notifies endpoint security that a file provider returned a reference to a file.
- [ES_EVENT_TYPE_NOTIFY_FILE_PROVIDER_UPDATE](es_event_type_notify_file_provider_update.md): An identifier for a process that notifies endpoint security that it is updating a file.
- [ES_EVENT_TYPE_NOTIFY_FORK](es_event_type_notify_fork.md): An identifier for a process that notifies endpoint security that it is forking another process.
- [ES_EVENT_TYPE_NOTIFY_FSGETPATH](es_event_type_notify_fsgetpath.md): An identifier for a process that notifies endpoint security that it is retrieving a file system path.
- [ES_EVENT_TYPE_NOTIFY_GETATTRLIST](es_event_type_notify_getattrlist.md): An identifier for a process that notifies endpoint security that it is retrieving attributes from a file.
- [ES_EVENT_TYPE_NOTIFY_GETEXTATTR](es_event_type_notify_getextattr.md): An identifier for a process that notifies endpoint security that it is retrieving an extended attribute from a file.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK](es_event_type_notify_get_task.md): An identifier for a process that notifies endpoint security that it is retrieving the task control port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_READ](es_event_type_notify_get_task_read.md): An identifier for a process that notifies endpoint security that it is retrieving the task read port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_INSPECT](es_event_type_notify_get_task_inspect.md): An identifier for a process that notifies endpoint security that it is retrieving the task inspect port for another process.
- [ES_EVENT_TYPE_NOTIFY_GET_TASK_NAME](es_event_type_notify_get_task_name.md): An identifier for a process that notifies endpoint security that it is retrieving the task name port for another process.
- [ES_EVENT_TYPE_NOTIFY_IOKIT_OPEN](es_event_type_notify_iokit_open.md): An identifier for a process that notifies endpoint security that it is opening an IOKit device.
- [ES_EVENT_TYPE_NOTIFY_KEXTLOAD](es_event_type_notify_kextload.md): An identifier for a process that notifies endpoint security that it is loading a kernel extension (KEXT).
- [ES_EVENT_TYPE_NOTIFY_KEXTUNLOAD](es_event_type_notify_kextunload.md): An identifier for a process that notifies endpoint security that it is unloading a kernel extension (KEXT).
- [ES_EVENT_TYPE_NOTIFY_LINK](es_event_type_notify_link.md): An identifier for a process that notifies endpoint security that it is creating a hard link.
- [ES_EVENT_TYPE_NOTIFY_LISTEXTATTR](es_event_type_notify_listextattr.md): An identifier for a process that notifies endpoint security that it is retrieving multiple extended attributes from a file.
- [ES_EVENT_TYPE_NOTIFY_LOOKUP](es_event_type_notify_lookup.md): An identifier for a process that notifies endpoint security that it is looking up a file’s path.
- [ES_EVENT_TYPE_NOTIFY_MMAP](es_event_type_notify_mmap.md): An identifier for a process that notifies endpoint security that it is mapping a file into memory.
- [ES_EVENT_TYPE_NOTIFY_MOUNT](es_event_type_notify_mount.md): An identifier for a process that notifies endpoint security that it is mounting a file system.
- [ES_EVENT_TYPE_NOTIFY_MPROTECT](es_event_type_notify_mprotect.md): An identifier for a process that notifies endpoint security that it is changing the protection of memory-mapped pages.
- [ES_EVENT_TYPE_NOTIFY_OPEN](es_event_type_notify_open.md): An identifier for a process that notifies endpoint security that it is opening a file.
- [ES_EVENT_TYPE_NOTIFY_PROC_CHECK](es_event_type_notify_proc_check.md): An identifier for a process that notifies endpoint security that it is checking information about another process.
- [ES_EVENT_TYPE_NOTIFY_PROC_SUSPEND_RESUME](es_event_type_notify_proc_suspend_resume.md): An identifier for a process that notifies endpoint security that it is suspending, resuming, or shutting down sockets for another process.
- [ES_EVENT_TYPE_NOTIFY_PTY_CLOSE](es_event_type_notify_pty_close.md): An identifier for a process that notifies endpoint security that it is closing a pseudoterminal device.
- [ES_EVENT_TYPE_NOTIFY_PTY_GRANT](es_event_type_notify_pty_grant.md): An identifier for a process that notifies endpoint security that it is granting a pseudoterminal device to a user.
- [ES_EVENT_TYPE_NOTIFY_READDIR](es_event_type_notify_readdir.md): An identifier for a process that notifies endpoint security that it is reading a file system directory.
- [ES_EVENT_TYPE_NOTIFY_READLINK](es_event_type_notify_readlink.md): An identifier for a process that notifies endpoint security that it is reading a symbolic link.
- [ES_EVENT_TYPE_NOTIFY_REMOTE_THREAD_CREATE](es_event_type_notify_remote_thread_create.md): An identifier for a process that notifies endpoint security that it is spawning a thread in another process.
- [ES_EVENT_TYPE_NOTIFY_REMOUNT](es_event_type_notify_remount.md): An identifier for a process that notifies endpoint security that it is remounting a file system.
- [ES_EVENT_TYPE_NOTIFY_RENAME](es_event_type_notify_rename.md): An identifier for a process that notifies endpoint security that it is renaming a file.
- [ES_EVENT_TYPE_NOTIFY_SEARCHFS](es_event_type_notify_searchfs.md): An identifier for a process that notifies endpoint security that it is searching a volume or mounted file system.
- [ES_EVENT_TYPE_NOTIFY_SETACL](es_event_type_notify_setacl.md): An identifier for a process that notifies endpoint security that it is setting a file’s access control list.
- [ES_EVENT_TYPE_NOTIFY_SETATTRLIST](es_event_type_notify_setattrlist.md): An identifier for a process that notifies endpoint security that it is setting attributes of a file.
- [ES_EVENT_TYPE_NOTIFY_SETEGID](es_event_type_notify_setegid.md): An identifier for a process that notifies endpoint security that it is setting its effective group ID.
- [ES_EVENT_TYPE_NOTIFY_SETEUID](es_event_type_notify_seteuid.md): An identifier for a process that notifies endpoint security that it is setting its effective user ID.
- [ES_EVENT_TYPE_NOTIFY_SETEXTATTR](es_event_type_notify_setextattr.md): An identifier for a process that notifies endpoint security that it is setting an extended attribute of a file.
- [ES_EVENT_TYPE_NOTIFY_SETGID](es_event_type_notify_setgid.md): An identifier for a process that notifies endpoint security that it is setting its group ID.
- [ES_EVENT_TYPE_NOTIFY_SETFLAGS](es_event_type_notify_setflags.md): An identifier for a process that notifies endpoint security that it is setting a file’s flags.
- [ES_EVENT_TYPE_NOTIFY_SETMODE](es_event_type_notify_setmode.md): An identifier for a process that notifies endpoint security that it is setting a file’s mode.
- [ES_EVENT_TYPE_NOTIFY_SETOWNER](es_event_type_notify_setowner.md): An identifier for a process that notifies endpoint security that it is setting a file’s owner.
- [ES_EVENT_TYPE_NOTIFY_SETREGID](es_event_type_notify_setregid.md): An identifier for a process that notifies endpoint security that it is setting its real and effective group IDs.
- [ES_EVENT_TYPE_NOTIFY_SETREUID](es_event_type_notify_setreuid.md): An identifier for a process that notifies endpoint security that it is setting its real and effective user IDs.
- [ES_EVENT_TYPE_NOTIFY_SETTIME](es_event_type_notify_settime.md): An identifier for a process that notifies endpoint security that it is modifying the system time.
- [ES_EVENT_TYPE_NOTIFY_SETUID](es_event_type_notify_setuid.md): An identifier for a process that notifies endpoint security that it is setting its user ID.
- [ES_EVENT_TYPE_NOTIFY_SIGNAL](es_event_type_notify_signal.md): An identifier for a process that notifies endpoint security that it is sending a signal to another process.
- [ES_EVENT_TYPE_NOTIFY_STAT](es_event_type_notify_stat.md): An identifier for a process that notifies endpoint security that it is retrieving a file’s status.
- [ES_EVENT_TYPE_NOTIFY_TRACE](es_event_type_notify_trace.md): An identifier for a process that notifies endpoint security that it is attaching to another process.
- [ES_EVENT_TYPE_NOTIFY_TRUNCATE](es_event_type_notify_truncate.md): An identifier for a process that notifies endpoint security that it is truncating a file.
- [ES_EVENT_TYPE_NOTIFY_UIPC_BIND](es_event_type_notify_uipc_bind.md): An identifier for a process that notifies endpoint security that it is binding a UNIX domain socket.
- [ES_EVENT_TYPE_NOTIFY_UIPC_CONNECT](es_event_type_notify_uipc_connect.md): An identifier for a process that notifies endpoint security that it is connecting to a UNIX domain socket.
- [ES_EVENT_TYPE_NOTIFY_UNLINK](es_event_type_notify_unlink.md): An identifier for a process that notifies endpoint security that it is deleting a file.
- [ES_EVENT_TYPE_NOTIFY_UNMOUNT](es_event_type_notify_unmount.md): An identifier for a process that notifies endpoint security that it is unmounting a file system.
- [ES_EVENT_TYPE_NOTIFY_UTIMES](es_event_type_notify_utimes.md): An identifier for a process that notifies endpoint security that it is changing a file’s access or modification time.
- [ES_EVENT_TYPE_NOTIFY_WRITE](es_event_type_notify_write.md): An identifier for a process that notifies endpoint security that it is writing data to a file.

### Enumeration Marker

- [ES_EVENT_TYPE_LAST](es_event_type_last.md): A value that indicates the last member of the enumeration.

### Enumeration Cases

- [ES_EVENT_TYPE_AUTH_BOOTSTRAP_CHECK_IN](es_event_type_auth_bootstrap_check_in.md)
- [ES_EVENT_TYPE_AUTH_BOOTSTRAP_LOOK_UP](es_event_type_auth_bootstrap_look_up.md)
- [ES_EVENT_TYPE_AUTH_XPC_CONNECT](es_event_type_auth_xpc_connect.md)
- [ES_EVENT_TYPE_NOTIFY_BOOTSTRAP_CHECK_IN](es_event_type_notify_bootstrap_check_in.md)
- [ES_EVENT_TYPE_NOTIFY_BOOTSTRAP_LOOK_UP](es_event_type_notify_bootstrap_look_up.md)
- [ES_EVENT_TYPE_NOTIFY_TCC_MODIFY](es_event_type_notify_tcc_modify.md)
- [ES_EVENT_TYPE_RESERVED_0](es_event_type_reserved_0.md)
- [ES_EVENT_TYPE_RESERVED_1](es_event_type_reserved_1.md)
- [ES_EVENT_TYPE_RESERVED_2](es_event_type_reserved_2.md)
- [ES_EVENT_TYPE_RESERVED_3](es_event_type_reserved_3.md)
- [ES_EVENT_TYPE_RESERVED_4](es_event_type_reserved_4.md)
- [ES_EVENT_TYPE_RESERVED_5](es_event_type_reserved_5.md)
- [ES_EVENT_TYPE_RESERVED_6](es_event_type_reserved_6.md)
- [ES_EVENT_TYPE_RESERVED_7](es_event_type_reserved_7.md)
- [ES_EVENT_TYPE_RESERVED_8](es_event_type_reserved_8.md)

## See Also

### Subscribing to Events

- [es_subscribe](es_subscribe%28______%29.md): Subscribes a client to a set of events.
- [es_subscriptions](es_subscriptions%28______%29.md): Returns a list of the client’s subscriptions.
- [es_unsubscribe](es_unsubscribe%28______%29.md): Unsubscribes the provided client from a set of events.
- [es_unsubscribe_all](es_unsubscribe_all%28__%29.md): Unsubscribes a client from all events.
