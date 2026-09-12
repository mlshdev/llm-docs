> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intentsui/inuihostedviewsiriproviding/displaysmap](https://developer.apple.com/documentation/intentsui/inuihostedviewsiriproviding/displaysmap)

# displaysMap (Swift)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces any default map interface.

## Declaration

```swift
optional var displaysMap: Bool { get }
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to provide the map showing location-related information. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays its own map in addition to the content that you provide.

## See Also

### Overriding the Default Behavior

- [displaysMessage](displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.
- [displaysPaymentTransaction](displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.

# displaysMap (Objective-C)

**Framework:** IntentsUI  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether your view controller replaces any default map interface.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL displaysMap;
```

## Mentioned In

- [Configuring the View Controller for Your Custom Interface](../../sirikit/configuring-the-view-controller-for-your-custom-interface.md)

<a id="Discussion"></a>

## Discussion

Implement this property and return [true](https://developer.apple.com/documentation/swift/true) when you want your view controller to provide the map showing location-related information. If you do not implement this property, or your implementation returns [false](https://developer.apple.com/documentation/swift/false), Siri displays its own map in addition to the content that you provide.

## See Also

### Overriding the Default Behavior

- [displaysMessage](displaysmessage.md): A Boolean indicating whether your view controller replaces the default message interface that Siri provides.
- [displaysPaymentTransaction](displayspaymenttransaction.md): A Boolean indicating whether your view controller replaces the default payment transaction interface that Siri provides.
