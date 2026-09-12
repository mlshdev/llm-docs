> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:transform:)](https://developer.apple.com/documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:transform:))

# textPasteConfigurationSupporting(\_:transform:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate to transform the pasted or dropped text item.

## Declaration

```swift
optional func textPasteConfigurationSupporting(_ textPasteConfigurationSupporting: any UITextPasteConfigurationSupporting, transform item: any UITextPasteItem)
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `item`: The text paste item included in the paste or drop operation.

<a id="Discussion"></a>

## Discussion

This method is called for each text paste item during a paste or drop operation. You’re required to call one of the `setResult` methods (see Setting a text paste item’s result value) on `item`, but the call doesn’t have to be within the scope of the transform method. It can, for example, be part of the asynchronous handling code for the [itemProvider](../uitextpasteitem/itemprovider.md), or it can be part of a completion block. You can make the call whenever you prefer.

It’s safe to use the provided [UITextPasteItem](../uitextpasteitem.md) object on any thread, but the transform method is always called on the main thread.

# textPasteConfigurationSupporting:transformPasteItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate to transform the pasted or dropped text item.

## Declaration

```objectivec
- (void) textPasteConfigurationSupporting:(id<UITextPasteConfigurationSupporting>) textPasteConfigurationSupporting transformPasteItem:(id<UITextPasteItem>) item;
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `item`: The text paste item included in the paste or drop operation.

<a id="Discussion"></a>

## Discussion

This method is called for each text paste item during a paste or drop operation. You’re required to call one of the `setResult` methods (see Setting a text paste item’s result value) on `item`, but the call doesn’t have to be within the scope of the transform method. It can, for example, be part of the asynchronous handling code for the [itemProvider](../uitextpasteitem/itemprovider.md), or it can be part of a completion block. You can make the call whenever you prefer.

It’s safe to use the provided [UITextPasteItem](../uitextpasteitem.md) object on any thread, but the transform method is always called on the main thread.
