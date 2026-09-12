> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/common-data-types](https://developer.apple.com/documentation/appintents/common-data-types)

# Common data types

**Framework:** App Intents  
**Kind:** API Collection

Use framework-defined types for common parameter and result data types such as contacts, files, currencies, and more.

<a id="Overview"></a>

## Overview

When creating your app intents or app entities, use existing types for parameters and properties whenever possible. The App Intents framework provides common data types to represent people, files, currencies, and more. Choose the type that matches your app’s data and fill its properties with data from your app.

## Topics

### Contacts

- [IntentPerson](intentperson.md): Information that identifies a person participating in an intents-based interaction.

### Files

- [IntentFile](intentfile.md): An interface for providing an app entity that represents an on-disk file or file-based resource.

### Media

- [AudioSearch](../mediaintents/audiosearch.md): Results and metadata for a person’s audio search and playback request with Siri.
- [Media Intents](../mediaintents.md): Enable people to use Siri to find and play media from your app.

### Monetary types

- [IntentCurrencyAmount](intentcurrencyamount.md): An amount of money to transfer during a financial transaction.
- [IntentPaymentMethod](intentpaymentmethod.md): Information about a form of payment supported by your app.

### Items and collections

- [IntentItem](intentitem.md): A type describing a value returned from a dynamic options provider, plus information about how to display it to users.
- [IntentItemCollection](intentitemcollection.md): Return this object to provide an advanced list of options, optionally divided in sections.
- [IntentItemSection](intentitemsection.md): An object you use to divide dynamic options into sections.
- [IntentCollectionSize](intentcollectionsize.md)
- [IntentResponseStream](intentresponsestream.md)

## See Also

### App-specific content

- [App intents](app-intents.md): Make your app’s custom actions available to the system by using app intent types.
- [App entities](app-entities.md): Make your app’s core types and data concepts available to the system using app entity types.
- [App enums](app-enums.md): Make your app’s enumerations and predefined values available to the system by using app enum types.
- [App extension](app-extension.md): Deliver app intents in an app extension or other package that lives outside your app’s code.
