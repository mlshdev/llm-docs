> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_events_t](https://developer.apple.com/documentation/endpointsecurity/es_events_t)

# es_events_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A C union of event-specific types.

## Declaration

```swift
struct es_events_t
```

<a id="overview"></a>

## Overview

Each event monitored by Endpoint Security delivers different properties to clients. For example, a file-renaming event provides source and target paths, while a process-forking event provides the process identifier of the new child process. This C `union` represents each kind of event as a unique member, each with a type specific to the kind of data it contains.

## Topics

### File-System Events

- [access](es_events_t/access.md): Properties of an event that indicates the checking of a file’s access permission.
- [clone](es_events_t/clone.md): Properties of an event that indicates the cloning of a file.
- [copyfile](es_events_t/copyfile.md): Properties of an event that indicates the cloning of a file.
- [close](es_events_t/close.md): Properties of an event that indicates the closing of a file.
- [create](es_events_t/create.md): Properties of an event that indicates the creation of a file.
- [dup](es_events_t/dup.md): Properties of an event that indicates the duplication of a file descriptor.
- [exchangedata](es_events_t/exchangedata.md): Properties of an event that indicates the exchange of data between two files.
- [fcntl](es_events_t/fcntl.md): Properties of an event that indicates the manipulation of a file descriptor.
- [open](es_events_t/open.md): Properties of an event that indicates the opening of a file.
- [rename](es_events_t/rename.md): Properties of an event that indicates the renaming of a file.
- [write](es_events_t/write.md): Properties of an event that indicates the writing of data to a file.
- [truncate](es_events_t/truncate.md): Properties of an event that indicates the truncation of a file.
- [lookup](es_events_t/lookup.md): Properties of an event that indicates the lookup of a file’s path.
- [searchfs](es_events_t/searchfs.md): Properties of an event that indicates a search operation on a volume or mounted file system.

### File Metadata Events

- [deleteextattr](es_events_t/deleteextattr.md): Properties of an event that indicates the deletion of an extended attribute from a file.
- [fsgetpath](es_events_t/fsgetpath.md): Properties of an event that indicates the retrieval of a file-system path.
- [getattrlist](es_events_t/getattrlist.md): Properties of an event that indicates the retrieval of attributes from a file.
- [getextattr](es_events_t/getextattr.md): Properties of an event that indicates the retrieval of an extended attribute from a file.
- [listextattr](es_events_t/listextattr.md): Properties of an event that indicates the retrieval of multiple extended attributes from a file.
- [readdir](es_events_t/readdir.md): Properties of an event that indicates the reading of a file-system directory.
- [setacl](es_events_t/setacl.md): Properties of an event that indicates the setting of a file’s access control list.
- [setattrlist](es_events_t/setattrlist.md): Properties of an event that indicates the setting of an attribute of a file.
- [setextattr](es_events_t/setextattr.md): Properties of an event that indicates the setting of an extended attribute of a file.
- [setflags](es_events_t/setflags.md): Properties of an event that indicates the setting of a file’s flags.
- [setmode](es_events_t/setmode.md): Properties of an event that indicates the setting of a file’s mode.
- [setowner](es_events_t/setowner.md): Properties of an event that indicates the setting of a file’s owner.
- [stat](es_events_t/stat.md): Properties of an event that indicates the retrieval of a file’s status.
- [utimes](es_events_t/utimes.md): Properties of an event that indicates a change to a file’s access time or modification time.

### File Provider Events

- [file_provider_materialize](es_events_t/file_provider_materialize.md): Properties of an event that indicates the materialization of a file provider.
- [file_provider_update](es_events_t/file_provider_update.md): Properties of an event that indicates an update to a file provider.

### Symbolic Link Events

- [link](es_events_t/link.md): Properties of an event that indicates the creation of a hard link.
- [readlink](es_events_t/readlink.md): Properties of an event that indicates the reading of a symbolic link.
- [unlink](es_events_t/unlink.md): Properties of an event that indicates the deletion of a file.

### File System Mounting Events

- [mount](es_events_t/mount.md): Properties of an event that indicates the mounting of a file system.
- [unmount](es_events_t/unmount.md): Properties of an event that indicates the unmounting of a file system.
- [remount](es_events_t/remount.md): Properties of an event that indicates the remounting of a file system.

### Memory Mapping Events

- [mmap](es_events_t/mmap.md): Properties of an event that indicates the mapping of memory to a file.
- [mprotect](es_events_t/mprotect.md): Properties of an event that indicates a change to protection of memory-mapped pages.

### Process Events

- [chdir](es_events_t/chdir.md): Properties of an event that indicates a change to a process’s working directory.
- [chroot](es_events_t/chroot.md): Properties of an event that indicates a change to a process’s root directory.
- [exec](es_events_t/exec.md): Properties of an event that indicates the execution of a process.
- [fork](es_events_t/fork.md): Properties of an event that indicates the forking of a process.
- [proc_check](es_events_t/proc_check.md): Properties of an event that indicate the retrieval of process information.
- [signal](es_events_t/signal.md): Properties of an event that indicates the sending of a signal to a process.
- [exit](es_events_t/exit.md): Properties of an event that indicates a process exiting.

### Interprocess Events

- [proc_suspend_resume](es_events_t/proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [trace](es_events_t/trace.md): Properties of an event that indicates an attempt by one process to attach to another.
- [remote_thread_create](es_events_t/remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.

### Task Port Events

- [get_task](es_events_t/get_task.md): Properties of an event that indicates the retrieval of a task’s control port.
- [get_task_read](es_events_t/get_task_read.md): Properties of an event that indicates the retrieval of a task’s read port.
- [get_task_inspect](es_events_t/get_task_inspect.md): Properties of an event that indicates the retrieval of a task’s inspect port.
- [get_task_name](es_events_t/get_task_name.md): Properties of an event that indicates the retrieval of a task’s name port.

### User and Group ID Events

- [setuid](es_events_t/setuid.md): Properties of an event that indicates a change to a process’s user ID.
- [setgid](es_events_t/setgid.md): Properties of an event that indicates a change to a process’s group ID.
- [seteuid](es_events_t/seteuid.md): Properties of an event that indicates a change to a process’s effective user ID.
- [setegid](es_events_t/setegid.md): Properties of an event that indicates a change to a process’s effective group ID.
- [setreuid](es_events_t/setreuid.md): Properties of an event that indicates a change to a process’s real and effective user IDs.
- [setregid](es_events_t/setregid.md): Properties of an event that indicates a change to a process’s real and effective group IDs.

### Code Signing Events

- [cs_invalidated](es_events_t/cs_invalidated.md): Properties of an event that indicates the invalidation of a process’s code signing status.

### Socket Events

- [uipc_bind](es_events_t/uipc_bind.md): Properties of an event that indicates the binding of a socket to a path.
- [uipc_connect](es_events_t/uipc_connect.md): Properties of an event that indicates the connection of a socket.

### Clock Events

- [settime](es_events_t/settime.md): Properties of an event that indicates the modification of the system time.

### Kernel Events

- [iokit_open](es_events_t/iokit_open.md): Properties of an event that indicates the opening of an IOKit device.
- [kextload](es_events_t/kextload.md): Properties of an event that indicates the loading of a Kernel Extension (KEXT).
- [kextunload](es_events_t/kextunload.md): Properties of an event that indicates the unloading of a Kernel Extension (KEXT).

### Pseudoterminal Events

- [pty_close](es_events_t/pty_close.md): Properties of the event that indicates the closing of a pseudoterminal device.
- [pty_grant](es_events_t/pty_grant.md): Properties of the event that indicates the granting of a pseudoterminal device to a user.

### Initializers

- [init(access:)](es_events_t/init%28access_%29.md)
- [init(authentication:)](es_events_t/init%28authentication_%29.md)
- [init(authorization_judgement:)](es_events_t/init%28authorization_judgement_%29.md)
- [init(authorization_petition:)](es_events_t/init%28authorization_petition_%29.md)
- [init(bootstrap_check_in:)](es_events_t/init%28bootstrap_check_in_%29.md)
- [init(bootstrap_look_up:)](es_events_t/init%28bootstrap_look_up_%29.md)
- [init(btm_launch_item_add:)](es_events_t/init%28btm_launch_item_add_%29.md)
- [init(btm_launch_item_remove:)](es_events_t/init%28btm_launch_item_remove_%29.md)
- [init(chdir:)](es_events_t/init%28chdir_%29.md)
- [init(chroot:)](es_events_t/init%28chroot_%29.md)
- [init(clone:)](es_events_t/init%28clone_%29.md)
- [init(close:)](es_events_t/init%28close_%29.md)
- [init(copyfile:)](es_events_t/init%28copyfile_%29.md)
- [init(create:)](es_events_t/init%28create_%29.md)
- [init(cs_invalidated:)](es_events_t/init%28cs_invalidated_%29.md)
- [init(deleteextattr:)](es_events_t/init%28deleteextattr_%29.md)
- [init(dup:)](es_events_t/init%28dup_%29.md)
- [init(exchangedata:)](es_events_t/init%28exchangedata_%29.md)
- [init(exec:)](es_events_t/init%28exec_%29.md)
- [init(exit:)](es_events_t/init%28exit_%29.md)
- [init(fcntl:)](es_events_t/init%28fcntl_%29.md)
- [init(file_provider_materialize:)](es_events_t/init%28file_provider_materialize_%29.md)
- [init(file_provider_update:)](es_events_t/init%28file_provider_update_%29.md)
- [init(fork:)](es_events_t/init%28fork_%29.md)
- [init(fsgetpath:)](es_events_t/init%28fsgetpath_%29.md)
- [init(gatekeeper_user_override:)](es_events_t/init%28gatekeeper_user_override_%29.md)
- [init(get_task:)](es_events_t/init%28get_task_%29.md)
- [init(get_task_inspect:)](es_events_t/init%28get_task_inspect_%29.md)
- [init(get_task_name:)](es_events_t/init%28get_task_name_%29.md)
- [init(get_task_read:)](es_events_t/init%28get_task_read_%29.md)
- [init(getattrlist:)](es_events_t/init%28getattrlist_%29.md)
- [init(getextattr:)](es_events_t/init%28getextattr_%29.md)
- [init(iokit_open:)](es_events_t/init%28iokit_open_%29.md)
- [init(kextload:)](es_events_t/init%28kextload_%29.md)
- [init(kextunload:)](es_events_t/init%28kextunload_%29.md)
- [init(link:)](es_events_t/init%28link_%29.md)
- [init(listextattr:)](es_events_t/init%28listextattr_%29.md)
- [init(login_login:)](es_events_t/init%28login_login_%29.md)
- [init(login_logout:)](es_events_t/init%28login_logout_%29.md)
- [init(lookup:)](es_events_t/init%28lookup_%29.md)
- [init(lw_session_lock:)](es_events_t/init%28lw_session_lock_%29.md)
- [init(lw_session_login:)](es_events_t/init%28lw_session_login_%29.md)
- [init(lw_session_logout:)](es_events_t/init%28lw_session_logout_%29.md)
- [init(lw_session_unlock:)](es_events_t/init%28lw_session_unlock_%29.md)
- [init(mmap:)](es_events_t/init%28mmap_%29.md)
- [init(mount:)](es_events_t/init%28mount_%29.md)
- [init(mprotect:)](es_events_t/init%28mprotect_%29.md)
- [init(od_attribute_set:)](es_events_t/init%28od_attribute_set_%29.md)
- [init(od_attribute_value_add:)](es_events_t/init%28od_attribute_value_add_%29.md)
- [init(od_attribute_value_remove:)](es_events_t/init%28od_attribute_value_remove_%29.md)
- [init(od_create_group:)](es_events_t/init%28od_create_group_%29.md)
- [init(od_create_user:)](es_events_t/init%28od_create_user_%29.md)
- [init(od_delete_group:)](es_events_t/init%28od_delete_group_%29.md)
- [init(od_delete_user:)](es_events_t/init%28od_delete_user_%29.md)
- [init(od_disable_user:)](es_events_t/init%28od_disable_user_%29.md)
- [init(od_enable_user:)](es_events_t/init%28od_enable_user_%29.md)
- [init(od_group_add:)](es_events_t/init%28od_group_add_%29.md)
- [init(od_group_remove:)](es_events_t/init%28od_group_remove_%29.md)
- [init(od_group_set:)](es_events_t/init%28od_group_set_%29.md)
- [init(od_modify_password:)](es_events_t/init%28od_modify_password_%29.md)
- [init(open:)](es_events_t/init%28open_%29.md)
- [init(openssh_login:)](es_events_t/init%28openssh_login_%29.md)
- [init(openssh_logout:)](es_events_t/init%28openssh_logout_%29.md)
- [init(proc_check:)](es_events_t/init%28proc_check_%29.md)
- [init(proc_suspend_resume:)](es_events_t/init%28proc_suspend_resume_%29.md)
- [init(profile_add:)](es_events_t/init%28profile_add_%29.md)
- [init(profile_remove:)](es_events_t/init%28profile_remove_%29.md)
- [init(pty_close:)](es_events_t/init%28pty_close_%29.md)
- [init(pty_grant:)](es_events_t/init%28pty_grant_%29.md)
- [init(readdir:)](es_events_t/init%28readdir_%29.md)
- [init(readlink:)](es_events_t/init%28readlink_%29.md)
- [init(remote_thread_create:)](es_events_t/init%28remote_thread_create_%29.md)
- [init(remount:)](es_events_t/init%28remount_%29.md)
- [init(rename:)](es_events_t/init%28rename_%29.md)
- [init(screensharing_attach:)](es_events_t/init%28screensharing_attach_%29.md)
- [init(screensharing_detach:)](es_events_t/init%28screensharing_detach_%29.md)
- [init(searchfs:)](es_events_t/init%28searchfs_%29.md)
- [init(setacl:)](es_events_t/init%28setacl_%29.md)
- [init(setattrlist:)](es_events_t/init%28setattrlist_%29.md)
- [init(setegid:)](es_events_t/init%28setegid_%29.md)
- [init(seteuid:)](es_events_t/init%28seteuid_%29.md)
- [init(setextattr:)](es_events_t/init%28setextattr_%29.md)
- [init(setflags:)](es_events_t/init%28setflags_%29.md)
- [init(setgid:)](es_events_t/init%28setgid_%29.md)
- [init(setmode:)](es_events_t/init%28setmode_%29.md)
- [init(setowner:)](es_events_t/init%28setowner_%29.md)
- [init(setregid:)](es_events_t/init%28setregid_%29.md)
- [init(setreuid:)](es_events_t/init%28setreuid_%29.md)
- [init(settime:)](es_events_t/init%28settime_%29.md)
- [init(setuid:)](es_events_t/init%28setuid_%29.md)
- [init(signal:)](es_events_t/init%28signal_%29.md)
- [init(stat:)](es_events_t/init%28stat_%29.md)
- [init(su:)](es_events_t/init%28su_%29.md)
- [init(sudo:)](es_events_t/init%28sudo_%29.md)
- [init(tcc_modify:)](es_events_t/init%28tcc_modify_%29.md)
- [init(trace:)](es_events_t/init%28trace_%29.md)
- [init(truncate:)](es_events_t/init%28truncate_%29.md)
- [init(uipc_bind:)](es_events_t/init%28uipc_bind_%29.md)
- [init(uipc_connect:)](es_events_t/init%28uipc_connect_%29.md)
- [init(unlink:)](es_events_t/init%28unlink_%29.md)
- [init(unmount:)](es_events_t/init%28unmount_%29.md)
- [init(utimes:)](es_events_t/init%28utimes_%29.md)
- [init(write:)](es_events_t/init%28write_%29.md)
- [init(xp_malware_detected:)](es_events_t/init%28xp_malware_detected_%29.md)
- [init(xp_malware_remediated:)](es_events_t/init%28xp_malware_remediated_%29.md)
- [init(xpc_connect:)](es_events_t/init%28xpc_connect_%29.md)

### Instance Properties

- [authentication](es_events_t/authentication.md)
- [authorization_judgement](es_events_t/authorization_judgement.md)
- [authorization_petition](es_events_t/authorization_petition.md)
- [bootstrap_check_in](es_events_t/bootstrap_check_in.md)
- [bootstrap_look_up](es_events_t/bootstrap_look_up.md)
- [btm_launch_item_add](es_events_t/btm_launch_item_add.md)
- [btm_launch_item_remove](es_events_t/btm_launch_item_remove.md)
- [gatekeeper_user_override](es_events_t/gatekeeper_user_override.md)
- [login_login](es_events_t/login_login.md)
- [login_logout](es_events_t/login_logout.md)
- [lw_session_lock](es_events_t/lw_session_lock.md)
- [lw_session_login](es_events_t/lw_session_login.md)
- [lw_session_logout](es_events_t/lw_session_logout.md)
- [lw_session_unlock](es_events_t/lw_session_unlock.md)
- [od_attribute_set](es_events_t/od_attribute_set.md)
- [od_attribute_value_add](es_events_t/od_attribute_value_add.md)
- [od_attribute_value_remove](es_events_t/od_attribute_value_remove.md)
- [od_create_group](es_events_t/od_create_group.md)
- [od_create_user](es_events_t/od_create_user.md)
- [od_delete_group](es_events_t/od_delete_group.md)
- [od_delete_user](es_events_t/od_delete_user.md)
- [od_disable_user](es_events_t/od_disable_user.md)
- [od_enable_user](es_events_t/od_enable_user.md)
- [od_group_add](es_events_t/od_group_add.md)
- [od_group_remove](es_events_t/od_group_remove.md)
- [od_group_set](es_events_t/od_group_set.md)
- [od_modify_password](es_events_t/od_modify_password.md)
- [openssh_login](es_events_t/openssh_login.md)
- [openssh_logout](es_events_t/openssh_logout.md)
- [profile_add](es_events_t/profile_add.md)
- [profile_remove](es_events_t/profile_remove.md)
- [screensharing_attach](es_events_t/screensharing_attach.md)
- [screensharing_detach](es_events_t/screensharing_detach.md)
- [su](es_events_t/su.md)
- [sudo](es_events_t/sudo.md)
- [tcc_modify](es_events_t/tcc_modify.md)
- [xp_malware_detected](es_events_t/xp_malware_detected.md)
- [xp_malware_remediated](es_events_t/xp_malware_remediated.md)
- [xpc_connect](es_events_t/xpc_connect.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Identifying the Matched Event

- [event](es_message_t/event.md): The event that triggered this message.
- [event_type](es_message_t/event_type.md): The type of the message’s event.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.

# es_events_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Union  
**Availability:** Mac Catalyst · macOS

A C union of event-specific types.

## Declaration

```objectivec
typedef union { ... } es_events_t;
```

<a id="overview"></a>

## Overview

Each event monitored by Endpoint Security delivers different properties to clients. For example, a file-renaming event provides source and target paths, while a process-forking event provides the process identifier of the new child process. This C `union` represents each kind of event as a unique member, each with a type specific to the kind of data it contains.

## Topics

### File-System Events

- [access](es_events_t/access.md): Properties of an event that indicates the checking of a file’s access permission.
- [clone](es_events_t/clone.md): Properties of an event that indicates the cloning of a file.
- [copyfile](es_events_t/copyfile.md): Properties of an event that indicates the cloning of a file.
- [close](es_events_t/close.md): Properties of an event that indicates the closing of a file.
- [create](es_events_t/create.md): Properties of an event that indicates the creation of a file.
- [dup](es_events_t/dup.md): Properties of an event that indicates the duplication of a file descriptor.
- [exchangedata](es_events_t/exchangedata.md): Properties of an event that indicates the exchange of data between two files.
- [fcntl](es_events_t/fcntl.md): Properties of an event that indicates the manipulation of a file descriptor.
- [open](es_events_t/open.md): Properties of an event that indicates the opening of a file.
- [rename](es_events_t/rename.md): Properties of an event that indicates the renaming of a file.
- [write](es_events_t/write.md): Properties of an event that indicates the writing of data to a file.
- [truncate](es_events_t/truncate.md): Properties of an event that indicates the truncation of a file.
- [lookup](es_events_t/lookup.md): Properties of an event that indicates the lookup of a file’s path.
- [searchfs](es_events_t/searchfs.md): Properties of an event that indicates a search operation on a volume or mounted file system.

### File Metadata Events

- [deleteextattr](es_events_t/deleteextattr.md): Properties of an event that indicates the deletion of an extended attribute from a file.
- [fsgetpath](es_events_t/fsgetpath.md): Properties of an event that indicates the retrieval of a file-system path.
- [getattrlist](es_events_t/getattrlist.md): Properties of an event that indicates the retrieval of attributes from a file.
- [getextattr](es_events_t/getextattr.md): Properties of an event that indicates the retrieval of an extended attribute from a file.
- [listextattr](es_events_t/listextattr.md): Properties of an event that indicates the retrieval of multiple extended attributes from a file.
- [readdir](es_events_t/readdir.md): Properties of an event that indicates the reading of a file-system directory.
- [setacl](es_events_t/setacl.md): Properties of an event that indicates the setting of a file’s access control list.
- [setattrlist](es_events_t/setattrlist.md): Properties of an event that indicates the setting of an attribute of a file.
- [setextattr](es_events_t/setextattr.md): Properties of an event that indicates the setting of an extended attribute of a file.
- [setflags](es_events_t/setflags.md): Properties of an event that indicates the setting of a file’s flags.
- [setmode](es_events_t/setmode.md): Properties of an event that indicates the setting of a file’s mode.
- [setowner](es_events_t/setowner.md): Properties of an event that indicates the setting of a file’s owner.
- [stat](es_events_t/stat.md): Properties of an event that indicates the retrieval of a file’s status.
- [utimes](es_events_t/utimes.md): Properties of an event that indicates a change to a file’s access time or modification time.

### File Provider Events

- [file_provider_materialize](es_events_t/file_provider_materialize.md): Properties of an event that indicates the materialization of a file provider.
- [file_provider_update](es_events_t/file_provider_update.md): Properties of an event that indicates an update to a file provider.

### Symbolic Link Events

- [link](es_events_t/link.md): Properties of an event that indicates the creation of a hard link.
- [readlink](es_events_t/readlink.md): Properties of an event that indicates the reading of a symbolic link.
- [unlink](es_events_t/unlink.md): Properties of an event that indicates the deletion of a file.

### File System Mounting Events

- [mount](es_events_t/mount.md): Properties of an event that indicates the mounting of a file system.
- [unmount](es_events_t/unmount.md): Properties of an event that indicates the unmounting of a file system.
- [remount](es_events_t/remount.md): Properties of an event that indicates the remounting of a file system.

### Memory Mapping Events

- [mmap](es_events_t/mmap.md): Properties of an event that indicates the mapping of memory to a file.
- [mprotect](es_events_t/mprotect.md): Properties of an event that indicates a change to protection of memory-mapped pages.

### Process Events

- [chdir](es_events_t/chdir.md): Properties of an event that indicates a change to a process’s working directory.
- [chroot](es_events_t/chroot.md): Properties of an event that indicates a change to a process’s root directory.
- [exec](es_events_t/exec.md): Properties of an event that indicates the execution of a process.
- [fork](es_events_t/fork.md): Properties of an event that indicates the forking of a process.
- [proc_check](es_events_t/proc_check.md): Properties of an event that indicate the retrieval of process information.
- [signal](es_events_t/signal.md): Properties of an event that indicates the sending of a signal to a process.
- [exit](es_events_t/exit.md): Properties of an event that indicates a process exiting.

### Interprocess Events

- [proc_suspend_resume](es_events_t/proc_suspend_resume.md): Properties of an event that indicates a call to suspend, resume, or shut down sockets for a process.
- [trace](es_events_t/trace.md): Properties of an event that indicates an attempt by one process to attach to another.
- [remote_thread_create](es_events_t/remote_thread_create.md): Properties of an event that indicates an attempt by one process to spawn a thread in another.

### Task Port Events

- [get_task](es_events_t/get_task.md): Properties of an event that indicates the retrieval of a task’s control port.
- [get_task_read](es_events_t/get_task_read.md): Properties of an event that indicates the retrieval of a task’s read port.
- [get_task_inspect](es_events_t/get_task_inspect.md): Properties of an event that indicates the retrieval of a task’s inspect port.
- [get_task_name](es_events_t/get_task_name.md): Properties of an event that indicates the retrieval of a task’s name port.

### User and Group ID Events

- [setuid](es_events_t/setuid.md): Properties of an event that indicates a change to a process’s user ID.
- [setgid](es_events_t/setgid.md): Properties of an event that indicates a change to a process’s group ID.
- [seteuid](es_events_t/seteuid.md): Properties of an event that indicates a change to a process’s effective user ID.
- [setegid](es_events_t/setegid.md): Properties of an event that indicates a change to a process’s effective group ID.
- [setreuid](es_events_t/setreuid.md): Properties of an event that indicates a change to a process’s real and effective user IDs.
- [setregid](es_events_t/setregid.md): Properties of an event that indicates a change to a process’s real and effective group IDs.

### Code Signing Events

- [cs_invalidated](es_events_t/cs_invalidated.md): Properties of an event that indicates the invalidation of a process’s code signing status.

### Socket Events

- [uipc_bind](es_events_t/uipc_bind.md): Properties of an event that indicates the binding of a socket to a path.
- [uipc_connect](es_events_t/uipc_connect.md): Properties of an event that indicates the connection of a socket.

### Clock Events

- [settime](es_events_t/settime.md): Properties of an event that indicates the modification of the system time.

### Kernel Events

- [iokit_open](es_events_t/iokit_open.md): Properties of an event that indicates the opening of an IOKit device.
- [kextload](es_events_t/kextload.md): Properties of an event that indicates the loading of a Kernel Extension (KEXT).
- [kextunload](es_events_t/kextunload.md): Properties of an event that indicates the unloading of a Kernel Extension (KEXT).

### Pseudoterminal Events

- [pty_close](es_events_t/pty_close.md): Properties of the event that indicates the closing of a pseudoterminal device.
- [pty_grant](es_events_t/pty_grant.md): Properties of the event that indicates the granting of a pseudoterminal device to a user.

### Instance Properties

- [authentication](es_events_t/authentication.md)
- [authorization_judgement](es_events_t/authorization_judgement.md)
- [authorization_petition](es_events_t/authorization_petition.md)
- [bootstrap_check_in](es_events_t/bootstrap_check_in.md)
- [bootstrap_look_up](es_events_t/bootstrap_look_up.md)
- [btm_launch_item_add](es_events_t/btm_launch_item_add.md)
- [btm_launch_item_remove](es_events_t/btm_launch_item_remove.md)
- [gatekeeper_user_override](es_events_t/gatekeeper_user_override.md)
- [login_login](es_events_t/login_login.md)
- [login_logout](es_events_t/login_logout.md)
- [lw_session_lock](es_events_t/lw_session_lock.md)
- [lw_session_login](es_events_t/lw_session_login.md)
- [lw_session_logout](es_events_t/lw_session_logout.md)
- [lw_session_unlock](es_events_t/lw_session_unlock.md)
- [od_attribute_set](es_events_t/od_attribute_set.md)
- [od_attribute_value_add](es_events_t/od_attribute_value_add.md)
- [od_attribute_value_remove](es_events_t/od_attribute_value_remove.md)
- [od_create_group](es_events_t/od_create_group.md)
- [od_create_user](es_events_t/od_create_user.md)
- [od_delete_group](es_events_t/od_delete_group.md)
- [od_delete_user](es_events_t/od_delete_user.md)
- [od_disable_user](es_events_t/od_disable_user.md)
- [od_enable_user](es_events_t/od_enable_user.md)
- [od_group_add](es_events_t/od_group_add.md)
- [od_group_remove](es_events_t/od_group_remove.md)
- [od_group_set](es_events_t/od_group_set.md)
- [od_modify_password](es_events_t/od_modify_password.md)
- [openssh_login](es_events_t/openssh_login.md)
- [openssh_logout](es_events_t/openssh_logout.md)
- [profile_add](es_events_t/profile_add.md)
- [profile_remove](es_events_t/profile_remove.md)
- [screensharing_attach](es_events_t/screensharing_attach.md)
- [screensharing_detach](es_events_t/screensharing_detach.md)
- [su](es_events_t/su.md)
- [sudo](es_events_t/sudo.md)
- [tcc_modify](es_events_t/tcc_modify.md)
- [xp_malware_detected](es_events_t/xp_malware_detected.md)
- [xp_malware_remediated](es_events_t/xp_malware_remediated.md)
- [xpc_connect](es_events_t/xpc_connect.md)

## See Also

### Identifying the Matched Event

- [event](es_message_t/event.md): The event that triggered this message.
- [event_type](es_message_t/event_type.md): The type of the message’s event.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
