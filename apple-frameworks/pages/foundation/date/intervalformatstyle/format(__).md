> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/format(_:)](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a locale-aware string representation from a relative date value.

## Declaration

```swift
func format(_ v: Range<Date>) -> String
```

## Parameters

- `v`: The date range to format.

<a id="return-value"></a>

## Return Value

A string representation of the date range.

<a id="Discussion"></a>

## Discussion

The [format(\_:)](../relativeformatstyle/format%28__%29.md) instance method generates a string from the provided relative date. After you create a style, you can use it to format dates multiple times.

The following example applies a format style multiple times to produce string representations of relative dates:

```swift
if let pastWeek = Calendar.current.date(byAdding: .day, value: -7, to: Date()) {
    if let pastDay = Calendar.current.date(byAdding: .day, value: -1, to: Date()) {

        let formatStyle = Date.RelativeFormatStyle(
            presentation: .named,
            unitsStyle: .spellOut,
            locale: Locale(identifier: "en_GB"),
            calendar: Calendar.current,
            capitalizationContext: .beginningOfSentence)
        
        formatStyle.format(pastDay) // "Yesterday"
        formatStyle.format(pastWeek) // "Last week"
    }
}

```
