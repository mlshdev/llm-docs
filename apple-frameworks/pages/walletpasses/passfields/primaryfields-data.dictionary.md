> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/passfields/primaryfields-data.dictionary](https://developer.apple.com/documentation/walletpasses/passfields/primaryfields-data.dictionary)

# PassFields.PrimaryFields

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · watchOS 1.0+

An object that represents the fields that display the most important information on the front of a pass.

## Declaration

```
object PassFields.PrimaryFields
```

## Mentioned In

- [Supporting semantic tags in Wallet passes](../supporting-semantic-tags-in-wallet-passes.md)
- [Creating an airline boarding pass using semantic tags](../creating-an-airline-boarding-pass-using-semantic-tags.md)
- [Creating a poster event pass using semantic tags](../creating-an-event-pass-using-semantic-tags.md)
- [Creating the Source for a Pass](../creating-the-source-for-a-pass.md)

<a id="Discussion"></a>

## Discussion

Use this field to provide information that helps people use the pass, for example, the city departure and destination names for a boarding pass or the type of admission (general, VIP) for an event pass.

## Relationships

### Inherits From

- [PassFieldContent](../passfieldcontent.md)

## See Also

### Adding content to the front of a pass

- [PassFields.SecondaryFields](secondaryfields-data.dictionary.md): An object that represents the fields that display supporting information on the front of a pass.
- [PassFields.AuxiliaryFields](auxiliaryfields-data.dictionary.md): An object that represents the fields that display additional information on the front of a pass.
- [PassFields.HeaderFields](headerfields-data.dictionary.md): An object that represents the fields that display information at the top of a pass.
