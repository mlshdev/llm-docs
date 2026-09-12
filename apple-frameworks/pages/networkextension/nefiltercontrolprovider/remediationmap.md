> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolprovider/remediationmap](https://developer.apple.com/documentation/networkextension/nefiltercontrolprovider/remediationmap)

# remediationMap (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary containing sets of strings used to customize the remediation portion of the block page.

## Declaration

```swift
var remediationMap: [String : [String : NSObject]]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each key in this dictionary corresponds to a string in the remediation portion of the block page. The value of each key is a dictionary that maps keys to the custom strings to be inserted into the block page. The keys for the sub-dictionaries are defined by the Filter Control Provider. When the Filter Data Provider creates a “remediate” verdict using \[[NEFilterDataVerdict](../nefilterdataverdict.md) `remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:`\], it specifies the keys corresponding to the desired custom strings to be inserted into the block page. The system then uses these keys to fetch the custom strings from this dictionary and inserts them into the block page.

Here is an example `remediationMap` dictionary:

```objc
self.remediationMap = @{
    NEFilterProviderRemediationMapRemediationURLs :
        @{
            @"RemediateKey1" : @"http://www.remediation_url_1.com",
            @"RemediateKey2" : @"http://www.remediation_url_2.com"
        },
    NEFilterProviderRemediationMapRemediationButtonTexts :
        @{
            @"RemediationButtonText1" : @"Give me access"
        }
};
```

With this example `remediationMap` dictionary, suppose that the Filter Data Provider wanted to present the user with a block page containing a link to `http://www.remediation_url_2.com` titled “Give me access”. In this case the Filter Data Provider would create a [NEFilterDataVerdict](../nefilterdataverdict.md) object like so:

```objc
NEFilterDataVerdict *newVerdict = [NEFilterDataVerdict remediateVerdictWithRemediationURLMapKey:@"RemediateKey2" 
                                                                    remediationButtonTextMapKey:@"RemediationButtonText1"];
```

## See Also

### Handling remediation

- [handleRemediation(for:completionHandler:)](handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [NEFilterProviderRemediationMapRemediationButtonTexts](../nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](../nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](../nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](../nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](../nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](../nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.
- [urlAppendStringMap](urlappendstringmap.md): A dictionary containing strings to be appended to URLs.

# remediationMap (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A dictionary containing sets of strings used to customize the remediation portion of the block page.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,NSDictionary<NSString *,NSObject *> *> * remediationMap;
```

<a id="Discussion"></a>

## Discussion

Each key in this dictionary corresponds to a string in the remediation portion of the block page. The value of each key is a dictionary that maps keys to the custom strings to be inserted into the block page. The keys for the sub-dictionaries are defined by the Filter Control Provider. When the Filter Data Provider creates a “remediate” verdict using \[[NEFilterDataVerdict](../nefilterdataverdict.md) `remediateVerdictWithRemediationURLMapKey:remediationButtonTextMapKey:`\], it specifies the keys corresponding to the desired custom strings to be inserted into the block page. The system then uses these keys to fetch the custom strings from this dictionary and inserts them into the block page.

Here is an example `remediationMap` dictionary:

```objc
self.remediationMap = @{
    NEFilterProviderRemediationMapRemediationURLs :
        @{
            @"RemediateKey1" : @"http://www.remediation_url_1.com",
            @"RemediateKey2" : @"http://www.remediation_url_2.com"
        },
    NEFilterProviderRemediationMapRemediationButtonTexts :
        @{
            @"RemediationButtonText1" : @"Give me access"
        }
};
```

With this example `remediationMap` dictionary, suppose that the Filter Data Provider wanted to present the user with a block page containing a link to `http://www.remediation_url_2.com` titled “Give me access”. In this case the Filter Data Provider would create a [NEFilterDataVerdict](../nefilterdataverdict.md) object like so:

```objc
NEFilterDataVerdict *newVerdict = [NEFilterDataVerdict remediateVerdictWithRemediationURLMapKey:@"RemediateKey2" 
                                                                    remediationButtonTextMapKey:@"RemediationButtonText1"];
```

## See Also

### Handling remediation

- [handleRemediationForFlow:completionHandler:](handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [NEFilterProviderRemediationMapRemediationButtonTexts](../nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](../nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](../nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](../nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](../nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](../nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.
- [URLAppendStringMap](urlappendstringmap.md): A dictionary containing strings to be appended to URLs.
