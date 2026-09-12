> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cadisableminimumframedurationonphone](https://developer.apple.com/documentation/bundleresources/information-property-list/cadisableminimumframedurationonphone)

# CADisableMinimumFrameDurationOnPhone

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A Boolean value that allows your app to access frame rates higher than the system’s default.

## Details

`CADisableMinimumFrameDurationOnPhone`

<a id="Discussion"></a>

## Discussion

Devices with ProMotion displays allow apps to dynamically request a frame rate they prefer. If you set this key to `YES`, your app can request any frame rate the display supports. If you set this key to `NO`, frame rates higher than the system default are unavailable.

For more information on refresh rates, see [Optimizing iPhone and iPad apps to support ProMotion displays](../../quartzcore/optimizing-iphone-and-ipad-apps-to-support-promotion-displays.md).

## See Also

### Graphics

- [UIAppSupportsHDR](uiappsupportshdr.md): A Boolean value that indicates whether the app supports HDR mode on Apple TV 4K.
- [NSHighResolutionCapable](nshighresolutioncapable.md): A Boolean value indicating whether the Cocoa app supports high-resolution displays.
- [NSSupportsAutomaticGraphicsSwitching](nssupportsautomaticgraphicsswitching.md): A Boolean value indicating whether an OpenGL app may utilize the integrated GPU.
- [GPUEjectPolicy](gpuejectpolicy.md): The preferred system action when an external GPU is connected from the system.
- [GPUSelectionPolicy](gpuselectionpolicy.md): The app’s preference for whether it wants to use external graphics processors.
