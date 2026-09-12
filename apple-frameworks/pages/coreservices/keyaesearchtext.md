> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/keyaesearchtext](https://developer.apple.com/documentation/coreservices/keyaesearchtext)

# keyAESearchText

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```swift
var keyAESearchText: AEKeyword { get }
```

<a id="discussion"></a>

## Discussion

Identifies an optional parameter to the `opendocuments` Apple event, described in [Event ID Constants](apple_events/1527223-event_id_constants.md). The parameter contains the search text from the Spotlight search that identified the documents to be opened. The application should make a reasonable effort to display an occurrence of the search text in each opened document—for example by scrolling the text into view.

For more information, see Handling Apple Events Sent by the Mac OS in Responding to Apple Events in Apple Events Programming Guide.
