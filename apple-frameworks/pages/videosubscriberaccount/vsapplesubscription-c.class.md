> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsapplesubscription-c.class](https://developer.apple.com/documentation/videosubscriberaccount/vsapplesubscription-c.class)

# VSAppleSubscription

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+

An Apple streaming service customer and their subscriptions.

## Declaration

```objectivec
@interface VSAppleSubscription : NSObject
```

## Topics

### Creating an Apple subscription

- [initWithCustomerID:productCodes:](vsapplesubscription-c.class/initwithcustomerid_productcodes_.md): Initializes an Apple subscription object.

### Identifying a subscription

- [customerID](vsapplesubscription-c.class/customerid.md): A list of product codes for Apple services the customer subscribes to.
- [productCodes](vsapplesubscription-c.class/productcodes.md): A list of product codes for Apple services the customer subscribes to.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### TV app integration

- [VSSubscriptionRegistrationCenter](vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.
- [VSAccountApplicationProvider](vsaccountapplicationprovider.md): An object to display app-specific providers in your app.
