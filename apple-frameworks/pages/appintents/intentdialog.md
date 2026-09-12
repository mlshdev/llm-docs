> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdialog](https://developer.apple.com/documentation/appintents/intentdialog)

# IntentDialog

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.

## Declaration

```swift
struct IntentDialog
```

## Mentioned In

- [Creating your first app intent](creating-your-first-app-intent.md)
- [Displaying static and interactive snippets](displaying-static-and-interactive-snippets.md)

## Topics

### Creating a dialog

- [init(\_:)](intentdialog/init%28__%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:supporting:)](intentdialog/init%28full_supporting_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:systemImageName:)](intentdialog/init%28full_systemimagename_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:supporting:systemImageName:)](intentdialog/init%28full_supporting_systemimagename_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Results

- [IntentResult](intentresult.md): A type that contains the result of performing an action, and includes optional information to deliver back to the initiator.
- [IntentResultContainer](intentresultcontainer.md): An object that represents the output of a completed intent.
- [ProvidesDialog](providesdialog.md): The result of performing an action that delivers a dialog back to the initiator of the action.
- [ReturnsValue](returnsvalue.md): The result of performing an action that delivers a value back to the initiator.
- [ShowsSnippetView](showssnippetview.md): The result of performing an action that delivers a view back to the initiator of the action.
- [ResultsCollection](resultscollection.md): A protocol representing a collection of returned items with support for sectioning.
- [OpensIntent](opensintent.md): A result type that indicates your app intent returns another app intent.
