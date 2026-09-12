> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlqueryitem/value](https://developer.apple.com/documentation/foundation/nsurlqueryitem/value)

# value (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value for the query item.

## Declaration

```swift
var value: String? { get }
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.apple.com/search/?q=iPad`, the `value` parameter is `iPad`.

This string is not percent-encoded.

## See Also

### Related Documentation

- [queryItems](../nsurlcomponents/queryitems.md): The query URL component as an array of name/value pairs.

### Reading a Query Item’s Name and Value

- [name](name.md): The name of the query item.

# value (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value for the query item.

## Declaration

```objectivec
@property (readonly, nullable) NSString * value;
```

<a id="Discussion"></a>

## Discussion

For example, in the URL `http://www.apple.com/search/?q=iPad`, the `value` parameter is `iPad`.

This string is not percent-encoded.

## See Also

### Related Documentation

- [queryItems](../nsurlcomponents/queryitems.md): The query URL component as an array of name/value pairs.

### Reading a Query Item’s Name and Value

- [name](name.md): The name of the query item.
