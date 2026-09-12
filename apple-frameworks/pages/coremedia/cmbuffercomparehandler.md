> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffercomparehandler](https://developer.apple.com/documentation/coremedia/cmbuffercomparehandler)

# CMBufferCompareHandler (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
typealias CMBufferCompareHandler = (CMBuffer, CMBuffer) -> CFComparisonResult
```

## See Also

### Type Aliases

- [CMBufferGetBooleanHandler](cmbuffergetbooleanhandler.md)
- [CMBufferGetSizeHandler](cmbuffergetsizehandler.md)
- [CMBufferGetTimeHandler](cmbuffergettimehandler.md)
- [CMTaggedBufferGroupFormatDescription](cmtaggedbuffergroupformatdescription.md): A type for tagged buffer format descriptions.
- [CMTaggedBufferGroupFormatType](cmtaggedbuffergroupformattype.md): A type for tagged buffer format information.

# CMBufferCompareHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
typedef enum CFComparisonResult (^)(const void *, const void *) CMBufferCompareHandler;
```

## See Also

### Type Aliases

- [CMBufferGetBooleanHandler](cmbuffergetbooleanhandler.md)
- [CMBufferGetSizeHandler](cmbuffergetsizehandler.md)
- [CMBufferGetTimeHandler](cmbuffergettimehandler.md)
- [CMTaggedBufferGroupFormatDescriptionRef](cmtaggedbuffergroupformatdescription.md): A type for tagged buffer format descriptions.
- [CMTaggedBufferGroupFormatType](cmtaggedbuffergroupformattype.md): A type for tagged buffer format information.
