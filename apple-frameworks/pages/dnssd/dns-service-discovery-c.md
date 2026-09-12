> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dns-service-discovery-c](https://developer.apple.com/documentation/dnssd/dns-service-discovery-c)

# DNS Service Discovery C (Swift)

**Framework:** dnssd  
**Kind:** API Collection

See the Overview section above for header-level documentation.

<a id="Overview"></a>

### Overview

<a id="Included-Headers"></a>

#### Included Headers

- [types.h](https://developer.apple.com/library/archive/documentation/Darwin/Reference/usr_APIs/types/index.html#//apple_ref/doc/header/types.h)
- [types.h](https://developer.apple.com/library/archive/documentation/Darwin/Reference/usr_APIs/types/index.html#//apple_ref/doc/header/types.h)
- “Tiano.h”
- \<windows.h\>
- \<stdint.h\>
- \<dispatch/dispatch.h\>

## Topics

### Version checking

- [DNSServiceGetProperty(\_:\_:\_:)](dnsservicegetproperty%28______%29.md): Gets the specified property of a service.

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceProcessResult(\_:)](dnsserviceprocessresult%28__%29.md): Reads a reply from the daemon, calling the appropriate application callback.
- [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.
- [DNSServiceRefSockFD(\_:)](dnsservicerefsockfd%28__%29.md): Accesses underlying Unix domain socket for an initialized DNSServiceRef.

### Unified lookup of both IPv4 and IPv6 addresses for a fully qualified hostname

- [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md): Queries for the IP address of a hostname by using either Multicast or Unicast DNS.

### TXT Record Parsing Functions

A typical calling sequence for TXT record parsing is something like:

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue(\_:\_:)](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey(\_:\_:\_:)](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount(\_:\_:)](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex(\_:\_:\_:\_:\_:\_:\_:)](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr(\_:\_:\_:\_:)](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.

### TXT Record Construction Functions

- [TXTRecordCreate(\_:\_:\_:)](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate(\_:)](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr(\_:)](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength(\_:)](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue(\_:\_:)](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue(\_:\_:\_:\_:)](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

### Special Purpose Calls

[DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md), [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md), [DNSServiceReconfirmRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsservicereconfirmrecord%28______________%29.md) (most applications will not use these)

- [DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md): Creates a connection to the daemon, allowing efficient registration of multiple individual records.
- [DNSServiceReconfirmRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsservicereconfirmrecord%28______________%29.md): Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).
- [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease(\_:\_:\_:\_:)](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.

### Service Registration

- [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord(\_:\_:\_:)](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.

### Service Discovery

- [DNSServiceBrowse(\_:\_:\_:\_:\_:\_:\_:)](dnsservicebrowse%28______________%29.md): Browses for available services.
- [DNSServiceResolve(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceresolve%28________________%29.md)

### Querying Individual Specific Records

- [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md): Query for an arbitrary DNS record.

### NAT Port Mapping

- [DNSServiceNATPortMappingCreate(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicenatportmappingcreate%28__________________%29.md): Requests a port mapping in the NAT gateway, which maps a port on the local machine to an external port on the NAT.

### General Utility Functions

- [DNSServiceConstructFullName(\_:\_:\_:\_:)](dnsserviceconstructfullname%28________%29.md): Concatenates a three-part domain name (as returned by the above callbacks) into a properly-escaped full domain name.

### Domain Enumeration

- [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md): Enumerates domains that are recommended for registration and browsing.

### Callbacks

See the Overview section above for header-level documentation.

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

### Data Types

See the Overview section above for header-level documentation.

- [DNSServiceErrorType](dnsserviceerrortype.md)
- [DNSServiceFlags](dnsserviceflags.md)
- [DNSServiceProtocol](dnsserviceprotocol.md)
- [TXTRecordRef](txtrecordref.md): Opaque internal data type that represents a DNS-SD TXT record.

### Constants

See the Overview section above for header-level documentation.

- [Constants for specifying an interface index](constants-for-specifying-an-interface-index.md)
- [Miscellaneous Defines](miscellaneous-defines.md)

## See Also

### Reference

- [dnssd Enumerations](dnssd-enumerations.md)
- [dnssd Functions](dnssd-functions.md)
- [dnssd Data Types](dnssd-data-types.md)
- [dnssd Constants](dnssd-constants.md)

# DNS Service Discovery C (Objective-C)

**Framework:** dnssd  
**Kind:** API Collection

See the Overview section above for header-level documentation.

<a id="Overview"></a>

### Overview

<a id="Included-Headers"></a>

#### Included Headers

- [types.h](https://developer.apple.com/library/archive/documentation/Darwin/Reference/usr_APIs/types/index.html#//apple_ref/doc/header/types.h)
- [types.h](https://developer.apple.com/library/archive/documentation/Darwin/Reference/usr_APIs/types/index.html#//apple_ref/doc/header/types.h)
- “Tiano.h”
- \<windows.h\>
- \<stdint.h\>
- \<dispatch/dispatch.h\>

## Topics

### Version checking

- [DNSServiceGetProperty](dnsservicegetproperty%28______%29.md): Gets the specified property of a service.

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceProcessResult](dnsserviceprocessresult%28__%29.md): Reads a reply from the daemon, calling the appropriate application callback.
- [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.
- [DNSServiceRefSockFD](dnsservicerefsockfd%28__%29.md): Accesses underlying Unix domain socket for an initialized DNSServiceRef.

### Unified lookup of both IPv4 and IPv6 addresses for a fully qualified hostname

- [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md): Queries for the IP address of a hostname by using either Multicast or Unicast DNS.

### TXT Record Parsing Functions

A typical calling sequence for TXT record parsing is something like:

- [DNSServiceCreateDelegateConnection](dnsservicecreatedelegateconnection.md): Create a delegate connection to the daemon allowing efficient registration of multiple individual records.
- [DNSServiceSetDispatchQueue](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.

### TXT Record Construction Functions

- [TXTRecordCreate](txtrecordcreate%28______%29.md): Creates a new empty TXTRecordRef referencing the specified storage.
- [TXTRecordDeallocate](txtrecorddeallocate%28__%29.md): Releases resources associated with a TXT record.
- [TXTRecordGetBytesPtr](txtrecordgetbytesptr%28__%29.md): Allows you to retrieve a pointer to the raw bytes within a TXTRecordRef.
- [TXTRecordGetLength](txtrecordgetlength%28__%29.md): Allows you to determine the length of the raw bytes within a TXTRecordRef.
- [TXTRecordRemoveValue](txtrecordremovevalue%28____%29.md): Removes a key from a TXTRecordRef.
- [TXTRecordSetValue](txtrecordsetvalue%28________%29.md): Adds a key (optionally with value) to a TXTRecordRef.

### Special Purpose Calls

[DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md), [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md), [DNSServiceReconfirmRecord](dnsservicereconfirmrecord%28______________%29.md) (most applications will not use these)

- [DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md): Creates a connection to the daemon, allowing efficient registration of multiple individual records.
- [DNSServiceReconfirmRecord](dnsservicereconfirmrecord%28______________%29.md): Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).
- [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.

### Service Registration

- [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.

### Service Discovery

- [DNSServiceBrowse](dnsservicebrowse%28______________%29.md): Browses for available services.
- [DNSServiceResolve](dnsserviceresolve%28________________%29.md)

### Querying Individual Specific Records

- [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md): Query for an arbitrary DNS record.

### NAT Port Mapping

- [DNSServiceNATPortMappingCreate](dnsservicenatportmappingcreate%28__________________%29.md): Requests a port mapping in the NAT gateway, which maps a port on the local machine to an external port on the NAT.

### General Utility Functions

- [DNSServiceConstructFullName](dnsserviceconstructfullname%28________%29.md): Concatenates a three-part domain name (as returned by the above callbacks) into a properly-escaped full domain name.

### Domain Enumeration

- [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md): Enumerates domains that are recommended for registration and browsing.

### Callbacks

See the Overview section above for header-level documentation.

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).

### Data Types

See the Overview section above for header-level documentation.

- [DNSServiceErrorType](dnsserviceerrortype.md)
- [DNSServiceFlags](dnsserviceflags.md)
- [DNSServiceProtocol](dnsserviceprotocol.md)
- [TXTRecordRef](txtrecordref.md): Opaque internal data type that represents a DNS-SD TXT record.

### Constants

See the Overview section above for header-level documentation.

- [Constants for specifying an interface index](constants-for-specifying-an-interface-index.md)
- [Miscellaneous Defines](miscellaneous-defines.md)

## See Also

### Reference

- [dnssd Enumerations](dnssd-enumerations.md)
- [dnssd Functions](dnssd-functions.md)
- [dnssd Data Types](dnssd-data-types.md)
- [dnssd Constants](dnssd-constants.md)
