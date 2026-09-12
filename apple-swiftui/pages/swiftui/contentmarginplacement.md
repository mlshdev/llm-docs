> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contentmarginplacement](https://developer.apple.com/documentation/swiftui/contentmarginplacement)

# ContentMarginPlacement

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The placement of margins.

## Declaration

```swift
struct ContentMarginPlacement
```

<a id="overview"></a>

## Overview

Different views can support customizating margins that appear in different parts of that view. Use values of this type to customize those margins of a particular placement.

For example, use a [scrollIndicators](contentmarginplacement/scrollindicators.md) placement to customize the margins of scrollable view’s scroll indicators separately from the margins of a scrollable view’s content.

Use this type with the [contentMargins(\_:for:)](view/contentmargins%28__for_%29.md) modifier.

## Topics

### Getting the placement

- [automatic](contentmarginplacement/automatic.md): The automatic placement.
- [scrollContent](contentmarginplacement/scrollcontent.md): The scroll content placement.
- [scrollIndicators](contentmarginplacement/scrollindicators.md): The scroll indicators placement.

## See Also

### Setting margins

- [contentMargins(\_:for:)](view/contentmargins%28__for_%29.md): Configures the content margin for a provided placement.
- [contentMargins(\_:\_:for:)](view/contentmargins%28____for_%29.md): Configures the content margin for a provided placement.
