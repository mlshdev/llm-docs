> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/datetimeiso8601](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/datetimeiso8601)

# dateTimeISO8601

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Type  
**Availability:** Siri Event Suggestions Markup 1.0+

A time and date in the ISO-8601 format.

## Declaration

```
date-time dateTimeISO8601
```

## Possible Values

- `/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?(?:Z|[-\+]\d{2}:?\d{2})?)?$//`:

<a id="Overview"></a>

## Overview

Event start and end times must use the ISO-8601 format. Provide the most relevant time zone in each `dateTimeISO8601`. For example, a flight reservation from Indiana to California should provide the departure time in the local time zone at the airport in Indiana and the arrival time in California’s time zone.

## See Also

### Basic Data Types

- [@context](@context.md): The open standard reference for interpreting the markup contents.
- [reservationId](reservationid.md): A stable, unique identifier for the reservation.
- [reservationStatus](reservationstatus.md): A string indicating that the reservation has been confirmed or canceled.
- [URL](url.md): The address of a webpage.
- [telephone](telephone.md): A phone number.
