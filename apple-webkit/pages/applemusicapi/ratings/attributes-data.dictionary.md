> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/ratings/attributes-data.dictionary](https://developer.apple.com/documentation/applemusicapi/ratings/attributes-data.dictionary)

# Ratings.Attributes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The attributes for a rating resource.

## Declaration

```
object Ratings.Attributes
```

## Properties

- `value` — `integer`: The value for the resource’s rating. The possible values for the value key are `1` and `-1`. If a value isn’t present, the content doesn’t have a rating.
  **Allowed values:** `-1`, `1`

## See Also

### Related Objects

- [Ratings.Relationships](relationships-data.dictionary.md): The relationships for a rating resource.
