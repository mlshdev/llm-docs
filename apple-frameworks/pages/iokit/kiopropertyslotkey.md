> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertyslotkey

# kIOPropertySlotKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertySlotKey
```

<a id="discussion"></a>

## Discussion

This key is used to define the slot number for the device

Requirement: Mandatory

Example:

<a id="2556706"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Slot</key>
   <integer>1<integer>
 </dict>
```
