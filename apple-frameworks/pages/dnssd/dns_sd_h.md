> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dns_sd_h](https://developer.apple.com/documentation/dnssd/dns_sd_h)

# \_DNS_SD_H (Swift)

**Framework:** dnssd  
**Kind:** Article

API version number.

<a id="overview"></a>

## Overview

\_DNS_SD_H contains the mDNSResponder version number for this header file, formatted as follows:

Major part of the build number \* 10000 +

minor part of the build number \* 100

For example, OS X 10.4.9 has mDNSResponder-108.4, which would be represented as version 1080400. This allows C code to do simple greater-than and less-than comparisons: e.g. an application that requires the [DNSServiceGetProperty(\_:\_:\_:)](dnsservicegetproperty%28______%29.md) call (new in mDNSResponder-126) can check:

```objc
 
   #if _DNS_SD_H+0 >= 1260000
   ... some C code that calls DNSServiceGetProperty() ...
   #endif
 
```

The version defined in this header file symbol allows for compile-time checking, so that C code building with earlier versions of the header file can avoid compile errors trying to use functions that aren’t even defined in those earlier versions. Similar checks may also be performed at run-time:

- weak linking – to avoid link failures if run with an earlier version of the library that’s missing some desired symbol, or
- DNSServiceGetProperty(DaemonVersion) – to verify whether the running daemon (“system service” on Windows) meets some required minimum functionality level.

## See Also

### Constants

- [kDNSServiceMaxDomainName](kdnsservicemaxdomainname.md)
- [kDNSServiceMaxServiceName](kdnsservicemaxservicename.md)
- [kDNSServiceProperty_DaemonVersion](kdnsserviceproperty_daemonversion.md): The daemon version property.

# \_DNS_SD_H (Objective-C)

**Framework:** dnssd  
**Kind:** Article

API version number.

<a id="overview"></a>

## Overview

\_DNS_SD_H contains the mDNSResponder version number for this header file, formatted as follows:

Major part of the build number \* 10000 +

minor part of the build number \* 100

For example, OS X 10.4.9 has mDNSResponder-108.4, which would be represented as version 1080400. This allows C code to do simple greater-than and less-than comparisons: e.g. an application that requires the [DNSServiceGetProperty](dnsservicegetproperty%28______%29.md) call (new in mDNSResponder-126) can check:

```objc
 
   #if _DNS_SD_H+0 >= 1260000
   ... some C code that calls DNSServiceGetProperty() ...
   #endif
 
```

The version defined in this header file symbol allows for compile-time checking, so that C code building with earlier versions of the header file can avoid compile errors trying to use functions that aren’t even defined in those earlier versions. Similar checks may also be performed at run-time:

- weak linking – to avoid link failures if run with an earlier version of the library that’s missing some desired symbol, or
- DNSServiceGetProperty(DaemonVersion) – to verify whether the running daemon (“system service” on Windows) meets some required minimum functionality level.

## See Also

### Constants

- [kDNSServiceMaxDomainName](kdnsservicemaxdomainname.md)
- [kDNSServiceMaxServiceName](kdnsservicemaxservicename.md)
- [kDNSServiceProperty_DaemonVersion](kdnsserviceproperty_daemonversion.md): The daemon version property.
