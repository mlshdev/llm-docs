> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1527223-event_id_constants](https://developer.apple.com/documentation/coreservices/1527223-event_id_constants)

# Event ID Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specify the event ID for an Apple event.

## Declaration

```objectivec
enum : AEEventID {
    ...
};
```

## Topics

### Constants

- [kAEOpenApplication](1527223-event_id_constants/kaeopenapplication.md): Event that launches an application.
- [kAEReopenApplication](1556377-kaeqdnotor/kaereopenapplication.md): Event that reopens an application. Sent, for example, when your application is running and a user clicks your application icon in the Dock.
- [kAEOpenDocuments](1527223-event_id_constants/kaeopendocuments.md)
- [kAEPrintDocuments](1527223-event_id_constants/kaeprintdocuments.md): Event that provides an application with a list of documents to print.
- [kAEOpenContents](1527223-event_id_constants/kaeopencontents.md)
- [kAEQuitApplication](1527223-event_id_constants/kaequitapplication.md): Event that causes the application to quit.
- [kAEAnswer](1527223-event_id_constants/kaeanswer.md): Event that is a reply Apple event.
- [kAEApplicationDied](1527223-event_id_constants/kaeapplicationdied.md): Event sent by the Process Manager to an application that launched another application when the launched application quits or terminates.
- [kAEShowPreferences](1527223-event_id_constants/kaeshowpreferences.md)
