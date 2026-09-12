> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/main()](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/main())

# main()

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 2.0+ · tvOS · visionOS

Provides the top-level entry point for the app.

## Declaration

```swift
@MainActor @preconcurrency static func main()
```

<a id="Discussion"></a>

## Discussion

[UIApplicationDelegate](../uiapplicationdelegate.md) provides an implementation of the [main()](main%28%29.md) method so that it can serve as the main entry point for a UIKit app. The system calls the [main()](main%28%29.md) method to launch your app; you never call it yourself. You can have exactly one entry point in your app, which you mark with the `@main` attribute.
