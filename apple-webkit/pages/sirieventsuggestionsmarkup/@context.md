> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/@context](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/@context)

# @context

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Type  
**Availability:** Siri Event Suggestions Markup 1.0+

The open standard reference for interpreting the markup contents.

## Declaration

```
string @context
```

## Possible Values

- `http://schema.org`:

<a id="Overview"></a>

## Overview

For JSON-LD, the `@context` for a reservation should always be `http://schema.org`, as in this example:

```xml
<script type="application/ld+json">{ "@context": "http://schema.org", "@type": "TrainReservation", "reservationId": "ASDF1234" /* more data goes here */ }}</script>
```

For Microdata, provide the URL as part of the `itemtype`, as in this example:

```xml
<section itemscope itemtype="http://schema.org/TrainReservation">
Your reservation
<span itemprop="reservationId">ASDF1234</span>
is confirmed!
/* more data goes here */
</section>
```

## See Also

### Basic Data Types

- [dateTimeISO8601](datetimeiso8601.md): A time and date in the ISO-8601 format.
- [reservationId](reservationid.md): A stable, unique identifier for the reservation.
- [reservationStatus](reservationstatus.md): A string indicating that the reservation has been confirmed or canceled.
- [URL](url.md): The address of a webpage.
- [telephone](telephone.md): A phone number.
