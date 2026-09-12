> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/openurlaction/result](https://developer.apple.com/documentation/swiftui/openurlaction/result)

# OpenURLAction.Result

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The result of a custom open URL action.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

If you declare a custom [OpenURLAction](../openurlaction.md) in the [Environment](../environment.md), return one of the result values from its handler.

- Use [handled](result/handled.md) to indicate that the handler opened the URL.
- Use [discarded](result/discarded.md) to indicate that the handler discarded the URL.
- Use [systemAction](result/systemaction.md) without an argument to ask SwiftUI to open the URL with the system handler.
- Use [systemAction(\_:)](result/systemaction%28__%29.md) with a URL argument to ask SwiftUI to open the specified URL with the system handler.

You can use the last option to transform URLs, while still relying on the system to open the URL. For example, you could append a path component to every URL:

```swift
.environment(\.openURL, OpenURLAction { url in
    .systemAction(url.appendingPathComponent("edit"))
})
```

## Topics

### Getting the results

- [discarded](result/discarded.md): The handler discarded the URL.
- [handled](result/handled.md): The handler opened the URL.
- [systemAction](result/systemaction.md): The handler asks the system to open the original URL.
- [systemAction(\_:)](result/systemaction%28__%29.md): The handler asks the system to open the modified URL.

### Type Methods

- [systemAction(\_:prefersInApp:)](result/systemaction%28__prefersinapp_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating the action

- [init(handler:)](init%28handler_%29.md): Creates an action that opens a URL.
