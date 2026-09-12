> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/text/init(_:formatter:)](https://developer.apple.com/documentation/swiftui/text/init(_:formatter:))

# init(\_:formatter:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a text view that displays the formatted representation of a Foundation object.

## Declaration

```swift
init<Subject>(_ subject: Subject, formatter: Formatter) where Subject : NSObject
```

## Parameters

- `subject`: An [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class) instance compatible with `formatter`.
- `formatter`: A [Formatter](https://developer.apple.com/documentation/foundation/formatter) capable of converting `subject` into a string representation.

<a id="discussion"></a>

## Discussion

Use this initializer to create a text view that formats `subject` using `formatter`.

## See Also

### Creating a text view

- [init(\_:tableName:bundle:comment:)](init%28__tablename_bundle_comment_%29.md): Creates a text view that displays localized content identified by a key.
- [init(\_:)](init%28__%29.md): Creates a text view that displays styled attributed content.
- [init(verbatim:)](init%28verbatim_%29.md): Creates a text view that displays a string literal without localization.
- [init(\_:style:)](init%28__style_%29.md): Creates an instance that displays localized dates and times using a specific style.
- [init(\_:format:)](init%28__format_%29.md): Creates a text view that displays the formatted representation of a nonstring type supported by a corresponding format style.
- [init(timerInterval:pauseTime:countsDown:showsHours:)](init%28timerinterval_pausetime_countsdown_showshours_%29.md): Creates an instance that displays a timer counting within the provided interval.
