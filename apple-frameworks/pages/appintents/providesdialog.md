> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/providesdialog](https://developer.apple.com/documentation/appintents/providesdialog)

# ProvidesDialog

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The result of performing an action that delivers a dialog back to the initiator of the action.

## Declaration

```swift
protocol ProvidesDialog : IntentResult where Self.Dialog == IntentDialog
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
- [IntentResultContainer](intentresultcontainer.md): Conforms when `Value` conforms to `_IntentValue`, `OpensAppIntent` conforms to `AppIntent`, `Snippet` conforms to `Copyable`, `Snippet` conforms to `Escapable`, and `Dialog` is `IntentDialog`. An object that represents the output of a completed intent.
- [ReturnsValue](returnsvalue.md): The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): The result of performing an action that delivers a view back to the initiator of the action.
- [ResultsCollection](resultscollection.md): A protocol representing a collection of returned items with support for sectioning.
- [OpensIntent](opensintent.md): A result type that indicates your app intent returns another app intent.
