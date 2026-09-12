> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertybasefrequencykey](https://developer.apple.com/documentation/iokit/kiopropertybasefrequencykey)

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
