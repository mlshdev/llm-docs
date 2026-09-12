> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetilerequest](https://developer.apple.com/documentation/professional_video_applications/fximagetilerequest)

# FxImageTileRequest (Swift)

**Framework:** Professional Video Applications  
**Kind:** Class  
**Availability:** FxPlug 4.0+

An image tile request object that is passed between an out-of-process FxPlug plug-in and a host application.

## Declaration

```swift
class FxImageTileRequest
```

## Topics

### Instance Properties

- [includeLeadingFilters](fximagetilerequest/includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](fximagetilerequest/parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](fximagetilerequest/requesttime.md): The time to pull the images.
- [source](fximagetilerequest/source.md): The type of image input requested.

### Instance Methods

- [init(source:time:includeFilters:parameterID:)](fximagetilerequest/init%28source_time_includefilters_parameterid_%29.md): Initializes an `FxImageTileRequestSource`.

### Initializers

- [init(coder:)](fximagetilerequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Exchanging Image Tiles Between Host and Plug-in

- [FxImageTile](fximagetile.md): An image tile object that is passed between an out-of-process FxPlug plug-in and a host application.

# FxImageTileRequest (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Class

An image tile request object that is passed between an out-of-process FxPlug plug-in and a host application.

## Declaration

```objectivec
@interface FxImageTileRequest : NSObject
```

## Topics

### Instance Properties

- [includeLeadingFilters](fximagetilerequest/includeleadingfilters.md): Add filters from other FxPlug-ins.
- [parameterID](fximagetilerequest/parameterid.md): The parameter ID if the requested source is `kFxImageTileRequestSourceParameter.`
- [requestTime](fximagetilerequest/requesttime.md): The time to pull the images.
- [source](fximagetilerequest/source.md): The type of image input requested.

### Instance Methods

- [initWithSource:time:includeFilters:parameterID:](fximagetilerequest/init%28source_time_includefilters_parameterid_%29.md): Initializes an `FxImageTileRequestSource`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Exchanging Image Tiles Between Host and Plug-in

- [FxImageTile](fximagetile.md): An image tile object that is passed between an out-of-process FxPlug plug-in and a host application.
