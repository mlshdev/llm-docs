> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressrepresentations/contextstyle](https://developer.apple.com/documentation/mapkit/mkaddressrepresentations/contextstyle)

# MKAddressRepresentations.ContextStyle (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Values that describe the degree of disambiguation context to include in an address representation.

## Declaration

```swift
enum ContextStyle
```

<a id="Discussion"></a>

## Discussion

Use the [MKAddressRepresentations.ContextStyle](contextstyle.md) to configure the degree of disambiguation context to include in an address representation from [MKAddressRepresentations](../mkaddressrepresentations.md), such as including the region name with the city.

## Topics

### Creating a context style

- [init(rawValue:)](contextstyle/init%28rawvalue_%29.md): Initializes a context style with the raw value you provide.

### Available context styles

- [MKAddressRepresentations.ContextStyle.automatic](contextstyle/automatic.md): The value that represents the automatic context style.
- [MKAddressRepresentations.ContextStyle.short](contextstyle/short.md): The value that represents the short context style.
- [MKAddressRepresentations.ContextStyle.full](contextstyle/full.md): The value that represents the full context style.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MKAddressRepresentationsContextStyle (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Values that describe the degree of disambiguation context to include in an address representation.

## Declaration

```objectivec
enum MKAddressRepresentationsContextStyle : NSInteger;
```

<a id="Discussion"></a>

## Discussion

Use the [MKAddressRepresentationsContextStyle](contextstyle.md) to configure the degree of disambiguation context to include in an address representation from [MKAddressRepresentations](../mkaddressrepresentations.md), such as including the region name with the city.

## Topics

### Available context styles

- [MKAddressRepresentationsContextStyleAutomatic](contextstyle/automatic.md): The value that represents the automatic context style.
- [MKAddressRepresentationsContextStyleShort](contextstyle/short.md): The value that represents the short context style.
- [MKAddressRepresentationsContextStyleFull](contextstyle/full.md): The value that represents the full context style.
