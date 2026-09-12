> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/timedatasource](https://developer.apple.com/documentation/swiftui/timedatasource)

# TimeDataSource

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A source of time related data.

## Declaration

```swift
struct TimeDataSource<Value>
```

<a id="overview"></a>

## Overview

Instances of this type provide [Text](text.md) with live and automatically updating values in Widgets, Live Activities, watchOS Complications, and of course regular apps.

## Topics

### Type Properties

- [currentDate](timedatasource/currentdate.md): A time data source that produces `Date.now`.

### Type Methods

- [dateRange(endingAt:)](timedatasource/daterange%28endingat_%29.md): A time data source that produces `min(date, Date.now)..<date`.
- [dateRange(startingAt:)](timedatasource/daterange%28startingat_%29.md): A time data source that produces `date..<max(date, Date.now)`.
- [durationOffset(to:)](timedatasource/durationoffset%28to_%29.md): A time data source that produces the offset between `Date.now` and the given `date` as a `Duration`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Formatting date and time

- [SystemFormatStyle](systemformatstyle.md): A collection of format styles for displaying live-updating time information in text views.
