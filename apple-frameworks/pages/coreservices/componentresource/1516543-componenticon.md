> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentresource/1516543-componenticon](https://developer.apple.com/documentation/coreservices/componentresource/1516543-componenticon)

# componentIcon

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

A resource specification structure that specifies the resource type and ID for the icon for a component. Component icons are stored as 32-by-32 bit maps. Typically, the icon is stored in a resource of type `'ICON'`. Note that this icon is not used by the Finder you supply an icon only so that other components or applications can display your component’s icon in a dialog box if needed.

## Declaration

```objectivec
ResourceSpec componentIcon;
```
