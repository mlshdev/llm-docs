> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/displaying-a-read-only-pickup-address](https://developer.apple.com/documentation/passkit/displaying-a-read-only-pickup-address)

# Displaying a Read-Only Pickup Address (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Article

Configure a payment request to display a read-only pickup address on the payment sheet.

<a id="overview"></a>

## Overview

The payment sheet displays the shipping address in the same place whether the shipping method is delivery or pickup. You can prevent the user from editing the address of a pickup and still require other information about the person making the pickup.

> **Note**

>  This feature is available in apps built for iOS 15, iPadOS 15, watchOS 8, macOS 12, and apps built with Mac Catalyst 15 and later.

<a id="Add-a-Read-Only-Pickup-Address"></a>

### Add a Read-Only Pickup Address

Set the following four properties of your payment request to display a read-only pickup address:

- Set [shippingType](pkpaymentrequest/shippingtype.md) to [PKShippingType.storePickup](pkshippingtype/storepickup.md).
- Add the [postalAddress](pkcontactfield/postaladdress.md) to [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md) to show the pickup address. To request additional information about the person picking up the item, such as a name or phone number, add other required fields.
- Set [shippingContact](pkpaymentrequest/shippingcontact.md) to the pickup address. Optionally set the [name](pkcontact/name.md) of the pickup address to a store or location name.
- Set [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md) to [PKShippingContactEditingMode.storePickup](pkshippingcontacteditingmode/storepickup.md).

The code below configures an in-store pickup at Example Company and requires an email for the pickup person:

```swift
let paymentRequest = PKPaymentRequest

// Set the shipping type.
paymentRequest.shippingType  = .storePickup

// Set the required shipping contact fields to display the pickup address and
// require an email for the person picking up the package.
paymentRequest.requiredShippingContactFields = [.postalAddress, .email]

// Create the shipping contact information.
let addr = CNMutablePostalAddress()
addr.street = "123 Any Street"
addr.city = "Any Town"
addr.state = "CA"
addr.postalCode = "95014"
addr.isoCountryCode = "US"

// Add a store or location name.
let pickupAddress = PKContact()
pickupAddress.postalAddress = addr
// Optionally, add a name to the contact.
pickupAddress.name = PersonNameComponents()
pickupAddress.name?.familyName = "Example Company"

// Set the shipping contact.
paymentRequest.shippingContact = pickupAddress

// Set the shipping contact information to read-only.
paymentRequest.shippingContactEditingMode = .storePickup
```

> **Note**

>  Determine whether to disable editing of the shipping contact field before displaying the payment sheet. Switching from a noneditable to an editable shipping contact field requires the user to start the payment process over again.

## See Also

### Related Documentation

- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.

### Setting the shipping methods and types

- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

# Displaying a Read-Only Pickup Address (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Article

Configure a payment request to display a read-only pickup address on the payment sheet.

<a id="overview"></a>

## Overview

The payment sheet displays the shipping address in the same place whether the shipping method is delivery or pickup. You can prevent the user from editing the address of a pickup and still require other information about the person making the pickup.

> **Note**

>  This feature is available in apps built for iOS 15, iPadOS 15, watchOS 8, macOS 12, and apps built with Mac Catalyst 15 and later.

<a id="Add-a-Read-Only-Pickup-Address"></a>

### Add a Read-Only Pickup Address

Set the following four properties of your payment request to display a read-only pickup address:

- Set [shippingType](pkpaymentrequest/shippingtype.md) to [PKShippingTypeStorePickup](pkshippingtype/storepickup.md).
- Add the [PKContactFieldPostalAddress](pkcontactfield/postaladdress.md) to [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md) to show the pickup address. To request additional information about the person picking up the item, such as a name or phone number, add other required fields.
- Set [shippingContact](pkpaymentrequest/shippingcontact.md) to the pickup address. Optionally set the [name](pkcontact/name.md) of the pickup address to a store or location name.
- Set [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md) to [PKShippingContactEditingModeStorePickup](pkshippingcontacteditingmode/storepickup.md).

The code below configures an in-store pickup at Example Company and requires an email for the pickup person:

```swift
let paymentRequest = PKPaymentRequest

// Set the shipping type.
paymentRequest.shippingType  = .storePickup

// Set the required shipping contact fields to display the pickup address and
// require an email for the person picking up the package.
paymentRequest.requiredShippingContactFields = [.postalAddress, .email]

// Create the shipping contact information.
let addr = CNMutablePostalAddress()
addr.street = "123 Any Street"
addr.city = "Any Town"
addr.state = "CA"
addr.postalCode = "95014"
addr.isoCountryCode = "US"

// Add a store or location name.
let pickupAddress = PKContact()
pickupAddress.postalAddress = addr
// Optionally, add a name to the contact.
pickupAddress.name = PersonNameComponents()
pickupAddress.name?.familyName = "Example Company"

// Set the shipping contact.
paymentRequest.shippingContact = pickupAddress

// Set the shipping contact information to read-only.
paymentRequest.shippingContactEditingMode = .storePickup
```

> **Note**

>  Determine whether to disable editing of the shipping contact field before displaying the payment sheet. Switching from a noneditable to an editable shipping contact field requires the user to start the payment process over again.

## See Also

### Related Documentation

- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.

### Setting the shipping methods and types

- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.
