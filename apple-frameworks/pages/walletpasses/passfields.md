> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/passfields](https://developer.apple.com/documentation/walletpasses/passfields)

# PassFields

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · watchOS 1.0+

An object that represents the groups of fields that display information on the front and back of a pass.

## Declaration

```
object PassFields
```

## Properties

- `additionalInfoFields` — `PassFields.AdditionalInfoFields`: An object that represents fields that display in the Additional Info section below a pass.
- `auxiliaryFields` — `PassFields.AuxiliaryFields`: An object that represents the fields that display additional information on the front of a pass.
- `backFields` — `PassFields.BackFields`: An object that represents the fields that display information on the back of a pass.
- `headerFields` — `PassFields.HeaderFields`: An object that represents the fields that display information at the top of a pass.
- `primaryFields` — `PassFields.PrimaryFields`: An object that represents the fields that display the most important information on a pass.
- `secondaryFields` — `PassFields.SecondaryFields`: An object that represents the fields that display supporting information on the front of a pass.

## Mentioned In

- [Creating a coupon pass](creating-a-coupon-pass.md)
- [Creating a poster generic pass](creating-a-poster-generic-pass.md)
- [Creating a store card pass](creating-a-store-card-pass.md)

## Topics

### Adding content to the front of a pass

- [PassFields.PrimaryFields](passfields/primaryfields-data.dictionary.md): An object that represents the fields that display the most important information on the front of a pass.
- [PassFields.SecondaryFields](passfields/secondaryfields-data.dictionary.md): An object that represents the fields that display supporting information on the front of a pass.
- [PassFields.AuxiliaryFields](passfields/auxiliaryfields-data.dictionary.md): An object that represents the fields that display additional information on the front of a pass.
- [PassFields.HeaderFields](passfields/headerfields-data.dictionary.md): An object that represents the fields that display information at the top of a pass.

### Adding content to the back of a pass

- [PassFields.BackFields](passfields/backfields-data.dictionary.md): An object that represents the fields that display information on the back of a pass.

### Adding content to the Additional Info section

- [PassFields.AdditionalInfoFields](passfields/additionalinfofields-data.dictionary.md): An object that represents fields that display in the Additional Info section below a pass.

## Relationships

### Inherited By

- [Pass.BoardingPass](pass/boardingpass-data.dictionary.md)
- [Pass.Coupon](pass/coupon-data.dictionary.md)
- [Pass.EventTicket](pass/eventticket-data.dictionary.md)
- [Pass.Generic](pass/generic-data.dictionary.md)
- [Pass.StoreCard](pass/storecard-data.dictionary.md)

## See Also

### Essentials

- [Creating a pass with Pass Designer](creating-a-pass-with-pass-designer.md): Construct and customize a variety of pass styles with this easy-to-use tool.
- [Creating a poster generic pass](creating-a-poster-generic-pass.md): Construct a digital pass with information that enables people to take action.
- [Creating the Source for a Pass](creating-the-source-for-a-pass.md): Create the directory structure and add source files and images to define a pass.
- [Building a Pass](building-a-pass.md): Build a distributable pass.
- [Defining the metadata of your Wallet Pass](defining-the-metadata-of-your-wallet-pass.md): Provide customizable information for your Wallet Pass.
- [Distributing and updating a pass](distributing-and-updating-a-pass.md): Distribute a pass to your users or update an existing pass.
- [Pass](pass.md): An object that represents a pass.
