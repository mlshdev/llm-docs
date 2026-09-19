> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertycardcharacteristicskey

# kIOPropertyCardCharacteristicsKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyCardCharacteristicsKey
```

<a id="discussion"></a>

## Discussion

This key is used to define Card Characteristics for a particular piece of MMC/SD media and it has an associated dictionary which lists the card characteristics.

Requirement: Mandatory

Example:

<a id="2556642"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Card Characteristics</key>
   <dict>
   	<key>Product Name</key>
   	<string>SD32G</string>
   	<key>Product Revision Level</key>
   	<string>1.0</string>
   </dict>
</dict>
```
