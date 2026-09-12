> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/personalizationdictionary](https://developer.apple.com/documentation/walletpasses/personalizationdictionary)

# PersonalizationDictionary

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Object  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

An object that contains the information you use to personalize a pass.

## Declaration

```
object PersonalizationDictionary
```

## Properties

- `personalizationToken` — `string` (required): The personalization token for this request. The server must sign and return the token.
- `requiredPersonalizationInfo` — `PersonalizationDictionary.RequiredPersonalizationInfo` (required): An object that contains the user-entered information for a personalized pass.

## Topics

### Reading the User Information

- [PersonalizationDictionary.RequiredPersonalizationInfo](personalizationdictionary/requiredpersonalizationinfo-data.dictionary.md): An object that contains the user-entered information for a personalized pass.

## See Also

### Personalized passes

- [Return a Personalized Pass](return-a-personalized-pass.md): Create and sign a personalized pass, and send it to a device.
