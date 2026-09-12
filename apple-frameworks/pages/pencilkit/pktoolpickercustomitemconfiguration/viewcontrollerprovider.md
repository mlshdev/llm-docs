> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitemconfiguration/viewcontrollerprovider](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitemconfiguration/viewcontrollerprovider)

# viewControllerProvider

**Interface language:** Objective-C

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A closure to provide a view controller above the system controls in the tool attributes popover.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIViewController * (^viewControllerProvider)(PKToolPickerCustomItem *toolPickerItem);
```
