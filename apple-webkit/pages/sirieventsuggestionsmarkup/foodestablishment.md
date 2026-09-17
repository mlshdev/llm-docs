> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirieventsuggestionsmarkup/foodestablishment

# FoodEstablishment

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The restaurant or other food establishment that will host the reservation.

## Declaration

```
object FoodEstablishment
```

## Properties

- `@type` — `string` (required): **Allowed values:** `FoodEstablishment`
- `address` — `PostalAddress` (required): The location of the food establishment.
- `name` — `string` (required): The name of the food establishment.
- `telephone` — `telephone`:
