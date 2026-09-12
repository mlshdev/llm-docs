> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/reservationid](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/reservationid)

# reservationId

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Type  
**Availability:** Siri Event Suggestions Markup 1.0+

A stable, unique identifier for the reservation.

## Declaration

```
string reservationId
```

## Mentioned In

- [Checking Your Reservation Markup](checking-your-reservation-markup.md)

<a id="Discussion"></a>

## Discussion

Use a consistent, unique identifier for each reservation. If you also provide reservation information with [Siri Event Suggestions](https://developer.apple.com/documentation/sirikit/siri-event-suggestions) in your app, use a single, consistent value for that [reservationNumber](https://developer.apple.com/documentation/intents/inreservation/reservationnumber) and this `reservationId`.

## See Also

### Basic Data Types

- [@context](@context.md): The open standard reference for interpreting the markup contents.
- [dateTimeISO8601](datetimeiso8601.md): A time and date in the ISO-8601 format.
- [reservationStatus](reservationstatus.md): A string indicating that the reservation has been confirmed or canceled.
- [URL](url.md): The address of a webpage.
- [telephone](telephone.md): A phone number.
