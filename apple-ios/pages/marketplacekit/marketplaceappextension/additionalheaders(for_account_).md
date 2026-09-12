> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplaceappextension/additionalheaders(for:account:)](https://developer.apple.com/documentation/marketplacekit/marketplaceappextension/additionalheaders(for:account:))

# additionalHeaders(for:account:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Adds information to the request header for communications from the operating system to your marketplace endpoints.

## Declaration

```swift
func additionalHeaders(for request: URLRequest, account: String) async -> [String : String]
```

## Parameters

- `request`: A request that contains a header to which you add information.
- `account`: Authentication information about the signed-in person.

## Mentioned In

- [Reauthenticating a person to manage apps](../reauthenticating-a-person-to-manage-apps.md)
- [Installing apps from an alternative marketplace](../installing-apps-from-an-alternative-marketplace.md)

<a id="discussion"></a>

## Discussion

The operating system invokes your implementation of this callback before sending a request to your marketplace endpoints. In this method, use [addValue(\_:forHTTPHeaderField:)](https://developer.apple.com/documentation/foundation/urlrequest/addvalue%28_:forhttpheaderfield:%29) to add to the header. The additions detail information that your marketplace server needs to authorize the request.

For more information, see [Installing apps from an alternative marketplace](../installing-apps-from-an-alternative-marketplace.md).
