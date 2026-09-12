> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertyvendornamekey](https://developer.apple.com/documentation/iokit/kiopropertyvendornamekey)

# kIOPropertyVendorNameKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
#define kIOPropertyVendorNameKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the Vendor Name for a particular device and it has an associated string.

Requirement: Mandatory

Example:

<a id="2556730"></a>

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
   </dict>
</dict>
```
