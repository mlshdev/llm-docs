> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessoryfeature](https://developer.apple.com/documentation/accessorytransportextension/accessoryfeature)

# AccessoryFeature

**Framework:** Accessory Transport Extension  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that defines a capability for an accessory data provider extension.

## Declaration

```swift
protocol AccessoryFeature : Sendable, AppExtensionPoint.Capability
```

<a id="overview"></a>

## Overview

Implement this protocol to create a custom capability that your extension supports. Each feature has an associated handler type that processes events for that capability.

## Topics

### Identifying the feature

- [featureID](accessoryfeature/featureid.md): A string identifier for the feature.

## Relationships

### Inherits From

- [AppExtensionPoint.Capability](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data and sessions

- [AccessoryMessage](accessorymessage.md): A structure that represents a message to send to an accessory.
- [AccessorySecuritySession](accessorysecuritysession.md): A class that manages a security session between the extension and the system.
- [TransportMessage](transportmessage.md): A structure that represents a message for transmission between the system and an accessory.
- [SecurityMessage](securitymessage.md): A structure that carries key material for a secure channel between the system and an accessory.
- [AccessoryTransport](accessorytransport.md): Transport methods for communicating with an accessory.
