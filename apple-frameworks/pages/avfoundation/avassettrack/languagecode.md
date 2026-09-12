> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/languagecode](https://developer.apple.com/documentation/avfoundation/avassettrack/languagecode)

# languageCode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 16.0) · iPadOS 4.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.7+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 9.0)

The language code of the track.

> Load the value of [languageCode](../avpartialasyncproperty/languagecode.md) asynchronously instead.

## Declaration

```swift
var languageCode: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

# languageCode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The language code of the track.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * languageCode;
```

<a id="Discussion"></a>

## Discussion

The value is an ISO 639-2/T language code, or `nil` if the track doesn’t specify a language code.

## See Also

### Accessing language support

- [extendedLanguageTag](extendedlanguagetag.md): Deprecated. The language tag of the track.
