> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(_:ison:intent:)](https://developer.apple.com/documentation/swiftui/toggle/init(_:ison:intent:))

# init(\_:isOn:intent:)

**Framework:** AppIntents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · watchOS 10.0+

Creates a toggle performing an `AppIntent` and generates its label from a localized string key.

## Declaration

```swift
nonisolated init(_ titleKey: LocalizedStringKey, isOn: Bool, intent: some AppIntent)
```

## Parameters

- `titleKey`: The key for the toggle’s localized title, that describes the purpose of the toggle.
- `isOn`: Whether the toggle is on or off.
- `intent`: The `AppIntent` to be performed.

<a id="discussion"></a>

## Discussion

This initializer creates a [Text](../text.md) view on your behalf, and treats the localized key similar to [init(\_:tableName:bundle:comment:)](../text/init%28__tablename_bundle_comment_%29.md). See `Text` for more information about localizing strings.

To initialize a toggle with a string variable, use [init(\_:isOn:intent:)](init%28__ison_intent_%29.md) instead.

## See Also

### Creating a toggle for an App Intent

- [init(isOn:intent:label:)](init%28ison_intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a toggle performing an `AppIntent`.
