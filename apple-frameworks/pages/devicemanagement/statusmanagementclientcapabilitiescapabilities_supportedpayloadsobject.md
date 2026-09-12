> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmanagementclientcapabilitiescapabilities_supportedpayloadsobject](https://developer.apple.com/documentation/devicemanagement/statusmanagementclientcapabilitiescapabilities_supportedpayloadsobject)

# StatusManagementClientCapabilitiesCapabilities_SupportedPayloadsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A set of declaration and status items that the client supports.

## Declaration

```
object StatusManagementClientCapabilitiesCapabilities_SupportedPayloadsObject
```

## Properties

- `declarations` — `StatusManagementClientCapabilitiesCapabilities_SupportedPayloads_DeclarationsObject` (required): A set of declarations that the client supports.
- `status-items` — `[string]` (required): A list of status items that the client supports.

## Topics

### Objects

- [StatusManagementClientCapabilitiesCapabilities_SupportedPayloads_DeclarationsObject](statusmanagementclientcapabilitiescapabilities_supportedpayloads_declarationsobject.md): A set of declarations that the client supports.

## See Also

### Objects

- [StatusManagementClientCapabilitiesCapabilities_SupportedFeaturesObject](statusmanagementclientcapabilitiescapabilities_supportedfeaturesobject.md): A set of optional protocol features that the client supports. Each object’s key represents a feature, and the property value represents the feature’s associated parameters.
