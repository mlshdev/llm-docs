> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilecoordinator/item(at:didchangeubiquityattributes:)](https://developer.apple.com/documentation/foundation/nsfilecoordinator/item(at:didchangeubiquityattributes:))

# item(at:didChangeUbiquityAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells observing file providers that the item’s ubiquity attributes have changed.

## Declaration

```swift
func item(at url: URL, didChangeUbiquityAttributes attributes: Set<URLResourceKey>)
```

<a id="Discussion"></a>

## Discussion

This method triggers the [NSFilePresenter](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_6) protocol’s [presentedItemDidChangeUbiquityAttributes(\_:)](../nsfilepresenter/presenteditemdidchangeubiquityattributes%28__%29.md) method on any file presenters that are observing the item, even if they are running in different processes.

For information about the types of attributes that can trigger notifications, see the [NSFilePresenter](../nsfilepresenter.md) protocol’s [observedPresentedItemUbiquityAttributes](../nsfilepresenter/observedpresenteditemubiquityattributes.md) property.

# itemAtURL:didChangeUbiquityAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Tells observing file providers that the item’s ubiquity attributes have changed.

## Declaration

```objectivec
- (void) itemAtURL:(NSURL *) url didChangeUbiquityAttributes:(NSSet<NSString *> *) attributes;
```

<a id="Discussion"></a>

## Discussion

This method triggers the [NSFilePresenter](https://developer.apple.com/library/archive/releasenotes/Foundation/RN-FoundationOlderNotes/index.html#//apple_ref/doc/uid/TP40008080-TRANSLATED_CHAPTER_965-TRANSLATED_DEST_6) protocol’s [presentedItemDidChangeUbiquityAttributes:](../nsfilepresenter/presenteditemdidchangeubiquityattributes%28__%29.md) method on any file presenters that are observing the item, even if they are running in different processes.

For information about the types of attributes that can trigger notifications, see the [NSFilePresenter](../nsfilepresenter.md) protocol’s [observedPresentedItemUbiquityAttributes](../nsfilepresenter/observedpresenteditemubiquityattributes.md) property.
