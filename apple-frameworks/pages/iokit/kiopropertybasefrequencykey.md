> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertybasefrequencykey

# kIOPropertyBaseFrequencyKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyBaseFrequencyKey
```

<a id="discussion"></a>

## Discussion

This key defines the current base frequency for the device.

Requirement: Mandatory.

Example:

<a id="2556628"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Base Frequency</key>
   <integer>50</integer>
</dict>
```
