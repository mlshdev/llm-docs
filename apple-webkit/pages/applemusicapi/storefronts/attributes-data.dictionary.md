> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/storefronts/attributes-data.dictionary](https://developer.apple.com/documentation/applemusicapi/storefronts/attributes-data.dictionary)

# Storefronts.Attributes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The attributes for the storefronts resource.

## Declaration

```
object Storefronts.Attributes
```

## Properties

- `defaultLanguageTag` — `string` (required): The default supported RFC4646 language tag for the storefront.
- `explicitContentPolicy` — `string` (required): Attribute indicating the level that this storefront can display explicit content.
  **Allowed values:** `allowed`, `opt-in`, `prohibited`
- `name` — `string` (required): The localized name of the storefront.
- `supportedLanguageTags` — `[string]` (required): The supported RFC4646 language tags for the storefront.
