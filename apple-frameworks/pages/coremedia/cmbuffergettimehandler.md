> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmbuffergettimehandler](https://developer.apple.com/documentation/coremedia/cmbuffergettimehandler)

# CMBufferGetTimeHandler (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
typealias CMBufferGetTimeHandler = (CMBuffer) -> CMTime
```

## See Also

### Type Aliases

- [CMBufferCompareHandler](cmbuffercomparehandler.md)
- [CMBufferGetBooleanHandler](cmbuffergetbooleanhandler.md)
- [CMBufferGetSizeHandler](cmbuffergetsizehandler.md)
- [CMTaggedBufferGroupFormatDescription](cmtaggedbuffergroupformatdescription.md): A type for tagged buffer format descriptions.
- [CMTaggedBufferGroupFormatType](cmtaggedbuffergroupformattype.md): A type for tagged buffer format information.

# CMBufferGetTimeHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
typedef CMTime (^)(const void *) CMBufferGetTimeHandler;
```

## See Also

### Type Aliases

- [CMBufferCompareHandler](cmbuffercomparehandler.md)
- [CMBufferGetBooleanHandler](cmbuffergetbooleanhandler.md)
- [CMBufferGetSizeHandler](cmbuffergetsizehandler.md)
- [CMTaggedBufferGroupFormatDescriptionRef](cmtaggedbuffergroupformatdescription.md): A type for tagged buffer format descriptions.
- [CMTaggedBufferGroupFormatType](cmtaggedbuffergroupformattype.md): A type for tagged buffer format information.
