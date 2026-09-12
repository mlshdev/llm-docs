> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcode/improving-your-app-s-rendering-efficiency](https://developer.apple.com/documentation/xcode/improving-your-app-s-rendering-efficiency)

# Improving your app’s rendering efficiency

**Kind:** Article

Optimize view updates by minimizing unnecessary redraws and using efficient update strategies.

<a id="Overview"></a>

## Overview

Redrawing views unnecessarily, or performing complicated updates, can increase power consumption by the CPU and GPU. Additionally, inefficient view updates can contribute to hangs and hitches in your app, degrading a person’s experience when they use your app. For more information, see [Understanding user interface responsiveness](understanding-user-interface-responsiveness.md).

<a id="Improve-SwiftUI-performance"></a>

### Improve SwiftUI performance

Profile your app with the SwiftUI instrument to identify long-running view body updates and frequent view updates in your app, and reorganize your views to avoid these. For more information, see [Understanding and improving SwiftUI performance](understanding-and-improving-swiftui-performance.md).

<a id="Limit-the-frame-rate-and-duration-of-animations"></a>

### Limit the frame rate and duration of animations

Use animations to communicate changes and updates in your app, and pause or stop them when the update completes. For more information, see [Foundations \> Motion](https://developer.apple.com/design/human-interface-guidelines/motion) in the Human Interface Guidelines.

For situations where you need precise control over an animation’s behavior, use [Core Animation](https://developer.apple.com/documentation/quartzcore) to provide hints to the system about the preferred frame rates for animations, and to control animation duration. Higher frame rates cause the system to use more power. For more information, see [Optimizing iPhone and iPad apps to support ProMotion displays](https://developer.apple.com/documentation/quartzcore/optimizing-iphone-and-ipad-apps-to-support-promotion-displays).

<a id="Update-views-efficiently"></a>

### Update views efficiently

Identify when your app updates regions of the screen by choosing Debug \> View Debugging \> Rendering \> Flash Updated Regions in Xcode while it’s running your app. Regions of your app’s display that flash — indicating a screen update — but that don’t noticably change visually indicate unnecessary screen use, and potentially unneccessary computations to prepare the update.

When you need to update a view, calculate the smallest region that needs updating and pass that to [setNeedsDisplay(\_:)](https://developer.apple.com/documentation/uikit/uiview/setneedsdisplay%28_:%29) (UIKit) or [setNeedsDisplay(\_:)](https://developer.apple.com/documentation/appkit/nsview/setneedsdisplay%28_:%29) (AppKit), so the system only updates the changed region. Avoid view layouts where updating one layer requires the system to redraw other overlapping layers.

Pay particular attention to the regions you update in views that appear under [Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/liquid-glass) effects, as the system performs additional calculations to update the Liquid Glass appearance when your app updates screen regions around the Liquid Glass effect.

<a id="Minimize-complex-effects"></a>

### Minimize complex effects

When you adopt [Liquid Glass](https://developer.apple.com/documentation/technologyoverviews/liquid-glass), use [GlassEffectContainer](https://developer.apple.com/documentation/swiftui/glasseffectcontainer) to combine Liquid Glass effects in multiple views. For more information, see [Applying Liquid Glass to custom views](https://developer.apple.com/documentation/swiftui/applying-liquid-glass-to-custom-views).

Be careful when grouping views that are spatially distant from each other, as it can cause unnecessary updates. For example, grouping two buttons that are at the top and bottom of the screen respectively means that any change in the middle of the screen causes the system to update both buttons. Use the Flash Updated Regions tool, described in [Update views efficiently](improving-your-app-s-rendering-efficiency.md#Update-views-efficiently) above, to assess screen updates due to [GlassEffectContainer](https://developer.apple.com/documentation/swiftui/glasseffectcontainer) extents.

Prefer simple backgrounds — for example, solid colors — to complex effects like [UIVisualEffectView](https://developer.apple.com/documentation/uikit/uivisualeffectview).

<a id="Use-recommended-APIs-for-media-playback"></a>

### Use recommended APIs for media playback

Where possible, use [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) to play media assets, as it’s optimized to efficiently render audio and video. If you need to use lower-level APIs, measure your app’s power use, and choose the most efficient approach that supports your app’s features. For example, [AVSampleBufferDisplayLayer](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer) typically uses less power to play a video than [CAMetalLayer](https://developer.apple.com/documentation/quartzcore/cametallayer).

When you use [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession-api-collection) to decode video frames that you display in an [AVSampleBufferDisplayLayer](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer), pass [kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey](https://developer.apple.com/documentation/corevideo/kcvpixelbufferiosurfacecoreanimationcompatibilitykey) as an image buffer attribute to [VTDecompressionSessionCreate(allocator:formatDescription:decoderSpecification:imageBufferAttributes:decompressionSessionOut:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncreate%28allocator:formatdescription:decoderspecification:imagebufferattributes:decompressionsessionout:%29) so that Video Toolbox chooses the most efficient pixel format:

```swift
_ = VTDecompressionSessionCreate(allocator: nil,
                                 formatDescription: formatDescription,
                                 decoderSpecification: nil,
                                 imageBufferAttributes: [kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey],
                                 decompressionSessionOut: &decompressionSession)
```

<a id="Reduce-average-pixel-luminance-in-your-app"></a>

### Reduce average pixel luminance in your app

Brighter pixels use more power than darker pixels, so the lower the average pixel luminance of views in your app, the less energy the system uses powering the display. Support Dark Mode in your app and reduce the overall brightness of the display when someone enables this setting. For more information, see [Supporting Dark Mode in your interface](https://developer.apple.com/documentation/uikit/supporting-dark-mode-in-your-interface).

Measure the average pixel luminance of views in your app using Power Profiler. For more information, see [Measuring your app’s power use with Power Profiler](measuring-your-app-s-power-use-with-power-profiler.md). Use [MXUnitAveragePixelLuminance](https://developer.apple.com/documentation/metrickit/mxunitaveragepixelluminance) to gather metrics about the pixel luminosity.

## See Also

### Graphics and sound

- [Reducing power usage when capturing media](reducing-power-usage-when-capturing-media.md): Optimize device camera power usage by stopping sessions when not needed and choosing appropriate video formats.
