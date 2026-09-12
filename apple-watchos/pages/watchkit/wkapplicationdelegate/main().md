> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/main()](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/main())

# main()

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 7.0+

Provides the top-level entry point for an app.

## Declaration

```swift
@MainActor @preconcurrency static func main()
```

<a id="Discussion"></a>

## Discussion

[WKApplicationDelegate](../wkapplicationdelegate.md) provides an implementation of the [main()](main%28%29.md) method that serves as the main entry point for your watchOS app. The system calls the [main()](main%28%29.md) method to launch your app; you never call it yourself. Your app can have exactly one entry point, which you mark with the `@main` attribute.

## See Also

### Monitoring state changes

- [Working with the watchOS app life cycle](../working-with-the-watchos-app-life-cycle.md): Learn how the watchOS app life cycle operates and responds to life cycle notification methods.
- [applicationDidFinishLaunching()](applicationdidfinishlaunching%28%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [applicationDidBecomeActive()](applicationdidbecomeactive%28%29.md): Tells the delegate that the watchOS app is visible and processing events.
- [applicationWillResignActive()](applicationwillresignactive%28%29.md): Tells the delegate that the system is about to deactivate the watchOS app.
- [applicationWillEnterForeground()](applicationwillenterforeground%28%29.md): Tells the delegate that the app is about to transition from the background to the foreground.
- [applicationDidEnterBackground()](applicationdidenterbackground%28%29.md): Tells the delegate that the app has transitioned from the foreground to the background.
- [deviceOrientationDidChange()](deviceorientationdidchange%28%29.md): Tells the delegate that the device’s orientation has changed.
