> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertymanufacturingdatekey](https://developer.apple.com/documentation/iokit/kiopropertymanufacturingdatekey)

# kIOPropertyManufacturingDateKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyManufacturingDateKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate the card manufacturing date.

Requirement: Mandatory.

Example:

<a id="2556693"></a>

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
   	<key>Manufacturing Date</key>
   	<string>2009-12</string>
   </dict>
</dict>
```
