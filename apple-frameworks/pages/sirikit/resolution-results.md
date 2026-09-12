> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikit/resolution-results](https://developer.apple.com/documentation/sirikit/resolution-results)

# Resolution Results

**Interface languages:** Swift, Objective-C

**Framework:** Intents  
**Kind:** API Collection

Resolve common types of data like strings and dates into specific values that your app recognizes.

## Topics

### Base Class

- [INIntentResolutionResult](../intents/inintentresolutionresult.md): A resolution result for a parameter of an intent object.

### Custom Resolution Results

- [INEnumResolutionResult](../intents/inenumresolutionresult.md): A resolution result for an enumeration associated with an intent.
- [INObjectResolutionResult](../intents/inobjectresolutionresult.md): A resolution result for an Object associated with an intent.

### Contacts

- [INPersonResolutionResult](../intents/inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INPlacemarkResolutionResult](../intents/inplacemarkresolutionresult.md): A resolution result for placemark information associated with an intent.

### Files

- [INFileResolutionResult](../intents/infileresolutionresult.md): A resolution result for a file associated with an intent.

### URLs

- [INURLResolutionResult](../intents/inurlresolutionresult.md): A resolution result for the types media destinations.

### Strings

- [INStringResolutionResult](../intents/instringresolutionresult.md): A resolution result for a string value associated with an intent.
- [INSpeakableStringResolutionResult](../intents/inspeakablestringresolutionresult.md): A resolution result for a speakable string object associated with an intent.

### Numerical Values

- [INIntegerResolutionResult](../intents/inintegerresolutionresult.md): A resolution result for an integer value associated with an intent.
- [INDoubleResolutionResult](../intents/indoubleresolutionresult.md): A resolution result for a double value associated with an intent.
- [INBooleanResolutionResult](../intents/inbooleanresolutionresult.md): A resolution result for a Boolean value associated with an intent.

### Dates and Times

- [INDateComponentsRangeResolutionResult](../intents/indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INDateComponentsResolutionResult](../intents/indatecomponentsresolutionresult.md): A resolution result for the date information associated with an intent.
- [INTimeIntervalResolutionResult](../intents/intimeintervalresolutionresult.md): A resolution result for a time interval associated with an intent.

### Money

- [INCurrencyAmountResolutionResult](../intents/incurrencyamountresolutionresult.md): A resolution result for a currency amount associated with an intent.

### Measurements

- [INEnergyResolutionResult](../intents/inenergyresolutionresult.md): A resolution result for an energy parameter associated with an intent.
- [INLengthResolutionResult](../intents/inlengthresolutionresult.md): A resolution result for a length associated with an intent.
- [INMassResolutionResult](../intents/inmassresolutionresult.md): A resolution result for a mass associated with an intent.
- [INSpeedResolutionResult](../intents/inspeedresolutionresult.md): A resolution result for a speed associated with an intent.
- [INTemperatureResolutionResult](../intents/intemperatureresolutionresult.md): A resolution result for the units to use with a temperature value.
- [INVolumeResolutionResult](../intents/involumeresolutionresult.md): A resolution result for a volume associated with an intent.

## See Also

### Intents

- [Dispatching intents to handlers](dispatching-intents-to-handlers.md): Provide SiriKit with an intent handler capable of handling a specific intent.
- [Resolving and Handling Intents](resolving-and-handling-intents.md): Resolve, confirm, and handle user requests for your app’s services.
- [INIntent](../intents/inintent.md): A request to fulfill in your app or Intents extension.
- [INIntentResponse](../intents/inintentresponse.md): Your response to an intent object.
- [Intent Handling Infrastructure](intent-handling-infrastructure.md): Specify required permissions and provide handlers for the intents your app supports, and configure app extensions.
- [Providing Hands-Free App Control with Intents](providing-hands-free-app-control-with-intents.md): Resolve, confirm, and handle intents without an extension.
- [Common Data Types](common-data-types.md): Manage common data types such as strings, dates, currencies, images, and contacts.
