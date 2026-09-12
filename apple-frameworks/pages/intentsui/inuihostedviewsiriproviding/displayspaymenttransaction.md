> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuihostedviewsiriproviding/displayspaymenttransaction](https://developer.apple.com/documentation/intentsui/inuihostedviewsiriproviding/displayspaymenttransaction)

# displaysPaymentTransaction (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

## Declaration

```swift
optional var displaysPaymentTransaction: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to display the payment details of a transaction. For example, you might return [true](https://developer.apple.com/documentation/swift/true) when you want to provide a customized payment interface. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays payment details using its own interface.

## See Also

### Overriding the Default Behavior

- [displaysMap](displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysMessage](displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.

# displaysPaymentTransaction (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL displaysPaymentTransaction;
```

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to display the payment details of a transaction. For example, you might return [true](https://developer.apple.com/documentation/swift/true) when you want to provide a customized payment interface. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays payment details using its own interface.

## See Also

### Overriding the Default Behavior

- [displaysMap](displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysMessage](displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.
