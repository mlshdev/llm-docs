> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsquarantineagentbundleidentifierkey](https://developer.apple.com/documentation/coreservices/klsquarantineagentbundleidentifierkey)

# kLSQuarantineAgentBundleIdentifierKey (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The bundle identifier of the quarantining agent.

## Declaration

```swift
let kLSQuarantineAgentBundleIdentifierKey: CFString
```

<a id="discussion"></a>

## Discussion

When setting quarantine properties, the bundle identifier is set automatically to the main bundle identifier of the current process if the key is not present in the caller’s dictionary.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.

# kLSQuarantineAgentBundleIdentifierKey (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The bundle identifier of the quarantining agent.

## Declaration

```objectivec
const CFStringRef kLSQuarantineAgentBundleIdentifierKey;
```

<a id="discussion"></a>

## Discussion

When setting quarantine properties, the bundle identifier is set automatically to the main bundle identifier of the current process if the key is not present in the caller’s dictionary.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.
