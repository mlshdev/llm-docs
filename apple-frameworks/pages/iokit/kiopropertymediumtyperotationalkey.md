> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertymediumtyperotationalkey

# kIOPropertyMediumTypeRotationalKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

## Declaration

```objectivec
#define kIOPropertyMediumTypeRotationalKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate the medium type of the device is rotational.

Requirement: Optional.

Example:

<a id="2556662"></a>

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
   	<key>Medium Type</key>
   	<string>Rotational</string>
   </dict>
</dict>
```
