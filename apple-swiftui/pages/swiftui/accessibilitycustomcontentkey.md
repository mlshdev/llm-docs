> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/accessibilitycustomcontentkey](https://developer.apple.com/documentation/swiftui/accessibilitycustomcontentkey)

# AccessibilityCustomContentKey

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Key used to specify the identifier and label associated with an entry of additional accessibility information.

## Declaration

```swift
struct AccessibilityCustomContentKey
```

<a id="overview"></a>

## Overview

Use `AccessibilityCustomContentKey` and the associated modifiers taking this value as a parameter in order to simplify clearing or replacing entries of additional information that are manipulated from multiple places in your code.

## Topics

### Creating a key

- [init(\_:)](accessibilitycustomcontentkey/init%28__%29.md): Create an `AccessibilityCustomContentKey` with the specified label.
- [init(\_:id:)](accessibilitycustomcontentkey/init%28__id_%29.md): Create an `AccessibilityCustomContentKey` with the specified label and identifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Adding custom descriptions

- [accessibilityCustomContent(\_:\_:importance:)](view/accessibilitycustomcontent%28____importance_%29.md): Add additional accessibility information to the view.
