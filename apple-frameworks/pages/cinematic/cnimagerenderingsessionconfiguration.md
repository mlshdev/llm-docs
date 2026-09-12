> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnimagerenderingsessionconfiguration](https://developer.apple.com/documentation/cinematic/cnimagerenderingsessionconfiguration)

# CNImageRenderingSessionConfiguration (Swift)

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Configuration for a CNImageRenderingSession, specifying the rendering quality and algorithm version.

## Declaration

```swift
class CNImageRenderingSessionConfiguration
```

## Topics

### Initializers

- [init(quality:)](cnimagerenderingsessionconfiguration/init%28quality_%29.md): Initialize with the latest rendering version
- [init(quality:renderingVersion:)](cnimagerenderingsessionconfiguration/init%28quality_renderingversion_%29.md): Initialize with a specific rendering version.

### Instance Properties

- [quality](cnimagerenderingsessionconfiguration/quality.md)
- [renderingVersion](cnimagerenderingsessionconfiguration/renderingversion.md): Rendering version used to render

### Type Properties

- [latestRenderingVersion](cnimagerenderingsessionconfiguration/latestrenderingversion.md): The version of the newest rendering algorithm

### Type Methods

- [isRenderingVersionSupported(\_:)](cnimagerenderingsessionconfiguration/isrenderingversionsupported%28__%29.md): Checks if a given rendering version is supported on the current build

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# CNImageRenderingSessionConfiguration (Objective-C)

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Configuration for a CNImageRenderingSession, specifying the rendering quality and algorithm version.

## Declaration

```objectivec
@interface CNImageRenderingSessionConfiguration : NSObject
```

## Topics

### Instance Properties

- [quality](cnimagerenderingsessionconfiguration/quality.md)
- [renderingVersion](cnimagerenderingsessionconfiguration/renderingversion.md): Rendering version used to render

### Instance Methods

- [initWithQuality:](cnimagerenderingsessionconfiguration/init%28quality_%29.md): Initialize with the latest rendering version
- [initWithQuality:renderingVersion:](cnimagerenderingsessionconfiguration/init%28quality_renderingversion_%29.md): Initialize with a specific rendering version.

### Type Properties

- [latestRenderingVersion](cnimagerenderingsessionconfiguration/latestrenderingversion.md): The version of the newest rendering algorithm

### Type Methods

- [isRenderingVersionSupported:](cnimagerenderingsessionconfiguration/isrenderingversionsupported%28__%29.md): Checks if a given rendering version is supported on the current build

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
