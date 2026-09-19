> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1556378-anonymous/keyaesearchtext

# keyAESearchText

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
keyAESearchText = 'stxt'
```

<a id="discussion"></a>

## Discussion

Identifies an optional parameter to the `opendocuments` Apple event, described in [Event ID Constants](../1527223-event_id_constants.md). The parameter contains the search text from the Spotlight search that identified the documents to be opened. The application should make a reasonable effort to display an occurrence of the search text in each opened document—for example by scrolling the text into view.

For more information, see Handling Apple Events Sent by the Mac OS in Responding to Apple Events in Apple Events Programming Guide.
