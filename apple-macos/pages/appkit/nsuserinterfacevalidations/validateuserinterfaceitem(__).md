> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserinterfacevalidations/validateuserinterfaceitem(_:)](https://developer.apple.com/documentation/appkit/nsuserinterfacevalidations/validateuserinterfaceitem(_:))

# validateUserInterfaceItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the sender should be enabled.

## Declaration

```swift
@MainActor func validateUserInterfaceItem(_ item: any NSValidatedUserInterfaceItem) -> Bool
```

## Parameters

- `item`: The user interface item to validate. You can send `anItem` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user interface item should be enabled, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [User Interface Validation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/UIValidation/UIValidation.html#//apple_ref/doc/uid/10000040i)

# validateUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the sender should be enabled.

## Declaration

```objectivec
- (BOOL) validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```

## Parameters

- `item`: The user interface item to validate. You can send `anItem` the [action](../nsvalidateduserinterfaceitem/action.md) and [tag](../nsvalidateduserinterfaceitem/tag.md) messages.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the user interface item should be enabled, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [User Interface Validation](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/UIValidation/UIValidation.html#//apple_ref/doc/uid/10000040i)
