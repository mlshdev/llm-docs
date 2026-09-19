> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertyphysicalblocksizekey

# kIOPropertyPhysicalBlockSizeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
#define kIOPropertyPhysicalBlockSizeKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the physical block size of a hard disk drive.

Requirement: Mandatory for hard disk drives with physical block size other than 512 bytes.

Example:

<a id="2556674"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Device Characteristics</key>
   <dict>
   	<key>Vendor Name</key>
   	<string>Apple</string>
   	<key>Product Name</key>
   	<string>iPod</string>
   	<key>Product Revision Level</key>
   	<string>1.0</string>
   	<key>Physical Block Size</key>
   	<integer>4096</integer>
   	<key>Logical Block Size</key>
   	<integer>512</integer>
   </dict>
</dict>
```
