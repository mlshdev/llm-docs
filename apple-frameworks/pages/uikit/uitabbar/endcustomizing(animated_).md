> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/endcustomizing(animated:)](https://developer.apple.com/documentation/uikit/uitabbar/endcustomizing(animated:))

# endCustomizing(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Dismisses the standard interface used to customize the tab bar.

## Declaration

```swift
func endCustomizing(animated: Bool) -> Bool
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animate the dismissal of the interface.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if items on the tab bar changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

You rarely need to call this method. Typically, the user dismisses the modal view by tapping the built-in Done button in the interface. However, you might call this method to cancel the customization process because of changes to other parts of your interface.

## See Also

### Supporting user customization of tab bars

- [beginCustomizingItems(\_:)](begincustomizingitems%28__%29.md): Presents a standard interface that lets the user customize the contents of the tab bar.
- [isCustomizing](iscustomizing.md): A Boolean value indicating whether the user is currently customizing the tab bar.

# endCustomizingAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Dismisses the standard interface used to customize the tab bar.

## Declaration

```objectivec
- (BOOL) endCustomizingAnimated:(BOOL) animated;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animate the dismissal of the interface.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if items on the tab bar changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

You rarely need to call this method. Typically, the user dismisses the modal view by tapping the built-in Done button in the interface. However, you might call this method to cancel the customization process because of changes to other parts of your interface.

## See Also

### Supporting user customization of tab bars

- [beginCustomizingItems:](begincustomizingitems%28__%29.md): Presents a standard interface that lets the user customize the contents of the tab bar.
- [customizing](iscustomizing.md): A Boolean value indicating whether the user is currently customizing the tab bar.
