> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/observedpresenteditemubiquityattributes](https://developer.apple.com/documentation/foundation/nsfilepresenter/observedpresenteditemubiquityattributes)

# observedPresentedItemUbiquityAttributes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.

## Declaration

```swift
optional var observedPresentedItemUbiquityAttributes: Set<URLResourceKey> { get }
```

<a id="Discussion"></a>

## Discussion

Valid attributes include the [isUbiquitousItemKey](../urlresourcekey/isubiquitousitemkey.md) attribute and any attribute whose name starts with `ubiquitousItem` or `ubiquitousSharedItem` (or `NSURLUbiquitousItem` or `NSURLUbiquitousSharedItem` in Objective-C).

If the property is not implemented, the system generates notifications for all the ubiquity attributes.

The system checks this property only when the file coordinator’s [addFilePresenter(\_:)](../nsfilecoordinator/addfilepresenter%28__%29.md) method is called. Make all changes to this property before calling [addFilePresenter(\_:)](../nsfilecoordinator/addfilepresenter%28__%29.md).

## See Also

### Ubiquity Change Notifications

- [presentedItemDidChangeUbiquityAttributes(\_:)](presenteditemdidchangeubiquityattributes%28__%29.md): Tells your object that the file or file package’s ubiquity attributes have changed.

# observedPresentedItemUbiquityAttributes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.

## Declaration

```objectivec
@property (strong, readonly) NSSet<NSString *> * observedPresentedItemUbiquityAttributes;
```

<a id="Discussion"></a>

## Discussion

Valid attributes include the [NSURLIsUbiquitousItemKey](../urlresourcekey/isubiquitousitemkey.md) attribute and any attribute whose name starts with `ubiquitousItem` or `ubiquitousSharedItem` (or `NSURLUbiquitousItem` or `NSURLUbiquitousSharedItem` in Objective-C).

If the property is not implemented, the system generates notifications for all the ubiquity attributes.

The system checks this property only when the file coordinator’s [addFilePresenter:](../nsfilecoordinator/addfilepresenter%28__%29.md) method is called. Make all changes to this property before calling [addFilePresenter:](../nsfilecoordinator/addfilepresenter%28__%29.md).

## See Also

### Ubiquity Change Notifications

- [presentedItemDidChangeUbiquityAttributes:](presenteditemdidchangeubiquityattributes%28__%29.md): Tells your object that the file or file package’s ubiquity attributes have changed.
