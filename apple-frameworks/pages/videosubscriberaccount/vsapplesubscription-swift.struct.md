> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsapplesubscription-swift.struct](https://developer.apple.com/documentation/videosubscriberaccount/vsapplesubscription-swift.struct)

# VSAppleSubscription

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

An Apple streaming service customer and their subscriptions.

## Declaration

```swift
struct VSAppleSubscription
```

## Topics

### Creating an Apple subscription

- [init(customerID:productCodes:)](vsapplesubscription-swift.struct/init%28customerid_productcodes_%29.md): Initializes an Apple subscription object.

### Identifying a subscription

- [customerID](vsapplesubscription-swift.struct/customerid.md): The identifier of the customer as previously reported to Apple.
- [productCodes](vsapplesubscription-swift.struct/productcodes.md): A list of product codes for Apple services the customer subscribes to.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### TV app integration

- [VSSubscriptionRegistrationCenter](vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.
- [VSAccountApplicationProvider](vsaccountapplicationprovider.md): An object to display app-specific providers in your app.
