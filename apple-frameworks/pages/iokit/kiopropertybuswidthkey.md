> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopropertybuswidthkey

# kIOPropertyBusWidthKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyBusWidthKey
```

<a id="discussion"></a>

## Discussion

This key defines the current bus width for the device.

Requirement: Mandatory.

Example:

<a id="2556637"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Bus Width</key>
   <integer>4</integer>
</dict>
```
