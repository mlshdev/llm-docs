> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_dft_destroysetup](https://developer.apple.com/documentation/accelerate/vdsp_dft_destroysetup)

# vDSP_DFT_DestroySetup

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Releases a single-precision setup structure.

## Declaration

```objectivec
void vDSP_DFT_DestroySetup(vDSP_DFT_Setup __Setup);
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

- [vDSP_DFT_DestroySetupD](vdsp_dft_destroysetupd.md): Releases a double-precision setup structure.
