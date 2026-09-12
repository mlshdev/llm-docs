> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/distributed-objects-support](https://developer.apple.com/documentation/foundation/distributed-objects-support)

# Distributed Objects Support (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Enable communication among objects in different processes, both locally and on remote systems.

## Topics

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [MessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [PortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

## See Also

### Legacy

- [Objective-C Garbage Collection](objective-c-garbage-collection.md): Interface with the legacy garbage collection system.

# Distributed Objects Support (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Enable communication among objects in different processes, both locally and on remote systems.

## Topics

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
- [NSDistantObjectRequest](nsdistantobjectrequest.md): Deprecated. An object used by the distributed objects system to help handle invocations between different processes.
- [NSMachBootstrapServer](nsmachbootstrapserver.md): Deprecated. A port name server that takes and returns Mach port objects.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.

## See Also

### Legacy

- [Objective-C Garbage Collection](objective-c-garbage-collection.md): Interface with the legacy garbage collection system.
