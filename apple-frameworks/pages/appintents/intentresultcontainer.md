> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresultcontainer](https://developer.apple.com/documentation/appintents/intentresultcontainer)

# IntentResultContainer

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An object that represents the output of a completed intent.

## Declaration

```swift
struct IntentResultContainer<Value, OpensAppIntent, Snippet, Dialog> where Value : _IntentValue, OpensAppIntent : AppIntent
```

<a id="overview"></a>

## Overview

Use the `IntentResult.result()` family of functions to create instances

## Topics

### Instance Properties

- [activityIdentifier](intentresultcontainer/activityidentifier.md)
- [dialog](intentresultcontainer/dialog.md)
- [opensIntent](intentresultcontainer/opensintent.md): Deprecated.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [IntentResult](intentresult.md)
- [OpensIntent](opensintent.md)
- [ProvidesDialog](providesdialog.md)
- [ReturnsValue](returnsvalue.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShowsSnippetIntent](showssnippetintent.md)
- [ShowsSnippetView](showssnippetview.md)

## See Also

### Results

- [IntentResult](intentresult.md): A type that contains the result of performing an action, and includes optional information to deliver back to the initiator.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [ProvidesDialog](providesdialog.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` conforms to `Copyable`, `Snippet` conforms to `Escapable`, and `Dialog` is `IntentDialog`. The result of performing an action that delivers a dialog back to the initiator of the action.
- [ReturnsValue](returnsvalue.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` conforms to `Copyable`, `Snippet` conforms to `Escapable`, `Dialog` conforms to `Copyable`, and `Dialog` conforms to `Escapable`. The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` is `_SnippetViewContainer`, `Dialog` conforms to `Copyable`, and `Dialog` conforms to `Escapable`. The result of performing an action that delivers a view back to the initiator of the action.
- [ResultsCollection](resultscollection.md): A protocol representing a collection of returned items with support for sectioning.
- [OpensIntent](opensintent.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` conforms to `Copyable`, `Snippet` conforms to `Escapable`, `Dialog` conforms to `Copyable`, and `Dialog` conforms to `Escapable`. A result type that indicates your app intent returns another app intent.
