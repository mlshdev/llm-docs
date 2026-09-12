> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicecreatedelegateconnection](https://developer.apple.com/documentation/dnssd/dnsservicecreatedelegateconnection)

# DNSServiceCreateDelegateConnection (Swift)

**Framework:** dnssd  
**Kind:** Article

Create a delegate connection to the daemon allowing efficient registration of multiple individual records.

<a id="overview"></a>

## Overview

```objc
DNSServiceErrorType DNSServiceCreateDelegateConnection (
   DNSServiceRef *sdRef,
   int32_t pid,
   uuid_t uuid
);
```

<a id="Parameters"></a>

## Parameters

**sdRef**

A pointer to an uninitialized DNSServiceRef. Deallocating the reference (via DNSServiceRefDeallocate()) severs the connection and deregisters all records registered on this connection.

**pid**

Process ID of the delegate

**uuid**

UUID of the delegate

Note that only one of the two arguments (pid or uuid) can be specified. If pid is zero, uuid will be assumed to be a valid value; otherwise pid will be used.

<a id="Return-Value"></a>

## Return Value

Returns kDNSServiceErr_NoError on success, otherwise returns an error code indicating the specific failure that occurred (in which case the DNSServiceRef is not initialized). kDNSServiceErr_NotAuth is returned to indicate that the calling process does not have entitlements to use this API.

## See Also

### TXT Record Parsing Functions

- [DNSServiceSetDispatchQueue(\_:\_:)](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey(\_:\_:\_:)](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount(\_:\_:)](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex(\_:\_:\_:\_:\_:\_:\_:)](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr(\_:\_:\_:\_:)](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.

# DNSServiceCreateDelegateConnection (Objective-C)

**Framework:** dnssd  
**Kind:** Article

Create a delegate connection to the daemon allowing efficient registration of multiple individual records.

<a id="overview"></a>

## Overview

```objc
DNSServiceErrorType DNSServiceCreateDelegateConnection (
   DNSServiceRef *sdRef,
   int32_t pid,
   uuid_t uuid
);
```

<a id="Parameters"></a>

## Parameters

**sdRef**

A pointer to an uninitialized DNSServiceRef. Deallocating the reference (via DNSServiceRefDeallocate()) severs the connection and deregisters all records registered on this connection.

**pid**

Process ID of the delegate

**uuid**

UUID of the delegate

Note that only one of the two arguments (pid or uuid) can be specified. If pid is zero, uuid will be assumed to be a valid value; otherwise pid will be used.

<a id="Return-Value"></a>

## Return Value

Returns kDNSServiceErr_NoError on success, otherwise returns an error code indicating the specific failure that occurred (in which case the DNSServiceRef is not initialized). kDNSServiceErr_NotAuth is returned to indicate that the calling process does not have entitlements to use this API.

## See Also

### TXT Record Parsing Functions

- [DNSServiceSetDispatchQueue](dnsservicesetdispatchqueue%28____%29.md): Allows you to schedule a DNSServiceRef on a serial dispatch queue for receiving asynchronous callbacks.
- [TXTRecordContainsKey](txtrecordcontainskey%28______%29.md): Allows you to determine if a given TXT Record contains a specified key.
- [TXTRecordGetCount](txtrecordgetcount%28____%29.md): Returns the number of keys stored in the TXT Record.
- [TXTRecordGetItemAtIndex](txtrecordgetitematindex%28______________%29.md): Allows you to retrieve a key name and value pointer, given an index into a TXT Record.
- [TXTRecordGetValuePtr](txtrecordgetvalueptr%28________%29.md): Allows you to retrieve the value for a given key from a TXT Record.
