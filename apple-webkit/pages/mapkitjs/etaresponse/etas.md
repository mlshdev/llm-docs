> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/etaresponse/etas](https://developer.apple.com/documentation/mapkitjs/etaresponse/etas)

# etas

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.46+

An array of estimated arrival times.

## Declaration

```
etas: EtaResult[];
```

<a id="Discussion"></a>

## Discussion

The server returns [etas](etas.md) as a part of the [EtaResponse](../etaresponse.md) after your app creates an instance of the [Directions](../directions.md) object and calls the [eta()](../directions/eta.md) method.

## See Also

### Estimated Arrival Time Responses

- [origin](origin.md): The coordinates that represent the starting point for estimated arrival time requests.
