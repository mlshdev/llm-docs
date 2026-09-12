> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/accessibilitydeclarationresponse](https://developer.apple.com/documentation/appstoreconnectapi/accessibilitydeclarationresponse)

# AccessibilityDeclarationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single accessibility declaration for an app.

## Declaration

```
object AccessibilityDeclarationResponse
```

## Properties

- `data` — `AccessibilityDeclaration` (required):
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AccessibilityDeclaration](accessibilitydeclaration.md): An app’s self-reported accessibility features and conformance information submitted for App Store review.
- [AccessibilityDeclarationsResponse](accessibilitydeclarationsresponse.md): A response containing a list of accessibility declarations.
- [AccessibilityDeclarationCreateRequest](accessibilitydeclarationcreaterequest.md): The request body you use to create an accessibility declaration for an app.
- [AccessibilityDeclarationUpdateRequest](accessibilitydeclarationupdaterequest.md): The request body you use to update an accessibility declaration for an app.
- [AppAccessibilityDeclarationsLinkagesResponse](appaccessibilitydeclarationslinkagesresponse.md)
- [DeviceFamily](devicefamily.md): String that represents a device family.
