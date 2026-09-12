> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcloudidentifier/init(stringvalue:)](https://developer.apple.com/documentation/photos/phcloudidentifier/init(stringvalue:))

# init(stringValue:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Deserializes a cloud identifier from its string value.

> Use initWithArchivalStringValue: instead

## Declaration

```swift
init(stringValue: String)
```

## See Also

### Using Cloud Identifiers

- [stringValue](stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.
- [notFound](notfound.md): Deprecated. The global identifier used in an array slot for items that couldn’t be found.

# initWithStringValue: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 27.0) · iPadOS 15.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 15.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Deserializes a cloud identifier from its string value.

> Use initWithArchivalStringValue: instead

## Declaration

```objectivec
- (instancetype) initWithStringValue:(NSString *) stringValue;
```

## See Also

### Using Cloud Identifiers

- [stringValue](stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.
- [notFoundIdentifier](notfound.md): Deprecated. The global identifier used in an array slot for items that couldn’t be found.
