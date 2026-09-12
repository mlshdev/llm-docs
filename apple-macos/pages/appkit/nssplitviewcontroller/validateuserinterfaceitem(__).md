> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitviewcontroller/validateuserinterfaceitem(_:)](https://developer.apple.com/documentation/appkit/nssplitviewcontroller/validateuserinterfaceitem(_:))

# validateUserInterfaceItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a Boolean value that indicates whether to enable the specified item.

## Declaration

```swift
@MainActor func validateUserInterfaceItem(_ item: any NSValidatedUserInterfaceItem) -> Bool
```

## Parameters

- `item`: The user interface item to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item responds to [toggleSidebar(\_:)](togglesidebar%28__%29.md), [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

# validateUserInterfaceItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns a Boolean value that indicates whether to enable the specified item.

## Declaration

```objectivec
- (BOOL) validateUserInterfaceItem:(id<NSValidatedUserInterfaceItem>) item;
```

## Parameters

- `item`: The user interface item to validate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified item responds to [toggleSidebar:](togglesidebar%28__%29.md), [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.
