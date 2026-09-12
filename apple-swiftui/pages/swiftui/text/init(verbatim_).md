> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(verbatim:)](https://developer.apple.com/documentation/swiftui/text/init(verbatim:))

# init(verbatim:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a text view that displays a string literal without localization.

## Declaration

```swift
init(verbatim content: String)
```

## Parameters

- `content`: A string to display without localization.

<a id="discussion"></a>

## Discussion

Use this initializer to create a text view with a string literal without performing localization:

```swift
Text(verbatim: "pencil") // Displays the string "pencil" in any locale.
```

If you want to localize a string literal before displaying it, use the [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md) initializer instead. If you want to display a string variable, use the [init(\_:)](https://developer.apple.com/documentation/swiftui/text/init%28_:%29-9d1g4) initializer, which also bypasses localization.

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(\_:formatter:)](init%28__formatter_%29.md): Creates a text view that displays the formatted representation of a Foundation object.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
