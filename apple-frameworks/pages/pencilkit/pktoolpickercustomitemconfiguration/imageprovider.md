> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitemconfiguration/imageprovider

# imageProvider

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A closure that provides an image for the tool.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIImage * (^imageProvider)(PKToolPickerCustomItem *toolPickerItem);
```
