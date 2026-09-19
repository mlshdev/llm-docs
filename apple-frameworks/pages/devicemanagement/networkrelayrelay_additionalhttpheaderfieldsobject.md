> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/networkrelayrelay_additionalhttpheaderfieldsobject

# NetworkRelayRelay_AdditionalHTTPHeaderFieldsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A dictionary that contains custom HTTP header keys and values to add to each request. The dictionary key name represents the HTTP header field name to use, and the dictionary value is the string to use as the HTTP header field value.

## Declaration

```
object NetworkRelayRelay_AdditionalHTTPHeaderFieldsObject
```

## Properties

- `ANY` — `string` (required): The HTTP header field value for the corresponding header field name.
