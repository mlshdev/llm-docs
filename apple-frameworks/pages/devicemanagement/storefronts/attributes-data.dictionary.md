> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/storefronts/attributes-data.dictionary](https://developer.apple.com/documentation/devicemanagement/storefronts/attributes-data.dictionary)

# Storefronts.Attributes

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

The attributes for the storefronts resource.

## Declaration

```
object Storefronts.Attributes
```

## Properties

- `defaultLanguageTag` — `string` (required): The default supported RFC 4646 language tag for the storefront.
- `name` — `string` (required): The localized name of the storefront.
- `supportedLanguageTags` — `[string]` (required): The supported RFC 4646 language tags for the storefront.
