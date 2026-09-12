> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/result](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/result)

# AccessoryMessage.Result

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

An enumeration of results for message transmission.

## Declaration

```swift
enum Result
```

<a id="overview"></a>

## Overview

Pass values of this type to completion handlers in [AccessoryTransportSession.EventHandler](../accessorytransportsession/eventhandler.md) and [AccessorySecuritySession.EventHandler](../accessorysecuritysession/eventhandler.md) methods to indicate transmission outcomes.

## Topics

### Identifying result types

- [AccessoryMessage.Result.success](result/success.md): A result indicating successful message transmission to the accessory.
- [AccessoryMessage.Result.failure(\_:)](result/failure%28__%29.md): A result indicating message transmission failed.

## See Also

### Assessing outcomes

- [AccessoryMessage.Error](error.md): An enumeration of errors that can occur during message transmission.
