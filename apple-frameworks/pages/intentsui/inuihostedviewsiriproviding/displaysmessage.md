> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuihostedviewsiriproviding/displaysmessage](https://developer.apple.com/documentation/intentsui/inuihostedviewsiriproviding/displaysmessage)

# displaysMessage (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces the default message interface that Siri provides.

## Declaration

```swift
optional var displaysMessage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to display the content and recipients of a message. For example, you might return [true](https://developer.apple.com/documentation/swift/true) when you want to provide a customized message interface. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays the message recipients and content using its own interface.

## See Also

### Overriding the Default Behavior

- [displaysMap](displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysPaymentTransaction](displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

# displaysMessage (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces the default message interface that Siri provides.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL displaysMessage;
```

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to display the content and recipients of a message. For example, you might return [true](https://developer.apple.com/documentation/swift/true) when you want to provide a customized message interface. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays the message recipients and content using its own interface.

## See Also

### Overriding the Default Behavior

- [displaysMap](displaysmap.md): A Boolean indicating whether your view controller replaces any default map interface.
- [displaysPaymentTransaction](displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.
