> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcomponents/string](https://developer.apple.com/documentation/foundation/nsurlcomponents/string)

# string (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL derived from the components object, in string form.

## Declaration

```swift
var string: String? { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the receiver  *does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

This property can be used only to obtain a URL string based on the values of the other properties. To configure a components object based on an existing URL string, call either the [componentsWithString:](componentswithstring_.md) or [init(string:)](init%28string_%29.md) method.

## See Also

### Getting the URL

- [url](url.md): A URL object derived from the components object.
- [url(relativeTo:)](url%28relativeto_%29.md): Returns a URL object derived from the components object.

# string (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A URL derived from the components object, in string form.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * string;
```

<a id="Discussion"></a>

## Discussion

If the receiver has an authority component (user, password, host, or port) and a path component, then the path must either begin with `"/"` or be an empty string. Otherwise, this property contains `nil`.

If the receiver  *does not* have an authority component (user, password, host, or port) and has a path component, the path component must not start with `"//"`. If it does, this property contains `nil`.

This property can be used only to obtain a URL string based on the values of the other properties. To configure a components object based on an existing URL string, call either the [componentsWithString:](componentswithstring_.md) or [initWithString:](init%28string_%29.md) method.

## See Also

### Getting the URL

- [URL](url.md): A URL object derived from the components object.
- [URLRelativeToURL:](url%28relativeto_%29.md): Returns a URL object derived from the components object.
