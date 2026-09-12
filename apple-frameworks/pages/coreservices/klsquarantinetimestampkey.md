> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsquarantinetimestampkey](https://developer.apple.com/documentation/coreservices/klsquarantinetimestampkey)

# kLSQuarantineTimeStampKey (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The date and time of the item’s quarantine.

## Declaration

```swift
let kLSQuarantineTimeStampKey: CFString
```

<a id="discussion"></a>

## Discussion

When setting quarantine properties, this property is set automatically to the current date and time if this key is not present in the caller’s dictionary.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.

# kLSQuarantineTimeStampKey (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The date and time of the item’s quarantine.

## Declaration

```objectivec
const CFStringRef kLSQuarantineTimeStampKey;
```

<a id="discussion"></a>

## Discussion

When setting quarantine properties, this property is set automatically to the current date and time if this key is not present in the caller’s dictionary.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
- [kLSQuarantineOriginURLKey](klsquarantineoriginurlkey.md): The URL of the resource originally hosting the quarantined item.
