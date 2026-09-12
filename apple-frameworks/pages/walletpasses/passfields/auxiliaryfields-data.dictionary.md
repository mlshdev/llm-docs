> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/passfields/auxiliaryfields-data.dictionary](https://developer.apple.com/documentation/walletpasses/passfields/auxiliaryfields-data.dictionary)

# PassFields.AuxiliaryFields

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · watchOS 1.0+

An object that represents the fields that display additional information on the front of a pass.

## Declaration

```
object PassFields.AuxiliaryFields
```

## Properties

- `row` — `number`: A number you use to add a row to the auxiliary field in an event ticket pass type. Set the value to `1` to add an auxiliary row. Each row displays up to four fields.
  **Allowed values:** `0`, `1`

## Mentioned In

- [Creating an airline boarding pass using semantic tags](../creating-an-airline-boarding-pass-using-semantic-tags.md)
- [Creating a poster event pass using semantic tags](../creating-an-event-pass-using-semantic-tags.md)
- [Supporting semantic tags in Wallet passes](../supporting-semantic-tags-in-wallet-passes.md)

<a id="Discussion"></a>

## Discussion

Use this field to provide information that people might not need every time they use the pass.

Depending on the type of pass, you can interchange the auxiliary and secondary fields. Coupons, store cards, and generic passes with a square barcode can have a combined total of up to four secondary and auxiliary fields.

## Relationships

### Inherits From

- [PassFieldContent](../passfieldcontent.md)

## See Also

### Adding content to the front of a pass

- [PassFields.PrimaryFields](primaryfields-data.dictionary.md): An object that represents the fields that display the most important information on the front of a pass.
- [PassFields.SecondaryFields](secondaryfields-data.dictionary.md): An object that represents the fields that display supporting information on the front of a pass.
- [PassFields.HeaderFields](headerfields-data.dictionary.md): An object that represents the fields that display information at the top of a pass.
