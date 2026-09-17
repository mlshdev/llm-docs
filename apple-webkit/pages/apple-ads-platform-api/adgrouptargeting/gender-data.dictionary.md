> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargeting/gender-data.dictionary

# AdGroupTargeting.Gender

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Gender targeting for the audience.

## Declaration

```
object AdGroupTargeting.Gender
```

## Properties

- `include` — `[string]`: Gender values (`M` or `F`) restricting delivery to that audience. Mutable.
- `exclude` — `[string]`: Has no effect. `gender` is include-only.

<a id="Discussion"></a>

## Discussion

Used with App Store campaigns. Uses the [TargetingData](../targetingdata.md) `include`/`exclude` shape.

```json
"gender": {
  "include": ["M"]
}
```
