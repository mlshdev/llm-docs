> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertycardpresentkey](https://developer.apple.com/documentation/iokit/kiopropertycardpresentkey)

# kIOPropertyCardPresentKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyCardPresentKey
```

<a id="discussion"></a>

## Discussion

This key defines wether a MMC or SD card is physically present.

Requirement: Mandatory

Example:

<a id="2556647"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Card Present</key>
   <true/>
</dict>
```
