> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsobjectcontroller/validateuserinterfaceitem(_:)](https://developer.apple.com/documentation/appkit/nsobjectcontroller/validateuserinterfaceitem(_:))

# validateUserInterfaceItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the receiver can handle the action method for a user interface item.

## Declaration

```swift
func validateUserInterfaceItem(_ item: any NSValidatedUserInterfaceItem) -> Bool
```

## Parameters

- `item`: The user interface item to validate. You can send `item` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can handle the action method; [false](https://developer.apple.com/documentation/swift/false) if it cannot.

# validateUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the receiver can handle the action method for a user interface item.

## Declaration

```objectivec
- (BOOL) validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```

## Parameters

- `item`: The user interface item to validate. You can send `item` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can handle the action method; [false](https://developer.apple.com/documentation/swift/false) if it cannot.
