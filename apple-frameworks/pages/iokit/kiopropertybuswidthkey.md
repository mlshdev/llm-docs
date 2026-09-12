> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertybuswidthkey](https://developer.apple.com/documentation/iokit/kiopropertybuswidthkey)

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
