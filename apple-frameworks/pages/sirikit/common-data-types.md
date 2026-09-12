> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/common-data-types](https://developer.apple.com/documentation/sirikit/common-data-types)

# Common Data Types

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Manage common data types such as strings, dates, currencies, images, and contacts.

## Topics

### Contacts

- [INPerson](../intents/inperson.md): Information about a person participating in a SiriKit interaction.
- [INPersonHandle](../intents/inpersonhandle.md): The identifying information for a user of your app.
- [INPersonHandleLabel](../intents/inpersonhandlelabel.md): Constants describing how the person handle relates to the user.

### Images

- [INImage](../intents/inimage.md): Image data inside an Intents extension or Intents UI extension.

### String

- [INSpeakableString](../intents/inspeakablestring.md): A custom phrase to be resolved by an Intents extension.
- [INSpeakable](../intents/inspeakable.md): Pronunciation hints for strings used in a spoken interface.

### Monetary

- [INCurrencyAmount](../intents/incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPriceRange](../intents/inpricerange.md): Price information, as a range of possible values.

### Date

- [INDateComponentsRange](../intents/indatecomponentsrange.md): A span of time.
- [INRecurrenceRule](../intents/inrecurrencerule.md): An object that describes the pattern to use when repeating an event.

### Logical

- [INConditionalOperator](../intents/inconditionaloperator.md): Constants indicating how search attributes are interpreted.

### Files

- [INFile](../intents/infile.md): An object that describes a file.

### Custom Objects

- [INObject](../intents/inobject.md): A representation of a custom intent parameter or response property.
- [INObjectCollection](../intents/inobjectcollection.md)
- [INObjectSection](../intents/inobjectsection.md)

## See Also

### Intents

- [Dispatching intents to handlers](dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntent](../intents/inintent.md): A request to fulfill in your app or Intents extension.
- [INIntentResponse](../intents/inintentresponse.md): Your response to an intent object.
- [Intent Handling Infrastructure](intent-handling-infrastructure.md): Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.
- [Providing Hands-Free App Control with Intents](providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Resolution Results](resolution-results.md): Resolve common types of data like strings and dates into specific values that your app recognizes.
