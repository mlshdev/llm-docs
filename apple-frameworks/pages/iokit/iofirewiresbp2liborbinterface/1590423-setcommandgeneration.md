> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590423-setcommandgeneration](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590423-setcommandgeneration)

# setCommandGeneration

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the command generation.

## Declaration

```objectivec
void (*setCommandGeneration)(void *self, UInt32 generation);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.
- `generation`: The bus generation for command execution.

<a id="discussion"></a>

## Discussion

This sets the bus generation this ORB should be appended in. It is only meaningful when combined with the kFWSBP2CommandCheckGeneration flags above.
