> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertytargetdiskmodekey](https://developer.apple.com/documentation/iokit/kiopropertytargetdiskmodekey)

# kIOPropertyTargetDiskModeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

## Declaration

```objectivec
#define kIOPropertyTargetDiskModeKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate the device is another computer in Target Disk Mode.

Requirement: Optional.

Example:

<a id="2556725"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Device Characteristics</key>
   <dict>
   	<key>Vendor Name</key>
   	<string>AAPL</string>
   	<key>Product Name</key>
   	<string>FireWire Target</string>
   	<key>Product Revision Level</key>
   	<string>0000</string>
   	<key>Target Disk Mode</key>
   	<true/>
   </dict>
</dict>
```
