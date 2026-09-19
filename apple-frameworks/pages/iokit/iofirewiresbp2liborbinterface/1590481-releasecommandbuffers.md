> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590481-releasecommandbuffers

# releaseCommandBuffers

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Releases SBP2's reference to the command buffers.

## Declaration

```objectivec
IOReturn (*releaseCommandBuffers)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.

<a id="return_value"></a>

## Return Value

Returns KIOReturnSuccess if the page table was cleared successfully.

<a id="discussion"></a>

## Discussion

When you create a page table with one of the variants of setCommandBuffers. SBP2 holds on to a reference to the buffers until this method is called. This means that if a command completed and you released the buffers without calling this method you could leave FW in an inconsistent state.
