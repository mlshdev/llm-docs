> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/callback/https(host:path:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/callback/https(host:path:))

# https(host:path:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a callback object that matches against HTTPS URLs with the given host and path.

## Declaration

```swift
class func https(host: String, path: String) -> Self
```

## Parameters

- `host`: The host that the app requires in the callback URL. The host must be a member of a domain associated with the app, as described in [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains).
- `path`: The path that the app requires in the callback URL.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with an `https://` URL:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .https(host: "auth.example.com", path: "/auth/callback/example")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating callbacks

- [customScheme(\_:)](customscheme%28__%29.md): Creates a callback object that matches against URLs with the given custom scheme.

# callbackWithHTTPSHost:path: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a callback object that matches against HTTPS URLs with the given host and path.

## Declaration

```objectivec
+ (instancetype) callbackWithHTTPSHost:(NSString *) host path:(NSString *) path;
```

## Parameters

- `host`: The host that the app requires in the callback URL. The host must be a member of a domain associated with the app, as described in [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains).
- `path`: The path that the app requires in the callback URL.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with an `https://` URL:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .https(host: "auth.example.com", path: "/auth/callback/example")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating callbacks

- [callbackWithCustomScheme:](customscheme%28__%29.md): Creates a callback object that matches against URLs with the given custom scheme.
