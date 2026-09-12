> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/validateuserinterfaceitem(_:)](https://developer.apple.com/documentation/appkit/nsdocument/validateuserinterfaceitem(_:))

# validateUserInterfaceItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the specified user interface item that the receiver manages.

## Declaration

```swift
@MainActor func validateUserInterfaceItem(_ item: any NSValidatedUserInterfaceItem) -> Bool
```

## Parameters

- `item`: The user interface item to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

These items currently include only Revert and Save. You can override this method to add more selectors validated by your document subclass.

# validateUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the specified user interface item that the receiver manages.

## Declaration

```objectivec
- (BOOL) validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```

## Parameters

- `item`: The user interface item to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the item is valid; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

These items currently include only Revert and Save. You can override this method to add more selectors validated by your document subclass.
