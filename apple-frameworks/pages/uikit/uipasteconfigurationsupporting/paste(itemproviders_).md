> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfigurationsupporting/paste(itemproviders:)](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting/paste(itemproviders:))

# paste(itemProviders:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs a paste operation on the responder object.

## Declaration

```swift
optional func paste(itemProviders: [NSItemProvider])
```

## Parameters

- `itemProviders`: An array of [NSItemProvider](../../foundation/nsitemprovider.md) objects.

<a id="Discussion"></a>

## Discussion

This method performs a paste operation on the responder object, pasting the data provided by specified item providers.

## See Also

### Performing a paste operation

- [canPaste(\_:)](canpaste%28__%29.md): Returns a Boolean value that determines whether the responder object can perform a paste operation using data provided by the item providers.

# pasteItemProviders: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Performs a paste operation on the responder object.

## Declaration

```objectivec
- (void) pasteItemProviders:(NSArray<NSItemProvider *> *) itemProviders;
```

## Parameters

- `itemProviders`: An array of [NSItemProvider](../../foundation/nsitemprovider.md) objects.

<a id="Discussion"></a>

## Discussion

This method performs a paste operation on the responder object, pasting the data provided by specified item providers.

## See Also

### Performing a paste operation

- [canPasteItemProviders:](canpaste%28__%29.md): Returns a Boolean value that determines whether the responder object can perform a paste operation using data provided by the item providers.
