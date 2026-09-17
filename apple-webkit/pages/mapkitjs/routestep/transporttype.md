> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkitjs/routestep/transporttype

# transportType

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.0+

The transport type of the step.

## Declaration

```
transportType: TransportType | null;
```

<a id="Discussion"></a>

## Discussion

This property reflects the transport type employed by the step and may differ from the transport type of the overall route.

## See Also

### Route step details

- [instructions](instructions.md): The written instructions for following the path that the step represents.
- [distance](distance.md): The step distance, in meters.
