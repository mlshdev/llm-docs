> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/itemidentifiers](https://developer.apple.com/documentation/appkit/nstoolbar/itemidentifiers)

# itemIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

An array of itemIdentifiers that represent the current items in the toolbar. Setting this property will set the current items in the toolbar by diffing against items that already exist. Use this with great caution if `allowsUserCustomization` is enabled as it will override any customizations the user has made. This property is key value observable.

## Declaration

```swift
var itemIdentifiers: [NSToolbarItem.Identifier] { get set }
```

# itemIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

An array of itemIdentifiers that represent the current items in the toolbar. Setting this property will set the current items in the toolbar by diffing against items that already exist. Use this with great caution if `allowsUserCustomization` is enabled as it will override any customizations the user has made. This property is key value observable.

## Declaration

```objectivec
@property (copy) NSArray<NSString *> * itemIdentifiers;
```
