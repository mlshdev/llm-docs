> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentdialog/init(full:supporting:)](https://developer.apple.com/documentation/appintents/intentdialog/init(full:supporting:))

# init(full:supporting:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.

## Declaration

```swift
init(full: LocalizedStringResource, supporting: LocalizedStringResource)
```

<a id="discussion"></a>

## Discussion

Parameters:

- full: a standalone message that fully describes the output
- supporting: a message that may be used in conjunction with visual output

## See Also

### Creating a dialog

- [init(\_:)](init%28__%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:systemImageName:)](init%28full_systemimagename_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [init(full:supporting:systemImageName:)](init%28full_supporting_systemimagename_%29.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
