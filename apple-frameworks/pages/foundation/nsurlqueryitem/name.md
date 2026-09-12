> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlqueryitem/name](https://developer.apple.com/documentation/foundation/nsurlqueryitem/name)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the query item.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.apple.com/search/?q=iPad`, the `name` parameter is `q`.

This string is not percent-encoded.

## See Also

### Related Documentation

- [queryItems](../nsurlcomponents/queryitems.md): The query URL component as an array of name/value pairs.

### Reading a Query Item’s Name and Value

- [value](value.md): The value for the query item.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the query item.

## Declaration

```objectivec
@property (readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.apple.com/search/?q=iPad`, the `name` parameter is `q`.

This string is not percent-encoded.

## See Also

### Related Documentation

- [queryItems](../nsurlcomponents/queryitems.md): The query URL component as an array of name/value pairs.

### Reading a Query Item’s Name and Value

- [value](value.md): The value for the query item.
