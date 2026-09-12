> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aswebauthenticationsession/callback/customscheme(_:)](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/callback/customscheme(_:))

# customScheme(\_:) (Swift)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a callback object that matches against URLs with the given custom scheme.

## Declaration

```swift
class func customScheme(_ customScheme: String) -> Self
```

## Parameters

- `customScheme`: The custom scheme that the app requires in the callback URL.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with a custom URL scheme:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .customScheme("myappscheme")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating callbacks

- [https(host:path:)](https%28host_path_%29.md): Creates a callback object that matches against HTTPS URLs with the given host and path.

# callbackWithCustomScheme: (Objective-C)

**Framework:** Authentication Services  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a callback object that matches against URLs with the given custom scheme.

## Declaration

```objectivec
+ (instancetype) callbackWithCustomScheme:(NSString *) customScheme;
```

## Parameters

- `customScheme`: The custom scheme that the app requires in the callback URL.

<a id="discussion"></a>

## Discussion

The following example creates a session that requires a callback with a custom URL scheme:

```swift
let session = ASWebAuthenticationSession(
    url: URL(string: "https://example.com/oauth/login/authorize")!,
    callback: .customScheme("myappscheme")
) { callbackURL, error in
    // Handle the session result.
}
```

## See Also

### Creating callbacks

- [callbackWithHTTPSHost:path:](https%28host_path_%29.md): Creates a callback object that matches against HTTPS URLs with the given host and path.
