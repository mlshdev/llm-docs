> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.recordzonesresponse/zones

# zones

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

The zones for the successful database operations.

## Declaration

```
readonly attribute CloudKit.RecordZone[] zones;
```

<a id="Discussion"></a>

## Discussion

The objects in the array have a single property with this format: `{zoneID: {zoneName: ‘zone’}}`.
