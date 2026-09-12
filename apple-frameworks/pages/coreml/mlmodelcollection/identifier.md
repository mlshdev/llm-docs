> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelcollection/identifier](https://developer.apple.com/documentation/coreml/mlmodelcollection/identifier)

# identifier (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · visionOS 1.0+ (deprecated in 1.1)

The name of the model collection, unique to the development team.

> Use [Background Assets](../../backgroundassets.md) or [URLSession](../../foundation/urlsession.md) instead.

## Declaration

```swift
var identifier: String { get }
```

## See Also

### Identifying a model collection

- [deploymentID](deploymentid.md): Deprecated. The unique identifier of the model collection’s deployment.

# identifier (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+ (deprecated in 1.1)

The name of the model collection, unique to the development team.

> Use [Background Assets](../../backgroundassets.md) or [NSURLSession](../../foundation/urlsession.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

## See Also

### Identifying a model collection

- [deploymentID](deploymentid.md): Deprecated. The unique identifier of the model collection’s deployment.
