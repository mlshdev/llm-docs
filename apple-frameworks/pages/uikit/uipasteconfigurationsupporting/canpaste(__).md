> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfigurationsupporting/canpaste(_:)](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting/canpaste(_:))

# canPaste(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether the responder object can perform a paste operation using data provided by the item providers.

## Declaration

```swift
optional func canPaste(_ itemProviders: [NSItemProvider]) -> Bool
```

## Parameters

- `itemProviders`: An array of [NSItemProvider](../../foundation/nsitemprovider.md) objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder object can perform a paste operation using specified item providers; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Performing a paste operation

- [paste(itemProviders:)](paste%28itemproviders_%29.md): Performs a paste operation on the responder object.

# canPasteItemProviders: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value that determines whether the responder object can perform a paste operation using data provided by the item providers.

## Declaration

```objectivec
- (BOOL) canPasteItemProviders:(NSArray<NSItemProvider *> *) itemProviders;
```

## Parameters

- `itemProviders`: An array of [NSItemProvider](../../foundation/nsitemprovider.md) objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the responder object can perform a paste operation using specified item providers; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Performing a paste operation

- [pasteItemProviders:](paste%28itemproviders_%29.md): Performs a paste operation on the responder object.
