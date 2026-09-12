> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcloudidentifier/notfound](https://developer.apple.com/documentation/photos/phcloudidentifier/notfound)

# notFound (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 12.0)

The global identifier used in an array slot for items that couldn’t be found.

> Check for PHPhotosErrorIdentifierNotFound in PHCloudIdentifierMapping.error

## Declaration

```swift
class var notFound: PHCloudIdentifier { get }
```

## See Also

### Using Cloud Identifiers

- [init(stringValue:)](init%28stringvalue_%29.md): Deprecated. Deserializes a cloud identifier from its string value.
- [stringValue](stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.

# notFoundIdentifier (Objective-C)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** macOS 10.13+ (deprecated in 12.0)

The global identifier used in an array slot for items that couldn’t be found.

> Check for PHPhotosErrorIdentifierNotFound in PHCloudIdentifierMapping.error

## Declaration

```objectivec
@property (class, nonatomic, readonly) PHCloudIdentifier * notFoundIdentifier;
```

## See Also

### Using Cloud Identifiers

- [initWithStringValue:](init%28stringvalue_%29.md): Deprecated. Deserializes a cloud identifier from its string value.
- [stringValue](stringvalue.md): Deprecated. A string version of the cloud identifier to use in serialization.
