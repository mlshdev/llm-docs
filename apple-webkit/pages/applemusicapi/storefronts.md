> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/storefronts](https://developer.apple.com/documentation/applemusicapi/storefronts)

# Storefronts

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents a storefront, an Apple Music and iTunes Store territory that the content is available in.

## Declaration

```
object Storefronts
```

## Properties

- `id` — `string` (required): The identifier for the storefront.
- `type` — `string` (required): This value must always be `storefronts`.
  **Allowed values:** `storefronts`
- `href` — `string` (required): The relative location for the storefront resource.
- `attributes` — `Storefronts.Attributes`: The attributes for the storefront.

<a id="Discussion"></a>

## Discussion

For the specification of language tags, see [Language Codes](https://help.apple.com/itc/musicspec/?lang=en#/itc740f60829) in iTunes Package Music Specification.

## Topics

### Related Objects

- [Storefronts.Attributes](storefronts/attributes-data.dictionary.md): The attributes for the storefronts resource.
