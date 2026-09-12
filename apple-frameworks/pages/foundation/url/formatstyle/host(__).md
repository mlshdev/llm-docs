> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/host(_:)](https://developer.apple.com/documentation/foundation/url/formatstyle/host(_:))

# host(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Modifies a format style to display a URL’s host component in accordance with the provided option.

## Declaration

```swift
func host(_ strategy: URL.FormatStyle.HostDisplayOption = .always) -> URL.FormatStyle
```

## Parameters

- `strategy`: A host display option that indicates when, if ever, to display the host component.

<a id="return-value"></a>

## Return Value

A modified [URL.FormatStyle](../formatstyle.md) that incorporates the specified behavior.

## See Also

### Customizing style behavior

- [scheme(\_:)](scheme%28__%29.md): Modifies a format style to display a URL’s scheme component in accordance with the provided option.
- [user(\_:)](user%28__%29.md): Modifies a format style to display a URL’s user component in accordance with the provided option.
- [password(\_:)](password%28__%29.md): Modifies a format style to display a URL’s password component in accordance with the provided option.
- [URL.FormatStyle.HostDisplayOption](hostdisplayoption.md): A type that indicates whether a formatted URL should include the host component.
- [port(\_:)](port%28__%29.md): Modifies a format style to display a URL’s port component in accordance with the provided option.
- [path(\_:)](path%28__%29.md): Modifies a format style to display a URL’s path component in accordance with the provided option.
- [query(\_:)](query%28__%29.md): Modifies a format style to display a URL’s query component in accordance with the provided option.
- [fragment(\_:)](fragment%28__%29.md): Modifies a format style to display a URL’s fragment component in accordance with the provided option.
- [URL.FormatStyle.ComponentDisplayOption](componentdisplayoption.md): A type that indicates whether a formatted URL should include a component.
