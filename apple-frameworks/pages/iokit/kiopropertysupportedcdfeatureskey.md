> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertysupportedcdfeatureskey](https://developer.apple.com/documentation/iokit/kiopropertysupportedcdfeatureskey)

# kIOPropertySupportedCDFeaturesKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
#define kIOPropertySupportedCDFeaturesKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the supported CD Features for a particular optical device and it has an associated bitfield. See \<IOKit/scsi/IOSCSIMultimediaCommandsDevice.h\> for definitions of the bits and associated bitmasks.

Requirement: Mandatory for optical devices (Peripheral Device Type 05h).

Example:

<a id="2556713"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Device Characteristics</key>
   <dict>
   	<key>Vendor Name</key>
   	<string>Apple</string>
   	<key>Product Name</key>
   	<string>SuperDrive</string>
   	<key>Product Revision Level</key>
   	<string>1.0</string>
   	<key>CD Features</key>
   	<integer>1663</integer>
   	<key>DVD Features</key>
   	<integer>103</integer>
   </dict>
</dict>
```
