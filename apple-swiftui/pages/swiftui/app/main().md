> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/app/main()](https://developer.apple.com/documentation/swiftui/app/main())

# main()

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes and runs the app.

## Declaration

```swift
@MainActor @preconcurrency static func main()
```

<a id="discussion"></a>

## Discussion

If you precede your [App](../app.md) conformer’s declaration with the [@main](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html#ID626) attribute, the system calls the conformer’s `main()` method to launch the app. SwiftUI provides a default implementation of the method that manages the launch process in a platform-appropriate way.

## See Also

### Running an app

- [init()](init%28%29.md): Creates an instance of the app using the body that you define for its content.
