> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertyspeedclasskey](https://developer.apple.com/documentation/iokit/kiopropertyspeedclasskey)

# kIOPropertySpeedClassKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertySpeedClassKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate SD card speed class.

Requirement: Mandatory.

Example:

<a id="2556717"></a>

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
   	<key>Speed Class</key>
   	<data>02</data>
   </dict>
</dict>
```
