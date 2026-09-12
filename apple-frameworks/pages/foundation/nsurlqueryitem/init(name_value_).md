> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlqueryitem/init(name:value:)](https://developer.apple.com/documentation/foundation/nsurlqueryitem/init(name:value:))

# init(name:value:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated query item with the specified name and value.

## Declaration

```swift
init(name: String, value: String?)
```

## Parameters

- `name`: The name of the query item. For example, in the URL `http://www.apple.com/search/?q=iPad`, the `name` parameter is `q`.
- `value`: The value for the query item. For example, in the URL `http://www.apple.com/search/?q=iPad`, the `value` parameter is `iPad`.

<a id="return-value"></a>

## Return Value

An initialized query item object.

<a id="Discussion"></a>

## Discussion

To use the newly initialized query item in composing a URL, add it to the [queryItems](../nsurlcomponents/queryitems.md) array of an [NSURLComponents](../nsurlcomponents.md) instance. Because assigning an array of query items to an [NSURLComponents](../nsurlcomponents.md) instance automatically encodes the name and value properties, you should not percent-encode these strings.

# initWithName:value: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated query item with the specified name and value.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name value:(NSString *) value;
```

## Parameters

- `name`: The name of the query item. For example, in the URL `http://www.apple.com/search/?q=iPad`, the `name` parameter is `q`.
- `value`: The value for the query item. For example, in the URL `http://www.apple.com/search/?q=iPad`, the `value` parameter is `iPad`.

<a id="return-value"></a>

## Return Value

An initialized query item object.

<a id="Discussion"></a>

## Discussion

To use the newly initialized query item in composing a URL, add it to the [queryItems](../nsurlcomponents/queryitems.md) array of an [NSURLComponents](../nsurlcomponents.md) instance. Because assigning an array of query items to an [NSURLComponents](../nsurlcomponents.md) instance automatically encodes the name and value properties, you should not percent-encode these strings.

## See Also

### Creating a Query Item

- [queryItemWithName:value:](queryitemwithname_value_.md): Creates a new query item with the specified name and value.
