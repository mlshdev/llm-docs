> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepayrequestbase/shippingcontacteditingmode](https://developer.apple.com/documentation/applepayontheweb/applepayrequestbase/shippingcontacteditingmode)

# shippingContactEditingMode

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Instance Property  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

A value that indicates whether the shipping mode prevents the user from editing the shipping address.

## Declaration

```
ApplePayShippingContactEditingMode shippingContactEditingMode;
```

<a id="Discussion"></a>

## Discussion

Set the value to `storePickup` for an in-store or other pickup to prevent the user from editing the shipping address.

For more information on configuring a package for store pickup, see [Displaying a Read-Only Pickup Address](https://developer.apple.com/documentation/passkit/displaying-a-read-only-pickup-address).

> **Important**

>  Determine whether to disable editing of the shipping contact field before displaying the payment sheet. Switching from a noneditable to an editable shipping contact field requires the user to restart the payment process.

## See Also

### Setting contact information

- [billingContact](billingcontact.md): A prepopulated billing address.
- [shippingContact](shippingcontact.md): The customer’s address, used for sending products or services for to the person.
