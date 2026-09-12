> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klsquarantineoriginurlkey](https://developer.apple.com/documentation/coreservices/klsquarantineoriginurlkey)

# kLSQuarantineOriginURLKey (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The URL of the resource originally hosting the quarantined item.

## Declaration

```swift
let kLSQuarantineOriginURLKey: CFString
```

<a id="discussion"></a>

## Discussion

For web downloads, this property is the URL of the web page on which the user initiated the download. For attachments, this property is the URL of the resource to which the quarantined item was attached (e.g. the email message, calendar event, etc.). The origin URL may be a file URL for local resources, or a custom URL to which the quarantining app will respond when asked to open it. The quarantining app should respond by displaying the resource to the user. 

> **Note**

> The origin URL should not be set to the data URL, or the quarantining app may start downloading the file again if the user choses to view the origin URL while resolving a quarantine warning.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.

# kLSQuarantineOriginURLKey (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

The URL of the resource originally hosting the quarantined item.

## Declaration

```objectivec
const CFStringRef kLSQuarantineOriginURLKey;
```

<a id="discussion"></a>

## Discussion

For web downloads, this property is the URL of the web page on which the user initiated the download. For attachments, this property is the URL of the resource to which the quarantined item was attached (e.g. the email message, calendar event, etc.). The origin URL may be a file URL for local resources, or a custom URL to which the quarantining app will respond when asked to open it. The quarantining app should respond by displaying the resource to the user. 

> **Note**

> The origin URL should not be set to the data URL, or the quarantining app may start downloading the file again if the user choses to view the origin URL while resolving a quarantine warning.

## See Also

### Understanding the Quarantine Properties Dictionary

- [kLSQuarantineAgentBundleIdentifierKey](klsquarantineagentbundleidentifierkey.md): The bundle identifier of the quarantining agent.
- [kLSQuarantineAgentNameKey](klsquarantineagentnamekey.md): The app name of the quarantining agent.
- [kLSQuarantineTimeStampKey](klsquarantinetimestampkey.md): The date and time of the item’s quarantine.
- [kLSQuarantineTypeKey](klsquarantinetypekey.md): A symbolic string identifying the reason for the quarantine.
- [kLSQuarantineDataURLKey](klsquarantinedataurlkey.md): The actual URL of the quarantined item.
