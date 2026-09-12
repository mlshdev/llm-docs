> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodetailedtiminginformationv2/1505554-horizontalsynclevel](https://developer.apple.com/documentation/iokit/iodetailedtiminginformationv2/1505554-horizontalsynclevel)

# horizontalSyncLevel

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

Zero.

## Declaration

```objectivec
UInt32 horizontalSyncLevel;
```

## See Also

### Fields

- [\__reservedA](../iographicstypes_h_user-space/iodetailedtiminginformationv2/2587781-_reserveda.md): Set to zero.
- [horizontalScaledInset](1505675-horizontalscaledinset.md): If the mode is scaled, sets the number of active pixels to remove the left and right edges in order to display an underscanned image.
- [verticalScaledInset](1505081-verticalscaledinset.md): If the mode is scaled, sets the number of active lines to remove the top and bottom edges in order to display an underscanned image.
- [scalerFlags](1505247-scalerflags.md): If the mode is scaled, kIOScaleStretchToFit may be set to allow stretching. kIOScaleRotateFlags is mask which may have the value given by kIOScaleRotate90, kIOScaleRotate180, kIOScaleRotate270 to display a rotated framebuffer.
- [horizontalScaled](1505336-horizontalscaled.md): If the mode is scaled, sets the size of the image before scaling or rotation.
- [verticalScaled](1505368-verticalscaled.md): If the mode is scaled, sets the size of the image before scaling or rotation.
- [signalConfig](1505078-signalconfig.md): Information about display setup.
- [signalLevels](1505108-signallevels.md): Specifies the signal level.
- [pixelClock](1505625-pixelclock.md): Pixel clock frequency in Hz.
- [minPixelClock](1506146-minpixelclock.md): Minimum pixel clock frequency in Hz, with error.
- [maxPixelClock](1505269-maxpixelclock.md): Maximum pixel clock frequency in Hz, with error.
- [horizontalActive](1505825-horizontalactive.md): Pixel clocks per line.
- [horizontalBlanking](1505116-horizontalblanking.md): Blanking clocks per line.
- [horizontalSyncOffset](1505654-horizontalsyncoffset.md): First clock of horizontal sync.
- [horizontalSyncPulseWidth](1505982-horizontalsyncpulsewidth.md): Width of horizontal sync.
- [verticalActive](1505884-verticalactive.md): Number of lines per frame.
- [verticalBlanking](1505807-verticalblanking.md): Blanking lines per frame.
- [verticalSyncOffset](1506166-verticalsyncoffset.md): First line of vertical sync.
- [verticalSyncPulseWidth](1505756-verticalsyncpulsewidth.md): Height of vertical sync.
- [horizontalBorderLeft](1506121-horizontalborderleft.md): Number of pixels in left horizontal border.
- [horizontalBorderRight](1505214-horizontalborderright.md): Number of pixels in right horizontal border.
- [verticalBorderTop](1505205-verticalbordertop.md): Number of lines in top vertical border.
- [verticalBorderBottom](1506113-verticalborderbottom.md): Number of lines in bottom vertical border.
- [horizontalSyncConfig](1505470-horizontalsyncconfig.md): kIOSyncPositivePolarity for positive polarity horizontal sync (0 for negative).
- [verticalSyncConfig](1506078-verticalsyncconfig.md): kIOSyncPositivePolarity for positive polarity vertical sync (0 for negative).
- [verticalSyncLevel](1505614-verticalsynclevel.md): Zero.
- [numLinks](1505253-numlinks.md): number of links to be used by a dual link timing, if zero, assume one link.
- [\__reservedB](../iographicstypes_h_user-space/iodetailedtiminginformationv2/2587782-_reservedb.md): Reserved set to zero.
