> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/disableactions()](https://developer.apple.com/documentation/quartzcore/catransaction/disableactions())

# disableActions() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.

## Declaration

```swift
class func disableActions() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if actions are disabled.

<a id="Discussion"></a>

## Discussion

This is a convenience method that returns the `boolValue` for the [value(forKey:)](value%28forkey_%29.md) value returned by the  [kCATransactionDisableActions](../kcatransactiondisableactions.md) key.

## See Also

### Temporarily Disabling Property Animations

- [setDisableActions(\_:)](setdisableactions%28__%29.md): Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.

# disableActions (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.

## Declaration

```objectivec
+ (BOOL) disableActions;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if actions are disabled.

<a id="Discussion"></a>

## Discussion

This is a convenience method that returns the `boolValue` for the [valueForKey:](value%28forkey_%29.md) value returned by the  [kCATransactionDisableActions](../kcatransactiondisableactions.md) key.

## See Also

### Temporarily Disabling Property Animations

- [setDisableActions:](setdisableactions%28__%29.md): Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.
