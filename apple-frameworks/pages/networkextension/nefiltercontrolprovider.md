> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltercontrolprovider](https://developer.apple.com/documentation/networkextension/nefiltercontrolprovider)

# NEFilterControlProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The principal class for a filter control provider extension.

## Declaration

```swift
class NEFilterControlProvider
```

<a id="overview"></a>

## Overview

The Filter Control Provider’s primary responsibility is to provide information to the associated Filter Data Provider so that it can perform its task of accurately filtering network content. There are several ways in which the Filter Control Provider provides data to the associated Filter Data Provider:

- By writing information to disk. For example, the Filter Control Provider can maintain a database of filtering rules on disk in a location where the Filter Data Provider can read from the database.
- By defining a dictionary that maps keys to sets of customization parameters to be used when generating the block page. The Filter Data Provider gives the system the key for the desired customization parameters, and the system uses that key to get the customization parameters from the Filter Control Provider and generate the customized block page.
- By defining a dictionary that maps keys to strings to be appended to URLs. The Filter Data Provider gives the system the key for the string to be appended, and the system uses that key to get the string to be appended from the Filter Control Provider and appends the string to the URL.

> **Important**

>  To use the [NEFilterControlProvider](nefiltercontrolprovider.md) class, you must enable the Network Extensions capability in Xcode and select the Content Filter capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

<a id="Creating-a-Filter-Control-Provider-Extension"></a>

### Creating a Filter Control Provider Extension

Filter Control Providers run as App Extensions for the `com.apple.networkextension.filter-control` extension point.

To create a Filter Control Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Filter Control Provider extension target, create a sub-class of `NEFilterControlProvider`. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.filter-control`.

Here is an example of the `NSExtension` dictionary in a Filter Control Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.filter-control</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomFilterControlProvider</string>
</dict>
```

Finally, add your Filter Control Provider extension target to your app’s Embed App Extensions build phase.

## Topics

### Handling requests for new rules

- [handleNewFlow(\_:completionHandler:)](nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md): Handle a request for new filtering rules.
- [notifyRulesChanged()](nefiltercontrolprovider/notifyruleschanged%28%29.md): Notify the Filter Data Provider that the filtering rules have changed on disk.

### Handling remediation

- [handleRemediation(for:completionHandler:)](nefiltercontrolprovider/handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](nefiltercontrolprovider/remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.
- [urlAppendStringMap](nefiltercontrolprovider/urlappendstringmap.md): A dictionary containing strings to be appended to URLs.

## Relationships

### Inherits From

- [NEFilterProvider](nefilterprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.

# NEFilterControlProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The principal class for a filter control provider extension.

## Declaration

```objectivec
@interface NEFilterControlProvider : NEFilterProvider
```

<a id="overview"></a>

## Overview

The Filter Control Provider’s primary responsibility is to provide information to the associated Filter Data Provider so that it can perform its task of accurately filtering network content. There are several ways in which the Filter Control Provider provides data to the associated Filter Data Provider:

- By writing information to disk. For example, the Filter Control Provider can maintain a database of filtering rules on disk in a location where the Filter Data Provider can read from the database.
- By defining a dictionary that maps keys to sets of customization parameters to be used when generating the block page. The Filter Data Provider gives the system the key for the desired customization parameters, and the system uses that key to get the customization parameters from the Filter Control Provider and generate the customized block page.
- By defining a dictionary that maps keys to strings to be appended to URLs. The Filter Data Provider gives the system the key for the string to be appended, and the system uses that key to get the string to be appended from the Filter Control Provider and appends the string to the URL.

> **Important**

>  To use the [NEFilterControlProvider](nefiltercontrolprovider.md) class, you must enable the Network Extensions capability in Xcode and select the Content Filter capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

<a id="Creating-a-Filter-Control-Provider-Extension"></a>

### Creating a Filter Control Provider Extension

Filter Control Providers run as App Extensions for the `com.apple.networkextension.filter-control` extension point.

To create a Filter Control Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Filter Control Provider extension target, create a sub-class of `NEFilterControlProvider`. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.filter-control`.

Here is an example of the `NSExtension` dictionary in a Filter Control Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.filter-control</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomFilterControlProvider</string>
</dict>
```

Finally, add your Filter Control Provider extension target to your app’s Embed App Extensions build phase.

## Topics

### Handling requests for new rules

- [handleNewFlow:completionHandler:](nefiltercontrolprovider/handlenewflow%28__completionhandler_%29.md): Handle a request for new filtering rules.
- [notifyRulesChanged](nefiltercontrolprovider/notifyruleschanged%28%29.md): Notify the Filter Data Provider that the filtering rules have changed on disk.

### Handling remediation

- [handleRemediationForFlow:completionHandler:](nefiltercontrolprovider/handleremediation%28for_completionhandler_%29.md): Handle a request for remediation from the user.
- [remediationMap](nefiltercontrolprovider/remediationmap.md): A dictionary containing sets of strings used to customize the remediation portion of the block page.
- [NEFilterProviderRemediationMapRemediationButtonTexts](nefilterproviderremediationmapremediationbuttontexts.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps button text string identifiers to the text to display for the remediation URL link in the block page. The button text string identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationMapRemediationURLs](nefilterproviderremediationmapremediationurls.md): A key in the [remediationMap](nefiltercontrolprovider/remediationmap.md) dictionary. The value of this key should be set to a dictionary that maps URL identifiers to remediation URLs to be inserted into the block page. The URL identifiers are defined by the Filter Control Provider app extension.
- [NEFilterProviderRemediationURLFlowURL](nefilterproviderremediationurlflowurl.md): This string will be replaced with the full URL of the flow.
- [NEFilterProviderRemediationURLFlowURLHostname](nefilterproviderremediationurlflowurlhostname.md): This string will be replaced with the hostname portion of the flow’s URL.
- [NEFilterProviderRemediationURLOrganization](nefilterproviderremediationurlorganization.md): This string will be replaced with the value of the organization property set in the filter configuration.
- [NEFilterProviderRemediationURLUsername](nefilterproviderremediationurlusername.md): This string will be replaced with the value of the username property set in the filter configuration.
- [URLAppendStringMap](nefiltercontrolprovider/urlappendstringmap.md): A dictionary containing strings to be appended to URLs.

## Relationships

### Inherits From

- [NEFilterProvider](nefilterprovider.md)

## See Also

### Data and control providers

- [NEFilterDataProvider](nefilterdataprovider.md): The principal class for a filter data provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.
