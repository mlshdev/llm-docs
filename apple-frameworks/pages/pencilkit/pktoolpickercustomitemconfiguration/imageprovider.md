> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitemconfiguration/imageprovider](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitemconfiguration/imageprovider)

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
