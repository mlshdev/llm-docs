> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/resultscollection](https://developer.apple.com/documentation/appintents/resultscollection)

# ResultsCollection

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A protocol representing a collection of returned items with support for sectioning.

## Declaration

```swift
protocol ResultsCollection<Result>
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)

## Topics

### Associated Types

- [Result](resultscollection/result.md)

### Instance Properties

- [items](resultscollection/items.md): All result items.
- [promptLabel](resultscollection/promptlabel.md): A text prompt shown at the top of the view that presents the options.
- [usesIndexedCollation](resultscollection/usesindexedcollation.md): If set to true, presents the list of options with an alphabetical index on the right side of the screen (table view section index titles).

### Type Properties

- [empty](resultscollection/empty.md): An empty result.

## Relationships

### Conforming Types

- [IntentItemCollection](intentitemcollection.md)

## See Also

### Results

- [IntentResult](intentresult.md): A type that contains the result of performing an action, and includes optional information to deliver back to the initiator.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentResultContainer](intentresultcontainer.md): An object that represents the output of a completed intent.
- [ProvidesDialog](providesdialog.md): The result of performing an action that delivers a dialog back to the initiator of the action.
- [ReturnsValue](returnsvalue.md): The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): The result of performing an action that delivers a view back to the initiator of the action.
- [OpensIntent](opensintent.md): A result type that indicates your app intent returns another app intent.
