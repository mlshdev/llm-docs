> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession](https://developer.apple.com/documentation/proximityreader/customerengagementsession)

# CustomerEngagementSession

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The object you use to share and request customer information.

## Declaration

```swift
final class CustomerEngagementSession
```

## Mentioned In

- [Adding support for Tap to Share to your app](adding-support-for-tap-to-share-to-your-app.md)

## Topics

### Configuring a session

- [CustomerEngagementSession.Configuration](customerengagementsession/configuration-swift.struct.md): A set of configuration options for a customer engagement session.
- [configuration](customerengagementsession/configuration-swift.property.md): Configuration for this session.
- [open(using:)](customerengagementsession/open%28using_%29.md): Opens the engagement session.
- [close()](customerengagementsession/close%28%29.md): Closes the engagement session.
- [CustomerEngagementSession.Token](customerengagementsession/token-swift.struct.md): A session token.

### Getting customer configuration

- [CustomerEngagementSession.CustomerConfiguration](customerengagementsession/customerconfiguration-swift.struct.md): A structure that contains configuration details for the connected customer device.
- [customerConfiguration](customerengagementsession/customerconfiguration-swift.property.md): A structure containing configuration information of the customer device.
- [CustomerEngagementSession.PeerClientType](customerengagementsession/peerclienttype.md): A value that indicates the type of connected peer client.

### Getting events during a session

- [CustomerEngagementSession.Event](customerengagementsession/event.md): Events that occur during a customer engagement session.
- [events](customerengagementsession/events.md): An asynchronous sequence of events that occur during the engagement session.

### Requesting and getting customer information

- [requestCustomerInfo(for:fields:message:)](customerengagementsession/requestcustomerinfo%28for_fields_message_%29.md): Opens a form so that the customer can share the contact information.
- [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](customerengagementsession/requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md): Opens a form so that the customer can share the contact information for the purpose of sign-up activity.
- [requestAddress(for:fields:message:)](customerengagementsession/requestaddress%28for_fields_message_%29.md): Opens a form so that the customer can share the postal address and additionally collect email address and phone number.
- [requestPayment(for:using:delegate:)](customerengagementsession/requestpayment%28for_using_delegate_%29.md): Opens a form so a customer can select a payment option.
- [CustomerEngagementSession.Purpose](customerengagementsession/purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.Field](customerengagementsession/field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](customerengagementsession/consentoption.md): An option on the sign-up form to receive promotional emails and text messages.

### Updating the customer status and cart

- [updateStatus(\_:)](customerengagementsession/updatestatus%28__%29.md): Updates the status on the customer’s screen.
- [updateShoppingCart(\_:)](customerengagementsession/updateshoppingcart%28__%29.md): Updates the shopping cart on the customer’s device.

### Adding a pass to Wallet

- [addPass(\_:)](customerengagementsession/addpass%28__%29.md): Asks the customer to confirm adding a Pass to Wallet.

### Handling errors

- [CustomerEngagementSession.Error](customerengagementsession/error.md): Errors that can occur during the engagement session.

### Initializers

- [init(configuration:)](customerengagementsession/init%28configuration_%29.md): Creates a customer engagement session with the specified configuration.

### Instance Properties

- [token](customerengagementsession/token-swift.property.md): The session token.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tap to Share

- [Adding support for Tap to Share to your app](adding-support-for-tap-to-share-to-your-app.md): Request and share customer information on device.
- [CustomerEngagement](customerengagement.md): An enumeration of the shared data between the merchant and customer.
