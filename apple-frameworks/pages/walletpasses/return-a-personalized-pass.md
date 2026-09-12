> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/walletpasses/return-a-personalized-pass](https://developer.apple.com/documentation/walletpasses/return-a-personalized-pass)

# Return a Personalized Pass

**Interface language:** Data

**Framework:** Wallet Passes  
**Kind:** Web Service Endpoint  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · watchOS 3.0+

Create and sign a personalized pass, and send it to a device.

## URL

```http
POST https://yourpasshost.example.com/v1/passes/{passTypeIdentifier}/{serialNumber}/personalize
```

## Path Parameters

- `passTypeIdentifier` — `string` (required): The pass type identifier of the pass. This value corresponds to the value of the `passTypeIdentifier` key of the pass.
- `serialNumber` — `string` (required): The serial number of the pass. This value corresponds to the `serialNumber` key of the pass.

## HTTP Body

Content type: `application/json`

Type: `PersonalizationDictionary`

An object that contains the personalization information for the pass.

## Response Codes

- `200` OK: The request is successful and returns a signed personalization token.

## See Also

### Personalized passes

- [PersonalizationDictionary](personalizationdictionary.md): An object that contains the information you use to personalize a pass.
