> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolprovider/urlappendstringmap](https://developer.apple.com/documentation/networkextension/nefiltercontrolprovider/urlappendstringmap)

# urlAppendStringMap (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary containing strings to be appended to URLs.

## Declaration

```swift
var urlAppendStringMap: [String : String]? { get set }
```

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider determines that a string should be appended to the request URL for a new flow, it creates a [NEFilterNewFlowVerdict](../nefilternewflowverdict.md) object using the `URLAppendStringVerdictWithMapKey:` class method. The system uses the `URLAppendStringVerdictWithMapKey:` method to look up the corresponding string in this dictionary. The system then appends the string to the flow’s request URL.

## See Also

### Handling remediation

- [handleRemediation(for:completionHandler:)](handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](../nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](../nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](../nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](../nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](../nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](../nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.

# URLAppendStringMap (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary containing strings to be appended to URLs.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,NSString *> * URLAppendStringMap;
```

<a id="Discussion"></a>

## Discussion

When the Filter Data Provider determines that a string should be appended to the request URL for a new flow, it creates a [NEFilterNewFlowVerdict](../nefilternewflowverdict.md) object using the `URLAppendStringVerdictWithMapKey:` class method. The system uses the `URLAppendStringVerdictWithMapKey:` method to look up the corresponding string in this dictionary. The system then appends the string to the flow’s request URL.

## See Also

### Handling remediation

- [handleRemediationForFlow:completionHandler:](handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](../nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](../nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](../nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](../nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](../nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](../nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.
