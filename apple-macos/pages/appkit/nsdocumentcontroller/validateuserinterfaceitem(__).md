> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocumentcontroller/validateuserinterfaceitem(_:)](https://developer.apple.com/documentation/appkit/nsdocumentcontroller/validateuserinterfaceitem(_:))

# validateUserInterfaceItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether a given user interface item should be enabled.

## Declaration

```swift
@MainActor func validateUserInterfaceItem(_ item: any NSValidatedUserInterfaceItem) -> Bool
```

## Parameters

- `item`: The user interface item to validate. You can send `anItem` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` should be enabled, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform additional validations. Subclasses should call the underlying method on `super` in their implementation for items they don’t handle themselves.

# validateUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether a given user interface item should be enabled.

## Declaration

```objectivec
- (BOOL) validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```

## Parameters

- `item`: The user interface item to validate. You can send `anItem` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `item` should be enabled, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Subclasses can override this method to perform additional validations. Subclasses should call the underlying method on `super` in their implementation for items they don’t handle themselves.
