> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appencryptiondeclaration/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appencryptiondeclaration/attributes-data.dictionary)

# AppEncryptionDeclaration.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Attributes that describe an App Encryption Declarations resource.

## Declaration

```
object AppEncryptionDeclaration.Attributes
```

## Properties

- `availableOnFrenchStore` — `boolean`: A Boolean value that indicates the intent to distribute your app on the French App Store.
- `codeValue` — `string`: A unique identifier that can be added to your app to associate it with a given declaration.
- `containsProprietaryCryptography` — `boolean`: A Boolean value that indicates your app implements any proprietary encryption algorithms.
- `containsThirdPartyCryptography` — `boolean`: A Boolean value that indicates your app implements any standard encryption algorithms instead of, or in addition to, using or accessing the encryption in Apple’s operating systems.
- `documentName` — `string`: The document name of your submitted export compliance documentation.
- `documentType` — `string`: The file type of your submitted export compliance documentation.
- `documentUrl` — `string`: The URL to the file of your submitted export compliance documentation.
- `exempt` — `boolean`: A Boolean value that indicates your app is exempt based on your use of encryption and the app’s availability.
- `platform` — `Platform`: The platform of the declaration.
- `usesEncryption` — `boolean`: A Boolean value that indicates whether your app uses, contains, or incorporates cryptography.
- `appEncryptionDeclarationState` — `AppEncryptionDeclarationState`: The approval state of your export compliance documentation.
- `uploadedDate` — `date-time`: The date and time you submitted your declaration.
- `appDescription` — `string`:
- `createdDate` — `date-time`:

## See Also

### Related Documentation

- [App Encryption Declarations](../app-encryption-declarations.md): View, and assign to builds, the declarations about types of encryption used in your app.

### Objects

- [AppEncryptionDeclaration.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
