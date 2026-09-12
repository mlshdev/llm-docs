> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(hostingdelegateclass:)](https://developer.apple.com/documentation/uikit/uiscenesessionactivationrequest-swift.struct/init(hostingdelegateclass:))

# init(hostingDelegateClass:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 27.0+ · visionOS 26.0+

Creates a `UISceneSessionActivationRequest` customized to open a SwiftUI scene.

## Declaration

```swift
init?<D>(hostingDelegateClass: D.Type) where D : UIHostingSceneDelegate
```

## Parameters

- `hostingDelegateClass`: A Class type that conforms to `UIHostingSceneDelegate`.

<a id="discussion"></a>

## Discussion

The first scene declared in the `rootScene` property of your hosting delegate class will be activated by this request.

```
class HostingSceneDelegate: UIHostingSceneDelegate {
    static var rootScene: some Scene {
        WindowGroup() {
            ContentView()
        }
    }
}

let request = UISceneSessionActivationRequest(
    hostingDelegateClass: HostingSceneDelegate.self
)
UIApplication.shared.activateSceneSession(for: request)
```

When a UIScene is activated using this request object, its configuration is managed by SwiftUI. You will not see a call to your app delegate’s `application(_:configurationForConnecting:options:)` method.

An instance of the provided hosting delegate class will be created by SwiftUI and receive lifecycle callbacks for the associated scene.
