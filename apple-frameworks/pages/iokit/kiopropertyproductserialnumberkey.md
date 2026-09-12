> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertyproductserialnumberkey](https://developer.apple.com/documentation/iokit/kiopropertyproductserialnumberkey)

# kIOPropertyProductSerialNumberKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
#define kIOPropertyProductSerialNumberKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate the card serial number ID.

Requirement: Mandatory

Example:

<a id="2556700"></a>

**Listing 1**

```occ
 
 
 <dict>
    <key>Card Characteristics</key>
    <dict>
   	 <key>Product Name</key>
   	 <string>SD32G</string>
   	 <key>Product Revision Level</key>
   	 <string>1.0</string>
   	 <key>Card Type</key>
   	 <string>SDHC</string>
   	 <key>Serial Number</key>
   	 <data>0045ff</data>
    </dict>
 </dict>
 
 
```
