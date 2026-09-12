> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxtranslationengine](https://developer.apple.com/documentation/callkit/cxtranslationengine)

# CXTranslationEngine (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+

Values that describe the translation engine that provided a translation.

## Declaration

```swift
enum CXTranslationEngine
```

## Topics

### Types

- [CXTranslationEngine.default](cxtranslationengine/default.md): The translation was provided by the system’s default translation engine.

### Enumeration Cases

- [CXTranslationEngine.custom](cxtranslationengine/custom.md)

### Initializers

- [init(rawValue:)](cxtranslationengine/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CXTranslationEngine (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Values that describe the translation engine that provided a translation.

## Declaration

```objectivec
enum CXTranslationEngine : NSInteger;
```

## Topics

### Types

- [CXTranslationEngineDefault](cxtranslationengine/default.md): The translation was provided by the system’s default translation engine.

### Enumeration Cases

- [CXTranslationEngineCustom](cxtranslationengine/custom.md)
