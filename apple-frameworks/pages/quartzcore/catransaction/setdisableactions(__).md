> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/setdisableactions(_:)](https://developer.apple.com/documentation/quartzcore/catransaction/setdisableactions(_:))

# setDisableActions(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.

## Declaration

```swift
class func setDisableActions(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true), if actions should be disabled.

<a id="Discussion"></a>

## Discussion

This is a convenience method that invokes [setValue(\_:forKey:)](setvalue%28__forkey_%29.md) with an `NSNumber` containing a [true](https://developer.apple.com/documentation/swift/true) for the  [kCATransactionDisableActions](../kcatransactiondisableactions.md) key.

## See Also

### Temporarily Disabling Property Animations

- [disableActions()](disableactions%28%29.md): Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.

# setDisableActions: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets whether actions triggered as a result of property changes made within this transaction group are suppressed.

## Declaration

```objectivec
+ (void) setDisableActions:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true), if actions should be disabled.

<a id="Discussion"></a>

## Discussion

This is a convenience method that invokes [setValue:forKey:](setvalue%28__forkey_%29.md) with an `NSNumber` containing a [true](https://developer.apple.com/documentation/swift/true) for the  [kCATransactionDisableActions](../kcatransactiondisableactions.md) key.

## See Also

### Temporarily Disabling Property Animations

- [disableActions](disableactions%28%29.md): Returns whether actions triggered as a result of property changes made within this transaction group are suppressed.
