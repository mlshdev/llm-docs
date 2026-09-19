> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/storefronts

# Storefronts

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.1+

A resource object that represents a region that the content is available in, and supported languages for that region.

## Declaration

```
object Storefronts
```

## Properties

- `attributes` — `Storefronts.Attributes`: The attributes for the storefronts resource type.
- `href` — `string` (required): A relative location for the storefronts resource.
- `id` — `string` (required): The identifier for the storefronts resource.
- `type` — `string` (required): The type of the resource. The only allowed value is `storefronts`.
  **Allowed values:** `storefronts`

## Topics

### Related Objects

- [Storefronts.Attributes](storefronts/attributes-data.dictionary.md): The attributes for the storefronts resource.

## See Also

### Handling the response

- [StorefrontsResponse](storefrontsresponse.md): The response to a storefront request.
