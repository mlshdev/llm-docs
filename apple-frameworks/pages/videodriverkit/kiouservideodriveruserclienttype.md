> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/kiouservideodriveruserclienttype](https://developer.apple.com/documentation/videodriverkit/kiouservideodriveruserclienttype)

# kIOUserVideoDriverUserClientType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Macro  
**Availability:** DriverKit 27.0+

User client type required for connection to the Host.

## Declaration

```objectivec
#define kIOUserVideoDriverUserClientType
```

<a id="overview"></a>

## Overview

Passed as an argument to `IOService::NewUserClient` when Core Video Host is creating a new user client.
