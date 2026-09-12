> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationattributesresponse/applicationattributesitem](https://developer.apple.com/documentation/devicemanagement/managedapplicationattributesresponse/applicationattributesitem)

# ManagedApplicationAttributesResponse.ApplicationAttributesItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains a managed app attributes item.

## Declaration

```
object ManagedApplicationAttributesResponse.ApplicationAttributesItem
```

## Properties

- `Attributes` — `ManagedApplicationAttributesResponse.ApplicationAttributesItem.Attributes`: The app’s attributes.
- `Identifier` — `string` (required): The app’s bundle identifier.

  > **Note**

  >  For a watchOS app, the identifier is the watch’s bundle identifier, which differs from the main bundle identifier for the iPhone the watch pairs with.

## Topics

### Objects

- [ManagedApplicationAttributesResponse.ApplicationAttributesItem.Attributes](applicationattributesitem/attributes-data.dictionary.md): A dictionary that contains a managed app’s attributes.

## See Also

### Objects

- [ManagedApplicationAttributesResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
