> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/event](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/event)

# Event

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A sporting event, live show, or other scheduled event.

## Declaration

```
object Event
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Event`, `ScreeningEvent`
- `location` — `Place` (required): The venue hosting the event.
- `name` — `string` (required): The name of the event.
- `startDate` — `dateTimeISO8601` (required): The time and date the event starts.
- `endDate` — `dateTimeISO8601`: The time and date the event ends.
