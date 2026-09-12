> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/tokenexpirymessage](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/tokenexpirymessage)

# ManagedSettingsStore.TokenExpiryMessage

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

A message that is posted in NotificationCenter when ManagedSettingsStore tokens are expired

## Declaration

```swift
struct TokenExpiryMessage
```

<a id="overview"></a>

## Overview

Use these messages to refresh tokens in your database that are expired

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](https://developer.apple.com/documentation/foundation/notificationcenter/asyncmessage)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
