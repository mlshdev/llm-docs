> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi/certainty](https://developer.apple.com/documentation/weatherkitrestapi/certainty)

# Certainty

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Type  
**Availability:** Weather API 1.0.0+

How likely the event is to occur.

## Declaration

```
string Certainty
```

## Possible Values

- `observed`:
- `likely`:
- `possible`:
- `unlikely`:
- `unknown`:

<a id="Possible-Values"></a>

## Possible Values

- **observed**: The event has already occurred or is ongoing.
- **likely**: The event is likely to occur (greater than 50% probability).
- **possible**: The event is unlikley to occur (less than 50% probability).
- **unlikely**: The event is not expected to occur (approximately 0% probability).
- **unknown**: It is unknown if the event will occur.

## See Also

### Obtaining event information

- [EventText](eventtext.md): The official text describing a severe weather event from the agency.
