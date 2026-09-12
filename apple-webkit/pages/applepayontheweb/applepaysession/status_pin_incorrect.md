> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/status_pin_incorrect](https://developer.apple.com/documentation/applepayontheweb/applepaysession/status_pin_incorrect)

# STATUS_PIN_INCORRECT

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The PIN information is not valid.

## Declaration

```
const unsigned short STATUS_PIN_INCORRECT;
```

<a id="Discussion"></a>

## Discussion

Cards on the China Union Pay network may require a PIN.

## See Also

### Status code constants

- [STATUS_FAILURE](status_failure.md): The requested action failed.
- [STATUS_INVALID_BILLING_POSTAL_ADDRESS](status_invalid_billing_postal_address.md): The billing address is invalid.
- [STATUS_INVALID_SHIPPING_CONTACT](status_invalid_shipping_contact.md): The shipping contact information is invalid.
- [STATUS_INVALID_SHIPPING_POSTAL_ADDRESS](status_invalid_shipping_postal_address.md): The shipping address is invalid.
- [STATUS_PIN_LOCKOUT](status_pin_lockout.md): The maximum number of tries for a PIN has been reached and the user has been locked out.
- [STATUS_PIN_REQUIRED](status_pin_required.md): The required PIN information was not provided.
- [STATUS_SUCCESS](status_success.md): The requested action succeeded.
