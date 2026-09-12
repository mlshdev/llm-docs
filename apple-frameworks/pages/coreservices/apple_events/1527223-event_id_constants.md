> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1527223-event_id_constants](https://developer.apple.com/documentation/coreservices/apple_events/1527223-event_id_constants)

# Event ID Constants

**Framework:** Core Services

Specify the event ID for an Apple event.

<a id="overview"></a>

## Overview

Apple events are identified by their event class and event ID attributes. The event ID is the attribute that identifies the particular Apple event within its event class. In conjunction with the event class, the event ID uniquely identifies the Apple event and communicates what action the Apple event should perform. The event ID appears in the `where` field of the event record for an Apple event. For example, an event with ID `kAEOpenApplication` and class `kCoreEventClass` is an event sent by the Mac OS that launches an application.

Only a small number of event IDs are shown here. For a more complete listing, see the Apple Event Manager and Open Scripting Architecture header files.

## Topics

### Constants

- [kAEOpenApplication](../kaeopenapplication.md): Event that launches an application.
- [kAEReopenApplication](../kaereopenapplication.md): Event that reopens an application. Sent, for example, when your application is running and a user clicks your application icon in the Dock.
- [kAEOpenDocuments](../kaeopendocuments.md)
- [kAEPrintDocuments](../kaeprintdocuments.md): Event that provides an application with a list of documents to print.
- [kAEOpenContents](../kaeopencontents.md)
- [kAEQuitApplication](../kaequitapplication.md): Event that causes the application to quit.
- [kAEAnswer](../kaeanswer.md): Event that is a reply Apple event.
- [kAEApplicationDied](../kaeapplicationdied.md): Event sent by the Process Manager to an application that launched another application when the launched application quits or terminates.
- [kAEShowPreferences](../kaeshowpreferences.md)
