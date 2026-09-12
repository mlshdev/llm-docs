> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistserialization/propertylist(_:isvalidfor:)](https://developer.apple.com/documentation/foundation/propertylistserialization/propertylist(_:isvalidfor:))

# propertyList(\_:isValidFor:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given property list is valid for a given format.

## Declaration

```swift
class func propertyList(_ plist: Any, isValidFor format: PropertyListSerialization.PropertyListFormat) -> Bool
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [PropertyListSerialization.PropertyListFormat](propertylistformat.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `plist` is a valid property list in format `format`, otherwise [false](https://developer.apple.com/documentation/swift/false).

# propertyList:isValidForFormat: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether a given property list is valid for a given format.

## Declaration

```objectivec
+ (BOOL) propertyList:(id) plist isValidForFormat:(NSPropertyListFormat) format;
```

## Parameters

- `plist`: A property list object.
- `format`: A property list format. For possible values, see [NSPropertyListFormat](propertylistformat.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `plist` is a valid property list in format `format`, otherwise [false](https://developer.apple.com/documentation/swift/false).
