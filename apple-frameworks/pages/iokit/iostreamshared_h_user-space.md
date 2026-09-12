> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iostreamshared_h_user-space](https://developer.apple.com/documentation/iokit/iostreamshared_h_user-space)

# IOStreamShared.h User-Space

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

IOStream definitions shared between kernel and user space.

<a id="overview"></a>

## Overview

<a id="1674701"></a>

### Included Headers

- \<sys/cdefs.h\>
- \<IOKit/IOTypes.h\>

## Topics

### Data Types

- [IOStreamBufferID](https://developer.apple.com/documentation/kernel/iostreambufferid)
- [IOStreamBufferQueue](https://developer.apple.com/documentation/kernel/iostreambufferqueue)
- [IOStreamBufferQueueEntry](https://developer.apple.com/documentation/kernel/iostreambufferqueueentry)

### Constants

- [IOStream open options](1470521-iostream_open_options.md)
- [Mach port types](1470560-mach_port_types.md): Port types used with IOConnectSetNotificationPort().
- [Memory mapping types](1470594-memory_mapping_types.md): Memory types used with IOConnectMapMemory().
- [User client methods](1470525-user_client_methods.md): Client method numbers used with IOConnectMethod...() functions.
- [User client traps](1470580-user_client_traps.md): Client trap numbers used with IOConnectTrap..() functions.
