> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider](https://developer.apple.com/documentation/networkextension/nefilterdataprovider)

# NEFilterDataProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The principal class for a filter data provider extension.

## Declaration

```swift
class NEFilterDataProvider
```

<a id="overview"></a>

## Overview

Network content is delivered to the Filter Data Provider in the form of [NEFilterFlow](nefilterflow.md) objects. Each [NEFilterFlow](nefilterflow.md) object corresponds to a network connection opened by an application running on the device. The Filter Data Provider can choose to pass or block the data when it receives a new flow, or it can ask the system to see more of the flow’s data in either the outbound or inbound direction before making a pass or block decision.

In addition to passing or blocking network data, the Filter Data Provider can tell the system that it needs more information before it can make a decision about a particular flow of data. The system will then ask the Filter Control Provider to update the current set of rules and place them in a location on disk that is readable from the Filter Data Provider extension.

When a [NEFilterFlow](nefilterflow.md) object is originated from a WebKit browser object, the Filter Data Provider can affect the user experience in the following ways:

- If the Filter Data Provider chooses to block the web page, then a special “block” page is displayed in the WebKit browser object informing the user that their attempt to access the content was blocked. The Filter Data Provider can choose to add a link to this block page, giving the user the option of requesting access to the content.
- If the Filter Data Provider chooses to allow the web page, then it can also specify that a string be appended to the web page URL. This allows the Filter Data Provider to direct the WebKit browser object to a “safe” version of the web page.

To protect the user’s privacy, the Filter Data Provider extension sandbox prevents the extension from moving network content outside of its address space.

> **Important**

>  To use the [handleNewFlow(\_:)](nefilterdataprovider/handlenewflow%28__%29.md) method, you must enable the Network Extensions capability in Xcode and select the Content Filter capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

<a id="Creating-a-Filter-Data-Provider-Extension"></a>

### Creating a Filter Data Provider Extension

Filter Data Providers run as App Extensions for the `com.apple.networkextension.filter-data` extension point.

To create a Filter Data Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Filter Data Provider extension target, create a subclass of `NEFilterDataProvider`. Then set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not done already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.filter-data`.

Here is an example of the `NSExtension` dictionary in a Filter Data Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.filter-data</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomFilterDataProvider</string>
</dict>
```

Finally, add your Filter Data Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

To create a Filter Data Provider extension, you must first create a subclass of `NEFilterDataProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [handleNewFlow(\_:)](nefilterdataprovider/handlenewflow%28__%29.md)
- [handleInboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md)
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md)
- [handleInboundDataComplete(for:)](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md)
- [handleOutboundDataComplete(for:)](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md)
- [handleRemediation(for:)](nefilterdataprovider/handleremediation%28for_%29.md)
- [handleRulesChanged()](nefilterdataprovider/handleruleschanged%28%29.md)

## Topics

### Filtering network content

- [handleNewFlow(\_:)](nefilterdataprovider/handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundData(from:readBytesStartOffset:readBytes:)](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataComplete(for:)](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataComplete(for:)](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.

### Handling remediation

- [handleRemediation(for:)](nefilterdataprovider/handleremediation%28for_%29.md): Handle a remediation request.

### Handling rule updates

- [handleRulesChanged()](nefilterdataprovider/handleruleschanged%28%29.md): Handle a rules changed event.

### Changing filter settings

- [apply(\_:completionHandler:)](nefilterdataprovider/apply%28__completionhandler_%29.md): Applies a set of filtering rules associated with the provider and changes the default filtering action.
- [NEFilterSettings](nefiltersettings.md): The rules and other settings that define the operation of a filter.

### Resuming data flows

- [resumeFlow(\_:with:)](nefilterdataprovider/resumeflow%28__with_%29.md): Resumes a previously-paused flow.

### Updating filter verdicts

- [update(\_:using:for:)](nefilterdataprovider/update%28__using_for_%29.md): Updates the verdict for a flow outside the context of any filter data provider callback.

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

- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.

# NEFilterDataProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The principal class for a filter data provider extension.

## Declaration

```objectivec
@interface NEFilterDataProvider : NEFilterProvider
```

<a id="overview"></a>

## Overview

Network content is delivered to the Filter Data Provider in the form of [NEFilterFlow](nefilterflow.md) objects. Each [NEFilterFlow](nefilterflow.md) object corresponds to a network connection opened by an application running on the device. The Filter Data Provider can choose to pass or block the data when it receives a new flow, or it can ask the system to see more of the flow’s data in either the outbound or inbound direction before making a pass or block decision.

In addition to passing or blocking network data, the Filter Data Provider can tell the system that it needs more information before it can make a decision about a particular flow of data. The system will then ask the Filter Control Provider to update the current set of rules and place them in a location on disk that is readable from the Filter Data Provider extension.

When a [NEFilterFlow](nefilterflow.md) object is originated from a WebKit browser object, the Filter Data Provider can affect the user experience in the following ways:

- If the Filter Data Provider chooses to block the web page, then a special “block” page is displayed in the WebKit browser object informing the user that their attempt to access the content was blocked. The Filter Data Provider can choose to add a link to this block page, giving the user the option of requesting access to the content.
- If the Filter Data Provider chooses to allow the web page, then it can also specify that a string be appended to the web page URL. This allows the Filter Data Provider to direct the WebKit browser object to a “safe” version of the web page.

To protect the user’s privacy, the Filter Data Provider extension sandbox prevents the extension from moving network content outside of its address space.

> **Important**

>  To use the [handleNewFlow:](nefilterdataprovider/handlenewflow%28__%29.md) method, you must enable the Network Extensions capability in Xcode and select the Content Filter capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

<a id="Creating-a-Filter-Data-Provider-Extension"></a>

### Creating a Filter Data Provider Extension

Filter Data Providers run as App Extensions for the `com.apple.networkextension.filter-data` extension point.

To create a Filter Data Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a Filter Data Provider extension target, create a subclass of `NEFilterDataProvider`. Then set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your subclass.

If it is not done already, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.filter-data`.

Here is an example of the `NSExtension` dictionary in a Filter Data Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.filter-data</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomFilterDataProvider</string>
</dict>
```

Finally, add your Filter Data Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

To create a Filter Data Provider extension, you must first create a subclass of `NEFilterDataProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [handleNewFlow:](nefilterdataprovider/handlenewflow%28__%29.md)
- [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md)
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md)
- [handleInboundDataCompleteForFlow:](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md)
- [handleOutboundDataCompleteForFlow:](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md)
- [handleRemediationForFlow:](nefilterdataprovider/handleremediation%28for_%29.md)
- [handleRulesChanged](nefilterdataprovider/handleruleschanged%28%29.md)

