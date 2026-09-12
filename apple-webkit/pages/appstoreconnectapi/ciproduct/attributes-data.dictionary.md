> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciproduct/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/ciproduct/attributes-data.dictionary)

# CiProduct.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

The attributes that describe a Products resource.

## Declaration

```
object CiProduct.Attributes
```

## Properties

- `createdDate` — `date-time`: The date when you created the Xcode Cloud product.
- `name` — `string`: The name of the Xcode Cloud product.
- `productType` — `string`: A string that indicates whether the Xcode Cloud product is a framework or an app.
  **Allowed values:** `APP`, `FRAMEWORK`

## See Also

### Objects

- [CiProduct.Relationships](relationships-data.dictionary.md): The relationships of the Products resource you included in the request and those on which you can operate.
