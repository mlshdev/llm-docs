> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceproperty_daemonversion](https://developer.apple.com/documentation/dnssd/kdnsserviceproperty_daemonversion)

# kDNSServiceProperty_DaemonVersion (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The daemon version property.

## Declaration

```swift
var kDNSServiceProperty_DaemonVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

When requesting [kDNSServiceProperty_DaemonVersion](kdnsserviceproperty_daemonversion.md), the result pointer must point to a 32-bit unsigned integer, and the size parameter must be set to sizeof(uint32_t).

On return, the 32-bit unsigned integer contains the version number, formatted as follows:

Major part of the build number \* 10000 +

minor part of the build number \* 100

For example, OS X 10.4.9 has mDNSResponder-108.4, which would be represented as version 1080400. This allows applications to do simple greater-than and less-than comparisons: e.g. an application that requires at least mDNSResponder-108.4 can check:

```objc
 
   if (version >= 1080400) ...
 
```

Example usage:

```objc
 
 
 uint32_t version;
 uint32_t size = sizeof(version);
 DNSServiceErrorType err = DNSServiceGetProperty(kDNSServiceProperty_DaemonVersion, &version, &size);
 if (!err) printf("Bonjour version is %d.%d\n", version / 10000, version / 100 % 100);
 
 
```

## See Also

### Constants

- [DNS_SD_ORIGINAL_ENCODING_VERSION_NUMBER_MAX](dns_sd_original_encoding_version_number_max.md)
- [kDNSServiceAttributeAAAAFallback](kdnsserviceattributeaaaafallback.md)
- [kDNSServiceInterfaceIndexAny](kdnsserviceinterfaceindexany.md)
- [kDNSServiceInterfaceIndexBLE](kdnsserviceinterfaceindexble.md)
- [kDNSServiceInterfaceIndexInfra](kdnsserviceinterfaceindexinfra.md)
- [kDNSServiceInterfaceIndexLocalOnly](kdnsserviceinterfaceindexlocalonly.md)
- [kDNSServiceInterfaceIndexP2P](kdnsserviceinterfaceindexp2p.md)
- [kDNSServiceInterfaceIndexUnicast](kdnsserviceinterfaceindexunicast.md)
- [kDNSServiceMaxDomainName](kdnsservicemaxdomainname.md)
- [kDNSServiceMaxServiceName](kdnsservicemaxservicename.md)

# kDNSServiceProperty_DaemonVersion (Objective-C)

**Framework:** dnssd  
**Kind:** Macro  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The daemon version property.

## Declaration

```objectivec
#define kDNSServiceProperty_DaemonVersion
```

<a id="Discussion"></a>

## Discussion

When requesting [kDNSServiceProperty_DaemonVersion](kdnsserviceproperty_daemonversion.md), the result pointer must point to a 32-bit unsigned integer, and the size parameter must be set to sizeof(uint32_t).

On return, the 32-bit unsigned integer contains the version number, formatted as follows:

Major part of the build number \* 10000 +

minor part of the build number \* 100

For example, OS X 10.4.9 has mDNSResponder-108.4, which would be represented as version 1080400. This allows applications to do simple greater-than and less-than comparisons: e.g. an application that requires at least mDNSResponder-108.4 can check:

```objc
 
   if (version >= 1080400) ...
 
```

Example usage:

```objc
 
 
 uint32_t version;
 uint32_t size = sizeof(version);
 DNSServiceErrorType err = DNSServiceGetProperty(kDNSServiceProperty_DaemonVersion, &version, &size);
 if (!err) printf("Bonjour version is %d.%d\n", version / 10000, version / 100 % 100);
 
 
```

## See Also

### Constants

- [DNS_SD_ORIGINAL_ENCODING_VERSION_NUMBER_MAX](dns_sd_original_encoding_version_number_max.md)
- [kDNSServiceAttributeAAAAFallback](kdnsserviceattributeaaaafallback.md)
- [kDNSServiceInterfaceIndexAny](kdnsserviceinterfaceindexany.md)
- [kDNSServiceInterfaceIndexBLE](kdnsserviceinterfaceindexble.md)
- [kDNSServiceInterfaceIndexInfra](kdnsserviceinterfaceindexinfra.md)
- [kDNSServiceInterfaceIndexLocalOnly](kdnsserviceinterfaceindexlocalonly.md)
- [kDNSServiceInterfaceIndexP2P](kdnsserviceinterfaceindexp2p.md)
- [kDNSServiceInterfaceIndexUnicast](kdnsserviceinterfaceindexunicast.md)
- [kDNSServiceMaxDomainName](kdnsservicemaxdomainname.md)
- [kDNSServiceMaxServiceName](kdnsservicemaxservicename.md)