## Topics

### Filtering network content

- [handleNewFlow:](nefilterdataprovider/handlenewflow%28__%29.md): Make a filtering decision for a newly-created flow of network content.
- [handleInboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleinbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of inbound data.
- [NEFilterDataAttribute](nefilterdataattribute.md): Attribute flags that describe the data handled by a filter.
- [handleOutboundDataFromFlow:readBytesStartOffset:readBytes:](nefilterdataprovider/handleoutbounddata%28from_readbytesstartoffset_readbytes_%29.md): Make a filtering decision about a chunk of outbound data.
- [handleInboundDataCompleteForFlow:](nefilterdataprovider/handleinbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the inbound data for a flow.
- [handleOutboundDataCompleteForFlow:](nefilterdataprovider/handleoutbounddatacomplete%28for_%29.md): Make a filtering decision after seeing all of the outbound data for a flow.

### Handling remediation

- [handleRemediationForFlow:](nefilterdataprovider/handleremediation%28for_%29.md): Handle a remediation request.

### Handling rule updates

- [handleRulesChanged](nefilterdataprovider/handleruleschanged%28%29.md): Handle a rules changed event.

### Changing filter settings

- [applySettings:completionHandler:](nefilterdataprovider/apply%28__completionhandler_%29.md): Applies a set of filtering rules associated with the provider and changes the default filtering action.
- [NEFilterSettings](nefiltersettings.md): The rules and other settings that define the operation of a filter.

### Resuming data flows

- [resumeFlow:withVerdict:](nefilterdataprovider/resumeflow%28__with_%29.md): Resumes a previously-paused flow.

### Updating filter verdicts

- [updateFlow:usingVerdict:forDirection:](nefilterdataprovider/update%28__using_for_%29.md): Updates the verdict for a flow outside the context of any filter data provider callback.

## Relationships

### Inherits From

- [NEFilterProvider](nefilterprovider.md)

## See Also

### Data and control providers

- [NEFilterControlProvider](nefiltercontrolprovider.md): The principal class for a filter control provider extension.
- [NEFilterPacketProvider](nefilterpacketprovider.md): A filter provider that evaluates network packets and decides whether to block, allow, or delay the packets.
- [NEFilterProvider](nefilterprovider.md): An abstract base class shared by content filters.
