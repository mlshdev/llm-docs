> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertybusvoltagekey](https://developer.apple.com/documentation/iokit/kiopropertybusvoltagekey)

# kIOPropertyBusVoltageKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyBusVoltageKey
```

<a id="discussion"></a>

## Discussion

This key defines the current bus voltage for the device in mV

Requirement: Mandatory.

Example:

<a id="2556632"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Bus Voltage</key>
   <integer>3300</integer>
</dict>
</dict>
```
