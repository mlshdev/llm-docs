> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplaceappextension/requestfailed(response:)](https://developer.apple.com/documentation/marketplacekit/marketplaceappextension/requestfailed(response:))

# requestFailed(response:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Handles when the operating system receives an unexpected response from your web server.

## Declaration

```swift
func requestFailed(response: HTTPURLResponse) async -> Bool
```

## Parameters

- `response`: An object that contains details of the response, such as the status code.

## Mentioned In

- [Reauthenticating a person to manage apps](../reauthenticating-a-person-to-manage-apps.md)
- [Installing apps from an alternative marketplace](../installing-apps-from-an-alternative-marketplace.md)

<a id="discussion"></a>

## Discussion

iOS invokes your implementation of this callback when it receives anything but an OK status from your marketplace endpoints. Your implementation performs the necessary action according to the given status code. Your server might be down or it might return a code that indicates that the person needs to reauthenticate, if for example, their access token expires.

For more information, see [Installing apps from an alternative marketplace](../installing-apps-from-an-alternative-marketplace.md).
