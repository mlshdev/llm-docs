> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdialog/init(full:supporting:systemimagename:)](https://developer.apple.com/documentation/appintents/intentdialog/init(full:supporting:systemimagename:))

# init(full:supporting:systemImageName:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.

## Declaration

```swift
init(full: LocalizedStringResource, supporting: LocalizedStringResource, systemImageName: String)
```

<a id="discussion"></a>

## Discussion

Parameters:

- full: a standalone message that fully describes the output
- supporting: a message that may be used in conjunction with visual output
- systemImageName: an SF Symbol that may be be used to represent the result

## See Also

### Creating a dialog

- [init(\_:)](init%28__%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:supporting:)](init%28full_supporting_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:systemImageName:)](init%28full_systemimagename_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
