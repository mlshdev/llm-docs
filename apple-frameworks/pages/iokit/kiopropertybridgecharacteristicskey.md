> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertybridgecharacteristicskey](https://developer.apple.com/documentation/iokit/kiopropertybridgecharacteristicskey)

# kIOPropertyBridgeCharacteristicsKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
#define kIOPropertyBridgeCharacteristicsKey
```

<a id="discussion"></a>

## Discussion

This key is used to define Bridge Characteristics for a particular devices's bridge chipset. It has an associated dictionary which lists the bridge characteristics.

Requirement: Optional

Example:

<a id="2556577"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Bridge Characteristics</key>
   <dict>
   	<key>Bridge Vendor Name</key>
   	<string>Oxford Semiconductor</string>
   	<key>Bridge Model Name</key>
   	<string>FW911</string>
   	<key>Bridge Revision Level</key>
   	<string>3.7</string>
   </dict>
</dict>
```
