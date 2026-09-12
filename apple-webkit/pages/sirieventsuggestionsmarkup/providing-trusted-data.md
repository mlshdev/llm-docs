> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/providing-trusted-data](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/providing-trusted-data)

# Providing Trusted Data

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Article

Sign your content and avoid sending unnecessary or inaccurate information.

<a id="overview"></a>

## Overview

To avoid cluttering the user’s calendar, use [Siri Event Suggestions Markup](../sirieventsuggestionsmarkup.md) only for events that the user has booked. The system also protects the integrity of reservation data by employing security measures to ensure that no one can impersonate your domain to put events on the user’s calendar.

<a id="Provide-Reliable-Events-in-Webpages"></a>

### Provide Reliable Events in Webpages

Only provide markup with a [reservationStatus](reservationstatus.md) of `ReservationConfirmed` on a webpage that includes a confirmed reservation. For example, a page that prompts the user to select their seat before your service finalizes the transaction should use a different `reservationStatus` or not include markup at all. Similarly, a promotional page that advertises a booking the user could make shouldn’t include markup with a `reservationStatus` of `ReservationConfirmed`. Use HTTPS for connections to your service so that Siri can provide trusted information to the user.

<a id="Provide-Reliable-Events-in-Emails"></a>

### Provide Reliable Events in Emails

Provide markup with an accurate [reservationStatus](reservationstatus.md) in emails confirming, updating, or canceling a reservation. Don’t provide reservation markup in other emails from your service, such as advertisements.

Your reservation emails must comply with these security measures:

- Provide a static email address in the From field of the email.
- Sign your emails with DKIM. The DKIM key must be at least 1024 bits and hashed with SHA-256.
- Ensure the top-level domain hosting the public key used for the DKIM signature matches the top-level domain of the email address in the From field of the email.

## See Also

### Essentials

- [Checking Your Reservation Markup](checking-your-reservation-markup.md): Preview your reservation event data before the Allow List includes your domain.
