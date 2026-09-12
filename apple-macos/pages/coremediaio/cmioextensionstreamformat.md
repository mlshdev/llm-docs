> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamformat](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat)

# CMIOExtensionStreamFormat (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the format of a media stream.

## Declaration

```swift
class CMIOExtensionStreamFormat
```

## Topics

### Creating a Stream Format

- [init(formatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:)](cmioextensionstreamformat/init%28formatdescription_maxframeduration_minframeduration_validframedurations_%29.md): Creates a stream format with a format description and frame durations.

### Configuring Frame Durations

- [minFrameDuration](cmioextensionstreamformat/minframeduration.md): The minimum frame duration a stream supports.
- [maxFrameDuration](cmioextensionstreamformat/maxframeduration.md): The maximum duration a stream supports.
- [validFrameDurations](cmioextensionstreamformat/validframedurations-707st.md): An array of frame durations the stream supports.

### Accessing the Format Description

- [formatDescription](cmioextensionstreamformat/formatdescription.md): A description of the format of the stream’s media samples.

### Initializers

- [init(coder:)](cmioextensionstreamformat/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Accessing the Source Format

- [formats](cmioextensionstreamsource/formats.md): An array of formats that a stream supports.

# CMIOExtensionStreamFormat (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that describes the format of a media stream.

## Declaration

```objectivec
@interface CMIOExtensionStreamFormat : NSObject
```

## Topics

### Creating a Stream Format

- [streamFormatWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:](cmioextensionstreamformat/streamformatwithformatdescription_maxframeduration_minframeduration_validframedurations_.md): Returns a new stream format with a format description and frame durations.
- [initWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:](cmioextensionstreamformat/initwithformatdescription_maxframeduration_minframeduration_validframedurations_.md): Creates a stream format with a format description and frame durations.

### Configuring Frame Durations

- [minFrameDuration](cmioextensionstreamformat/minframeduration.md): The minimum frame duration a stream supports.
- [maxFrameDuration](cmioextensionstreamformat/maxframeduration.md): The maximum duration a stream supports.
- [validFrameDurations](cmioextensionstreamformat/validframedurations-4rbay.md): An array of frame durations the stream supports.

### Accessing the Format Description

- [formatDescription](cmioextensionstreamformat/formatdescription.md): A description of the format of the stream’s media samples.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Accessing the Source Format

- [formats](cmioextensionstreamsource/formats.md): An array of formats that a stream supports.
