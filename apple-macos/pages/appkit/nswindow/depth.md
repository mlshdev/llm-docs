> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depth](https://developer.apple.com/documentation/appkit/nswindow/depth)

# NSWindow.Depth (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

A type that represents the depth, or amount of memory, for a single pixel in a window or screen.

## Declaration

```swift
enum Depth
```

<a id="overview"></a>

## Overview

A depth of `0` indicates default depth. Don’t make window depths persistent because they aren’t the same across systems.

Use the functions [colorSpaceName](depth/colorspacename.md), [bitsPerPixel](depth/bitsperpixel.md), and [isPlanar](depth/isplanar.md) to extract info from an `NSWindowDepth` value.

Use [NSBestDepth](../nsbestdepth.md) to compute window depths. [NSBestDepth](../nsbestdepth.md) tries to accommodate all the parameters (match or better). If there are multiple matches, this function uses color space first, then bits per sample (`bps`), then `planar`, then bits per pixel (`bpp)` to determine the closest match. Use `0` for `bpp` to indicate the default, the same as the number of bits per plane: either `bps` or `bps` \* [numberOfColorComponents](../nscolorspacename/numberofcolorcomponents.md). You may use other values as hints to provide backing stores of different configurations — for instance, 8-bit color.

You can also use one of the explicit bit depths defined in `Explicit Window Depth Limits` for the `NSWindow` property [depthLimit](depthlimit.md).

## Topics

### Constants

- [NSWindow.Depth.onehundredtwentyeightBitRGB](depth/onehundredtwentyeightbitrgb.md): One hundred and twenty eight bit RGB depth limit.
- [NSWindow.Depth.sixtyfourBitRGB](depth/sixtyfourbitrgb.md): Sixty four bit RGB depth limit.
- [NSWindow.Depth.twentyfourBitRGB](depth/twentyfourbitrgb.md): Twenty four bit RGB depth limit.

### Accessing Depth Details

- [availableDepths](depth/availabledepths.md): An array that contains all available windows depths.
- [bestDepth(colorSpaceName:bitsPerSample:bitsPerPixel:isPlanar:)](depth/bestdepth%28colorspacename_bitspersample_bitsperpixel_isplanar_%29.md): Determines the best window depth that most closely matches the given properties.
- [bitsPerPixel](depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [isPlanar](depth/isplanar.md): Returns whether the specified window depth is planar.

### Initializers

- [init(rawValue:)](depth/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSWindow.SelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindow.ButtonType](buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindow.BackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindow.OrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindow.SharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindow.NumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindow.AnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindow.CollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindow.OcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindow.TitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindow.UserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindow.TabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.

# NSWindowDepth (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

A type that represents the depth, or amount of memory, for a single pixel in a window or screen.

## Declaration

```objectivec
enum NSWindowDepth : int32_t;
```

<a id="overview"></a>

## Overview

A depth of `0` indicates default depth. Don’t make window depths persistent because they aren’t the same across systems.

Use the functions [NSColorSpaceFromDepth](depth/colorspacename.md), [NSBitsPerPixelFromDepth](depth/bitsperpixel.md), and [NSPlanarFromDepth](depth/isplanar.md) to extract info from an `NSWindowDepth` value.

Use [NSBestDepth](../nsbestdepth.md) to compute window depths. [NSBestDepth](../nsbestdepth.md) tries to accommodate all the parameters (match or better). If there are multiple matches, this function uses color space first, then bits per sample (`bps`), then `planar`, then bits per pixel (`bpp)` to determine the closest match. Use `0` for `bpp` to indicate the default, the same as the number of bits per plane: either `bps` or `bps` \* [NSNumberOfColorComponents](../nscolorspacename/numberofcolorcomponents.md). You may use other values as hints to provide backing stores of different configurations — for instance, 8-bit color.

You can also use one of the explicit bit depths defined in `Explicit Window Depth Limits` for the `NSWindow` property [depthLimit](depthlimit.md).

## Topics

### Constants

- [NSWindowDepthOnehundredtwentyeightBitRGB](depth/onehundredtwentyeightbitrgb.md): One hundred and twenty eight bit RGB depth limit.
- [NSWindowDepthSixtyfourBitRGB](depth/sixtyfourbitrgb.md): Sixty four bit RGB depth limit.
- [NSWindowDepthTwentyfourBitRGB](depth/twentyfourbitrgb.md): Twenty four bit RGB depth limit.

### Accessing Depth Details

- [NSBitsPerPixelFromDepth](depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSPlanarFromDepth](depth/isplanar.md): Returns whether the specified window depth is planar.

## See Also

### Constants

- [NSSelectionDirection](selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindowButton](buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](../nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSBackingStoreType](backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindowOrderingMode](orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindowSharingType](sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindowNumberListOptions](numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindowAnimationBehavior](animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindowCollectionBehavior](collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindowOcclusionState](occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindowTitleVisibility](titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindowUserTabbingPreference](usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindowTabbingMode](tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](../application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](../application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
