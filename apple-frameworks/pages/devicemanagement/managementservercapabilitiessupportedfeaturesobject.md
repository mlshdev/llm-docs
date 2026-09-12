> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managementservercapabilitiessupportedfeaturesobject](https://developer.apple.com/documentation/devicemanagement/managementservercapabilitiessupportedfeaturesobject)

# ManagementServerCapabilitiesSupportedFeaturesObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains the server’s optional protocol features.

## Declaration

```
object ManagementServerCapabilitiesSupportedFeaturesObject
```

<a id="Discussion"></a>

## Discussion

Each dictionary item uses the key name to represent a feature, and the value to hold the feature’s associated parameters. This protocol reserves keys with a prefix of `com.apple.`, which appear as subkeys in this dictionary.
