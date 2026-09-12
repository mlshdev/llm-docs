> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/accessibilitydeclaration](https://developer.apple.com/documentation/appstoreconnectapi/accessibilitydeclaration)

# AccessibilityDeclaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

An app’s self-reported accessibility features and conformance information submitted for App Store review.

## Declaration

```
object AccessibilityDeclaration
```

## Properties

- `attributes` — `AccessibilityDeclaration.Attributes`: Attributes that describe this accessibility declaration resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `type` — `string` (required): The resource type.
  **Allowed values:** `accessibilityDeclarations`

## Topics

### Dictionaries

- [AccessibilityDeclaration.Attributes](accessibilitydeclaration/attributes-data.dictionary.md): The attributes you set that describe the accessibility declaration resource.

## See Also

### Objects

- [AccessibilityDeclarationsResponse](accessibilitydeclarationsresponse.md): A response containing a list of accessibility declarations.
- [AccessibilityDeclarationCreateRequest](accessibilitydeclarationcreaterequest.md): The request body you use to create an accessibility declaration for an app.
- [AccessibilityDeclarationResponse](accessibilitydeclarationresponse.md): A response containing a single accessibility declaration for an app.
- [AccessibilityDeclarationUpdateRequest](accessibilitydeclarationupdaterequest.md): The request body you use to update an accessibility declaration for an app.
- [AppAccessibilityDeclarationsLinkagesResponse](appaccessibilitydeclarationslinkagesresponse.md)
- [DeviceFamily](devicefamily.md): String that represents a device family.
