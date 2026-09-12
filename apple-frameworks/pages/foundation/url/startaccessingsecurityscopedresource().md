> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/startaccessingsecurityscopedresource()](https://developer.apple.com/documentation/foundation/url/startaccessingsecurityscopedresource())

# startAccessingSecurityScopedResource()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Given a url created by resolving a bookmark data created with security scope, make the resource referenced by the url accessible to the process.

## Declaration

```swift
func startAccessingSecurityScopedResource() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the request to access the resource succeeded; otherwise, `false`.

## Mentioned In

- [Implementing Handoff in Your App](../implementing-handoff-in-your-app.md)

<a id="Discussion"></a>

## Discussion

When you obtain a security-scoped URL, such as by resolving a security-scoped bookmark, you can’t immediately use the resource it points to. To make the resource available to your app, by way of adding its location to your app’s sandbox, call this method on the security-scoped URL. You can also use Core Foundation equivalent, the [CFURLStartAccessingSecurityScopedResource(\_:)](../../corefoundation/cfurlstartaccessingsecurityscopedresource%28__%29.md) function.

If this method returns [true](https://developer.apple.com/documentation/swift/true), then you must relinquish access as soon as you finish using the resource. Call the [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md) method to relinquish access. You must balance each call to [startAccessingSecurityScopedResource()](startaccessingsecurityscopedresource%28%29.md) for a given security-scoped URL with a call to [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md). When you make the last balanced call to [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md), you immediately lose access to the resource in question.

> **Warning**

>  If you fail to relinquish your access to file-system resources when you no longer need them, your app leaks kernel resources. If sufficient kernel resources leak, your app loses its ability to add file-system locations to its sandbox, such as with Powerbox or security-scoped bookmarks, until relaunched.

> **Version note**

>  Security-scoped bookmarks aren’t available in versions of macOS prior to OS X 10.7.3.

## See Also

### Working with security scoped resources

- [stopAccessingSecurityScopedResource()](stopaccessingsecurityscopedresource%28%29.md): Revokes the access granted to the url by a prior successful call to the complementary start function.
