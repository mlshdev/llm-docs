> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/opensintent](https://developer.apple.com/documentation/appintents/opensintent)

# OpensIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A result type that indicates your app intent returns another app intent.

## Declaration

```swift
protocol OpensIntent : IntentResult
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)

<a id="overview"></a>

## Overview

Add this protocol as a return type for an app intent’s [perform()](appintent/perform%28%29.md) method when the method returns another app intent to run. When returning the result, you can return any type of app intent that makes sense for the current action. For example, an app intent to create a photo album might return an app intent to open that album in the app’s interface. After you return an app intent as a result, the system runs it to perform its action.

The following code shows how to add this protocol to your [perform()](appintent/perform%28%29.md) method. When returning an app intent, specify any type that adopts the [AppIntent](appintent.md) protocol.

```swift
func perform() async throws -> some ReturnsValue<Int> & OpensIntent {
    .result(value: 1, opensIntent: MyCustomAppIntent())
}
```

## Relationships

### Inherits From

- [IntentResult](intentresult.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [IntentResultContainer](intentresultcontainer.md)

## See Also

### Results

- [IntentResult](intentresult.md): A type that contains the result of performing an action, and includes optional information to deliver back to the initiator.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentResultContainer](intentresultcontainer.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` conforms to `Copyable`, `Snippet` conforms to `Escapable`, `Dialog` conforms to `Copyable`, and `Dialog` conforms to `Escapable`. An object that represents the output of a completed intent.
- [ProvidesDialog](providesdialog.md): The result of performing an action that delivers a dialog back to the initiator of the action.
- [ReturnsValue](returnsvalue.md): The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): The result of performing an action that delivers a view back to the initiator of the action.
- [ResultsCollection](resultscollection.md): A protocol representing a collection of returned items with support for sectioning.
