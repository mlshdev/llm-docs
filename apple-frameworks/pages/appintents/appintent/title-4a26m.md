> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/title-4a26m](https://developer.apple.com/documentation/appintents/appintent/title-4a26m)

# title

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A short, localized, human-readable string that conveys the app intent’s action.

## Declaration

```swift
static var title: LocalizedStringResource { get }
```

<a id="discussion"></a>

## Discussion

Specify title strings using a verb followed by a noun in title case. For example, an action to open an album might have the title “Open Album”. If the app intent conforms to a schema, the schema provides this value.
