> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertysupportedbdfeatureskey](https://developer.apple.com/documentation/iokit/kiopropertysupportedbdfeatureskey)

# kIOPropertySupportedBDFeaturesKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
#define kIOPropertySupportedBDFeaturesKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the supported BD Features for a particular optical device and it has an associated bitfield. See \<IOKit/scsi/IOSCSIMultimediaCommandsDevice.h\> for definitions of the bits and associated bitmasks.

Requirement: Mandatory for optical devices (Peripheral Device Type 05h).

Example:

<a id="2556708"></a>

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
   	<key>BD Features</key>
   	<integer>21</integer>
   </dict>
</dict>
```
