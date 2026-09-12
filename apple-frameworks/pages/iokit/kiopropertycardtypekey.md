> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertycardtypekey](https://developer.apple.com/documentation/iokit/kiopropertycardtypekey)

# kIOPropertyCardTypeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyCardTypeKey
```

<a id="discussion"></a>

## Discussion

This key is used to indicate the card type is MMC.

Requirement: Optional.

Example:

<a id="2556652"></a>

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
   	<string>MMC</string>
   </dict>
</dict>
```
