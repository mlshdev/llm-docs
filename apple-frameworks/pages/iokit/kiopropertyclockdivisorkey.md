> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopropertyclockdivisorkey](https://developer.apple.com/documentation/iokit/kiopropertyclockdivisorkey)

# kIOPropertyClockDivisorKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
#define kIOPropertyClockDivisorKey
```

<a id="discussion"></a>

## Discussion

This key defines the current clock divisor for the device.

Requirement: Mandatory.

Example:

<a id="2556682"></a>

**Listing 1**

```occ
 
 
<dict>
   <key>Clock Divisor</key>
   <integer>128</integer>
</dict>
```
