> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/foundationattributes/linkattribute/objectivecvalue(for:)](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/linkattribute/objectivecvalue(for:))

# objectiveCValue(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns an object for a specified URL value.

## Declaration

```swift
static func objectiveCValue(for value: URL) throws -> NSObject
```

## Parameters

- `value`: A URL to produce an [NSObject](../../../../objectivec/nsobject-swift.class.md) from.

<a id="return-value"></a>

## Return Value

The object for the specified URL.

## See Also

### Accessing the Attribute Name and Value

- [name](name.md): The name of the link attribute.
- [value(for:)](value%28for_%29.md): Returns the URL value of the specified object.
- [AttributeScopes.FoundationAttributes.LinkAttribute.Value](value.md): The type of the link attribute’s value.
- [AttributeScopes.FoundationAttributes.LinkAttribute.ObjectiveCValue](objectivecvalue.md): The type of the link attribute’s value when calling it from Objective-C.
