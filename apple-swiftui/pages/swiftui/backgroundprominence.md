> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/backgroundprominence](https://developer.apple.com/documentation/swiftui/backgroundprominence)

# BackgroundProminence

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The prominence of backgrounds underneath other views.

## Declaration

```swift
struct BackgroundProminence
```

<a id="overview"></a>

## Overview

Background prominence should influence foreground styling to maintain sufficient contrast against the background. For example, selected rows in a `List` and `Table` can have increased prominence backgrounds with accent color fills when focused; the foreground content above the background should be adjusted to reflect that level of prominence.

This can be read and written for views with the `EnvironmentValues.backgroundProminence` property.

## Topics

### Getting background prominence

- [standard](backgroundprominence/standard.md): The standard prominence of a background
- [increased](backgroundprominence/increased.md): A more prominent background that likely requires some changes to the views above it.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring backgrounds

- [listRowBackground(\_:)](view/listrowbackground%28__%29.md): Places a custom background view behind a list row item.
- [alternatingRowBackgrounds(\_:)](view/alternatingrowbackgrounds%28__%29.md): Overrides whether lists and tables in this view have alternating row backgrounds.
- [AlternatingRowBackgroundBehavior](alternatingrowbackgroundbehavior.md): The styling of views with respect to alternating row backgrounds.
- [backgroundProminence](environmentvalues/backgroundprominence.md): The prominence of the background underneath views associated with this environment.
