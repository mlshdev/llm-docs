> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/errormessage/details-data.dictionary/info-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/errormessage/details-data.dictionary/info-data.dictionary)

# ErrorMessage.Details.Info

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

An object (string-to-string map) with additional structured context for a specific validation failure.

## Declaration

```
object ErrorMessage.Details.Info
```

## Properties

- `Any Key` — `string`:

<a id="Discussion"></a>

## Discussion

Each key names a piece of context specific to the failure, such as `field`, not a fixed field name. The `info` field is a free-form map rather than an object with named properties, so the reference page labels this key `Any Key`. For example, when a request fails because it omits the required `eventTime` filter, the top-level [ErrorMessage](../../errormessage.md) example shows a `details` entry with `info: { "field": "eventTime" }`, naming the missing field.
