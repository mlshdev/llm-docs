> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/linkattribute/value(for:)

# value(for:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the URL value of the specified object.

## Declaration

```swift
static func value(for object: NSObject) throws -> URL
```

## Parameters

- `object`: An [NSObject](../../../../objectivec/nsobject-swift.class.md) to retrieve a URL value from.

<a id="return-value"></a>

## Return Value

A URL value.

## See Also

### Accessing the Attribute Name and Value

- [name](name.md): The name of the link attribute.
- [AttributeScopes.FoundationAttributes.LinkAttribute.Value](value.md): The type of the link attribute’s value.
- [objectiveCValue(for:)](objectivecvalue%28for_%29.md): Returns an object for a specified URL value.
- [AttributeScopes.FoundationAttributes.LinkAttribute.ObjectiveCValue](objectivecvalue.md): The type of the link attribute’s value when calling it from Objective-C.
