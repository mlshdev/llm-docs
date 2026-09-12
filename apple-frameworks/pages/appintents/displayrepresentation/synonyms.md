> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/displayrepresentation/synonyms](https://developer.apple.com/documentation/appintents/displayrepresentation/synonyms)

# synonyms

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A list of localized phrases that are synonyms of this particular display representation

## Declaration

```swift
var synonyms: [LocalizedStringResource]
```

<a id="discussion"></a>

## Discussion

Example:

```swift
DisplayRepresentation(
    name: "Pizza",
    synonyms: ["Pie", "Za"]
)
```

In this case, “Pie”, “Za” and “Pizza” are all ways to display this
