> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kioproperty64bitkey

# kIOProperty64BitKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOProperty64BitKey
```

<a id="discussion"></a>

## Discussion

This key defines wether the device supports 64-bit.

Requirement: Mandatory

Example:

<a id="2556621"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>64-bit</key>
   <true/>
</dict>
```
