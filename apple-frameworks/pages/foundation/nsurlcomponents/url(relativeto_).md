> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/url(relativeto:)](https://developer.apple.com/documentation/foundation/nsurlcomponents/url(relativeto:))

# url(relativeTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL object derived from the components object.

## Declaration

```swift
func url(relativeTo baseURL: URL?) -> URL?
```

## Parameters

- `baseURL`: If non-`nil`, this URL is used as the base URL portion of the resulting URL object.

<a id="Discussion"></a>

## Discussion

If the components object has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the `NSURLComponents`*does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

To configure a components object based on an existing URL, call either the [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md) or [init(url:resolvingAgainstBaseURL:)](init%28url_resolvingagainstbaseurl_%29-3bbte.md) method.

## See Also

### Getting the URL

- [string](string.md): A URL derived from the components object, in string form.
- [url](url.md): A URL object derived from the components object.

# URLRelativeToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a URL object derived from the components object.

## Declaration

```objectivec
- (NSURL *) URLRelativeToURL:(NSURL *) baseURL;
```

## Parameters

- `baseURL`: If non-`nil`, this URL is used as the base URL portion of the resulting URL object.

<a id="Discussion"></a>

## Discussion

If the components object has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the `NSURLComponents`*does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

To configure a components object based on an existing URL, call either the [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md) or [initWithURL:resolvingAgainstBaseURL:](init%28url_resolvingagainstbaseurl_%29-3bbte.md) method.

## See Also

### Getting the URL

- [string](string.md): A URL derived from the components object, in string form.
- [URL](url.md): A URL object derived from the components object.
