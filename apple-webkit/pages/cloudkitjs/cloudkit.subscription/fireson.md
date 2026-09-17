> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.subscription/fireson

# firesOn

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

An array of keywords that specify the actions that should trigger push notifications. Possible values in the array are: `"create"`, `"update"`, and `"delete"`. This key is not used if `query` is null.

## Declaration

```
attribute String[] firesOn;
```
