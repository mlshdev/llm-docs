> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_destroysetupd](https://developer.apple.com/documentation/accelerate/vdsp_dft_destroysetupd)

# vDSP_DFT_DestroySetupD

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Releases a double-precision setup structure.

## Declaration

```objectivec
void vDSP_DFT_DestroySetupD(vDSP_DFT_SetupD __Setup);
```

## Parameters

- `__Setup`: The setup structure to destroy.

<a id="Discussion"></a>

## Discussion

Destroying a setup with shared data is safe; this function only releases memory that’s not needed by other undestroyed setups.

> **Note**

>  This function isn’t fully thread-safe. You must not call this function concurrently with any function that uses the setup structure or any other setup structure that shares its underlying storage.

## See Also

### Discrete Fourier transform cleanup

- [vDSP_DFT_DestroySetup](vdsp_dft_destroysetup.md): Releases a single-precision setup structure.
