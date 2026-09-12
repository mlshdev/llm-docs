> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderremediationurlusername](https://developer.apple.com/documentation/networkextension/nefilterproviderremediationurlusername)

# NEFilterProviderRemediationURLUsername (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This string will be replaced with the value of the username property set in the filter configuration.

## Declaration

```swift
var NEFilterProviderRemediationURLUsername: String { get }
```

## See Also

### Handling remediation

- [handleRemediation(for:completionHandler:)](nefiltercontrolprovider/handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](nefiltercontrolprovider/remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [urlAppendStringMap](nefiltercontrolprovider/urlappendstringmap.md): A dictionary containing strings to be appended to URLs.

# NEFilterProviderRemediationURLUsername (Objective-C)

**Framework:** Network Extension  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

This string will be replaced with the value of the username property set in the filter configuration.

## Declaration

```objectivec
#define NEFilterProviderRemediationURLUsername
```

## See Also

### Handling remediation

- [handleRemediationForFlow:completionHandler:](nefiltercontrolprovider/handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](nefiltercontrolprovider/remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [URLAppendStringMap](nefiltercontrolprovider/urlappendstringmap.md): A dictionary containing strings to be appended to URLs.
