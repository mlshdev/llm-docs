> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1473081-sound_manager_attribute_selector/gestaltplayandrecord](https://developer.apple.com/documentation/coreservices/1473081-sound_manager_attribute_selector/gestaltplayandrecord)

# gestaltPlayAndRecord

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
gestaltPlayAndRecord = 6
```

<a id="discussion"></a>

## Discussion

Set if the built-in sound hardware is able to play and record sounds simultaneously. If this bit is clear, the built-in sound hardware can either play or record, but not do both at once. This bit is valid only if the `gestaltBuiltInSoundInput` bit is set, and it applies only to any built-in sound input and output hardware.
