> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/url](https://developer.apple.com/documentation/foundation/nsurlcomponents/url)

# url (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL object derived from the components object.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the receiver *does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

If the receiver has `nil` values for all component properties, such as when initializing with [init()](init%28%29.md), this property returns an `NSURL` object with an empty string, because a URL always has a path—even if it’s an empty string.

This property can be used only to obtain a URL based on the values of the other properties. To configure a components object based on an existing URL, call either the [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md) or [init(url:resolvingAgainstBaseURL:)](init%28url_resolvingagainstbaseurl_%29-3bbte.md) method.

## See Also

### Getting the URL

- [string](string.md): A URL derived from the components object, in string form.
- [url(relativeTo:)](url%28relativeto_%29.md): Returns a URL object derived from the components object.

# URL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL object derived from the components object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

If the receiver has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the receiver *does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

If the receiver has `nil` values for all component properties, such as when initializing with [init](init%28%29.md), this property returns an `NSURL` object with an empty string, because a URL always has a path—even if it’s an empty string.

This property can be used only to obtain a URL based on the values of the other properties. To configure a components object based on an existing URL, call either the [componentsWithURL:resolvingAgainstBaseURL:](componentswithurl_resolvingagainstbaseurl_.md) or [initWithURL:resolvingAgainstBaseURL:](init%28url_resolvingagainstbaseurl_%29-3bbte.md) method.

## See Also

### Getting the URL

- [string](string.md): A URL derived from the components object, in string form.
- [URLRelativeToURL:](url%28relativeto_%29.md): Returns a URL object derived from the components object.
