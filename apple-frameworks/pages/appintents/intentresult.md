> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentresult](https://developer.apple.com/documentation/appintents/intentresult)

# IntentResult

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that contains the result of performing an action, and includes optional information to deliver back to the initiator.

## Declaration

```swift
protocol IntentResult : Sendable
```

<a id="overview"></a>

## Overview

Instead of implementing this protocol, use the [ReturnsValue](returnsvalue.md), [OpensAppIntent](intentresult/opensappintent.md), [ProvidesDialog](providesdialog.md), and [ShowsSnippetView](showssnippetview.md) type aliases on your [perform()](appintent/perform%28%29.md) implementation in combination with the [result()](intentresult/result%28%29.md) methods as shown in the following example:

```swift
func perform() async throws -> some ReturnsValue<Int> & OpensAppIntent {
    .result(value: 1, opensIntent: MyOpensIntent())
}
```

## Topics

### Getting the result value

- [value](intentresult/value-swift.property.md)

### Communicating the result to the user

- [Dialog](intentresult/dialog.md)

### Associated Types

- [OpensAppIntent](intentresult/opensappintent.md): Deprecated.
- [Snippet](intentresult/snippet.md)
- [Value](intentresult/value-swift.associatedtype.md)

### Type Methods

- [result()](intentresult/result%28%29.md): Indicates the `AppIntent` finished performing
- [result(actionButtonIntent:)](intentresult/result%28actionbuttonintent_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(actionButtonIntent:activityIdentifier:)](intentresult/result%28actionbuttonintent_activityidentifier_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(actionButtonIntent:activityIdentifier:dialog:)](intentresult/result%28actionbuttonintent_activityidentifier_dialog_%29.md): Creates a result container with a follow-on intent, an identifier, and a dialog.
- [result(actionButtonIntent:dialog:)](intentresult/result%28actionbuttonintent_dialog_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(content:)](intentresult/result%28content_%29.md): Indicates the `AppIntent` finished performing
- [result(dialog:)](intentresult/result%28dialog_%29.md): Indicates the `AppIntent` finished performing
- [result(dialog:content:)](intentresult/result%28dialog_content_%29.md): Indicates the `AppIntent` finished performing
- [result(dialog:snippetIntent:)](intentresult/result%28dialog_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet and a success dialog.
- [result(dialog:view:)](intentresult/result%28dialog_view_%29.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:)](intentresult/result%28opensintent_%29-8t8q8.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:content:)](intentresult/result%28opensintent_content_%29-2h5ux.md)
- [result(opensIntent:content:)](intentresult/result%28opensintent_content_%29-965vk.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:dialog:)](intentresult/result%28opensintent_dialog_%29-64q5v.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:dialog:content:)](intentresult/result%28opensintent_dialog_content_%29-2g81m.md)
- [result(opensIntent:dialog:content:)](intentresult/result%28opensintent_dialog_content_%29-9kg66.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:dialog:snippetIntent:)](intentresult/result%28opensintent_dialog_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet with a dialog and returns another intent to open the originating app.
- [result(opensIntent:dialog:view:)](intentresult/result%28opensintent_dialog_view_%29-1w6b6.md): Indicates the `AppIntent` finished performing
- [result(opensIntent:dialog:view:)](intentresult/result%28opensintent_dialog_view_%29-8wkpg.md)
- [result(opensIntent:snippetIntent:)](intentresult/result%28opensintent_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet and returns another intent to open the originating app.
- [result(opensIntent:view:)](intentresult/result%28opensintent_view_%29-4l1d4.md)
- [result(opensIntent:view:)](intentresult/result%28opensintent_view_%29-5hm2s.md): Indicates the `AppIntent` finished performing
- [result(snippetIntent:)](intentresult/result%28snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet.
- [result(value:)](intentresult/result%28value_%29.md): Indicates the `AppIntent` finished performing
- [result(value:actionButtonIntent:)](intentresult/result%28value_actionbuttonintent_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(value:actionButtonIntent:activityIdentifier:)](intentresult/result%28value_actionbuttonintent_activityidentifier_%29.md): Creates a result container with a value, a follow-on intent, and an identifier.
- [result(value:actionButtonIntent:activityIdentifier:dialog:)](intentresult/result%28value_actionbuttonintent_activityidentifier_dialog_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(value:actionButtonIntent:dialog:)](intentresult/result%28value_actionbuttonintent_dialog_%29.md): Indicates the Intent finished performing with an `AppIntent` to continue with
- [result(value:content:)](intentresult/result%28value_content_%29.md): Indicates the `AppIntent` finished performing
- [result(value:dialog:)](intentresult/result%28value_dialog_%29.md): Indicates the `AppIntent` finished performing
- [result(value:dialog:content:)](intentresult/result%28value_dialog_content_%29.md): Indicates the `AppIntent` finished performing
- [result(value:dialog:snippetIntent:)](intentresult/result%28value_dialog_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet with a dialog and returns a value.
- [result(value:dialog:view:)](intentresult/result%28value_dialog_view_%29.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:)](intentresult/result%28value_opensintent_%29-8v5op.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:content:)](intentresult/result%28value_opensintent_content_%29-2f6ht.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:content:)](intentresult/result%28value_opensintent_content_%29-95tmb.md)
- [result(value:opensIntent:dialog:)](intentresult/result%28value_opensintent_dialog_%29-1eg3x.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:dialog:content:)](intentresult/result%28value_opensintent_dialog_content_%29-4iwem.md)
- [result(value:opensIntent:dialog:content:)](intentresult/result%28value_opensintent_dialog_content_%29-mwwf.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:dialog:snippetIntent:)](intentresult/result%28value_opensintent_dialog_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet with a dialog and returns a value and another intent to open the originating app.
- [result(value:opensIntent:dialog:view:)](intentresult/result%28value_opensintent_dialog_view_%29-5sg4p.md)
- [result(value:opensIntent:dialog:view:)](intentresult/result%28value_opensintent_dialog_view_%29-88j6a.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:snippetIntent:)](intentresult/result%28value_opensintent_snippetintent_%29.md): Indicates that a completed app intent displays an interactive snippet and returns a value and another intent to open the originating app.
- [result(value:opensIntent:view:)](intentresult/result%28value_opensintent_view_%29-12wbo.md): Indicates the `AppIntent` finished performing
- [result(value:opensIntent:view:)](intentresult/result%28value_opensintent_view_%29-5z5t0.md)
- [result(value:snippetIntent:)](intentresult/result%28value_snippetintent_%29.md): Indicates that a completed app intent returns a value and displays an interactive snippet.
- [result(value:view:)](intentresult/result%28value_view_%29.md): Indicates the `AppIntent` finished performing
- [result(view:)](intentresult/result%28view_%29.md): Indicates the `AppIntent` finished performing

### Default Implementations

- [IntentResult Implementations](intentresult/intentresult-implementations.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [OpensIntent](opensintent.md)
- [ProvidesDialog](providesdialog.md)
- [ReturnsValue](returnsvalue.md)
- [ShowsSnippetIntent](showssnippetintent.md)
- [ShowsSnippetView](showssnippetview.md)

### Conforming Types

- [IntentResultContainer](intentresultcontainer.md)

## See Also

### Results

- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentResultContainer](intentresultcontainer.md): An object that represents the output of a completed intent.
- [ProvidesDialog](providesdialog.md): The result of performing an action that delivers a dialog back to the initiator of the action.
- [ReturnsValue](returnsvalue.md): The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): The result of performing an action that delivers a view back to the initiator of the action.
- [ResultsCollection](resultscollection.md): A protocol representing a collection of returned items with support for sectioning.
- [OpensIntent](opensintent.md): A result type that indicates your app intent returns another app intent.
