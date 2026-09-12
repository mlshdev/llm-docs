> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527223-event_id_constants/kaeopencontents](https://developer.apple.com/documentation/coreservices/1527223-event_id_constants/kaeopencontents)

# kAEOpenContents

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
kAEOpenContents = 'ocon'
```

<a id="discussion"></a>

## Discussion

Event that provides an application with dragged content, such as text or an image. Sent, for example, when a user drags an image file onto your application’s icon in the Dock. The application can use the content as desired—for example, if no document is currently open, it might open a new document and insert the provided text or image.

For more information, see Handling Apple Events Sent by the Mac OS in Responding to Apple Events in Apple Events Programming Guide.
