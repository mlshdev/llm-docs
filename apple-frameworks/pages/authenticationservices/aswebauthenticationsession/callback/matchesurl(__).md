> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/callback/matchesurl(_:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/callback/matchesurl(_:))

# matchesURL(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Checks whether a given URL matches the callback object.

## Declaration

```swift
func matchesURL(_ url: URL) -> Bool
```

<a id="discussion"></a>

## Discussion

Use this method in a browser app that adopts the `ASWebAuthenticationWebBrowser` API. Other apps can use it for debugging purposes.

The following example shows how a browser app’s internal method for determining redirect policies might use `matchesURL(_:)`:

```swift
// The pre-existing delegate method, which the system calls when the web browser receives a request from an app.
func begin(_ request: ASWebAuthenticationSessionRequest!) {
    self.request = request

    // Load the URL request.
}

// The web browser's internal method for determining redirect policies.
func myShouldNavigate(to url: URL) -> Bool {
    if request.callback.matches(url) {
        // Existing API to complete a request.
        request.complete(withCallbackURL: url)
    }
    ...
}
```

# matchesURL: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Checks whether a given URL matches the callback object.

## Declaration

```objectivec
- (BOOL) matchesURL:(NSURL *) url;
```

<a id="discussion"></a>

## Discussion

Use this method in a browser app that adopts the `ASWebAuthenticationWebBrowser` API. Other apps can use it for debugging purposes.

The following example shows how a browser app’s internal method for determining redirect policies might use `matchesURL(_:)`:

```swift
// The pre-existing delegate method, which the system calls when the web browser receives a request from an app.
func begin(_ request: ASWebAuthenticationSessionRequest!) {
    self.request = request

    // Load the URL request.
}

// The web browser's internal method for determining redirect policies.
func myShouldNavigate(to url: URL) -> Bool {
    if request.callback.matches(url) {
        // Existing API to complete a request.
        request.complete(withCallbackURL: url)
    }
    ...
}
```
