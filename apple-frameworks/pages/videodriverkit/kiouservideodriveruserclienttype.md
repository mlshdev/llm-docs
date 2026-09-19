> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/kiouservideodriveruserclienttype

# kIOUserVideoDriverUserClientType

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Macro  
**Availability:** DriverKit 27.0+ beta

User client type required for connection to the Host.

## Declaration

```objectivec
#define kIOUserVideoDriverUserClientType
```

<a id="overview"></a>

## Overview

Passed as an argument to `IOService::NewUserClient` when Core Video Host is creating a new user client.
