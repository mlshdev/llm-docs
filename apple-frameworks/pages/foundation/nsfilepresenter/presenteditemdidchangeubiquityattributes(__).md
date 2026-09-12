> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presenteditemdidchangeubiquityattributes(_:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presenteditemdidchangeubiquityattributes(_:))

# presentedItemDidChangeUbiquityAttributes(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells your object that the file or file package’s ubiquity attributes have changed.

## Declaration

```swift
optional func presentedItemDidChangeUbiquityAttributes(_ attributes: Set<URLResourceKey>)
```

## Parameters

- `attributes`: The set of ubiquity attributes that have changed. For information about valid ubiquity attributes, see the [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md) property.

<a id="Discussion"></a>

## Discussion

To specify the ubiquity attributes that trigger notifications, implement your file provider’s [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md) property. If you do not implement this property, the system sends notifications when any ubiquity attribute changes.

> **Note**

>  Changes to the ubiquity attributes don’t typically align with [presentedItemDidChange()](presenteditemdidchange%28%29.md) notifications.

## See Also

### Related Documentation

- [item(at:didChangeUbiquityAttributes:)](../nsfilecoordinator/item%28at_didchangeubiquityattributes_%29.md): Tells observing file providers that the item’s ubiquity attributes have changed.

### Ubiquity Change Notifications

- [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md): A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.

# presentedItemDidChangeUbiquityAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells your object that the file or file package’s ubiquity attributes have changed.

## Declaration

```objectivec
- (void) presentedItemDidChangeUbiquityAttributes:(NSSet<NSString *> *) attributes;
```

## Parameters

- `attributes`: The set of ubiquity attributes that have changed. For information about valid ubiquity attributes, see the [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md) property.

<a id="Discussion"></a>

## Discussion

To specify the ubiquity attributes that trigger notifications, implement your file provider’s [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md) property. If you do not implement this property, the system sends notifications when any ubiquity attribute changes.

> **Note**

>  Changes to the ubiquity attributes don’t typically align with [presentedItemDidChange](presenteditemdidchange%28%29.md) notifications.

## See Also

### Related Documentation

- [itemAtURL:didChangeUbiquityAttributes:](../nsfilecoordinator/item%28at_didchangeubiquityattributes_%29.md): Tells observing file providers that the item’s ubiquity attributes have changed.

### Ubiquity Change Notifications

- [observedPresentedItemUbiquityAttributes](observedpresenteditemubiquityattributes.md): A list of ubiquity attributes used to generate and send notifications whenever an attribute in the list changes.
