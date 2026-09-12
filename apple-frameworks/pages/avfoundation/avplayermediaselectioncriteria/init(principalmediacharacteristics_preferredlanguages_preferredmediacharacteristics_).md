> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayermediaselectioncriteria/init(principalmediacharacteristics:preferredlanguages:preferredmediacharacteristics:)](https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/init(principalmediacharacteristics:preferredlanguages:preferredmediacharacteristics:))

# init(principalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.

## Declaration

```swift
init(principalMediaCharacteristics: [AVMediaCharacteristic]?, preferredLanguages: [String]?, preferredMediaCharacteristics: [AVMediaCharacteristic]?)
```

## Parameters

- `principalMediaCharacteristics`: An array of media characteristics that are essential to selecting media with the characteristic. This value may be `nil`.
- `preferredLanguages`: An array of language identifier strings, in order of preference. This value may be `nil`.
- `preferredMediaCharacteristics`: An array of media characteristics, in order of preference. This value may be `nil`.

<a id="Discussion"></a>

## Discussion

Principal media characteristics, when present, override language preferences when making selections within a specific media selection group. However, language preferences may still pertain to selections in other groups. For example, the system may consider language preferences when choosing whether to select nonforced subtitles for translation purposes.

## See Also

### Creating media selection criteria

- [init(preferredLanguages:preferredMediaCharacteristics:)](init%28preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the preferred languages and media characteristics.

# initWithPrincipalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.

## Declaration

```objectivec
- (instancetype) initWithPrincipalMediaCharacteristics:(NSArray<NSString *> *) principalMediaCharacteristics preferredLanguages:(NSArray<NSString *> *) preferredLanguages preferredMediaCharacteristics:(NSArray<NSString *> *) preferredMediaCharacteristics;
```

## Parameters

- `principalMediaCharacteristics`: An array of media characteristics that are essential to selecting media with the characteristic. This value may be `nil`.
- `preferredLanguages`: An array of language identifier strings, in order of preference. This value may be `nil`.
- `preferredMediaCharacteristics`: An array of media characteristics, in order of preference. This value may be `nil`.

<a id="Discussion"></a>

## Discussion

Principal media characteristics, when present, override language preferences when making selections within a specific media selection group. However, language preferences may still pertain to selections in other groups. For example, the system may consider language preferences when choosing whether to select nonforced subtitles for translation purposes.

## See Also

### Creating media selection criteria

- [initWithPreferredLanguages:preferredMediaCharacteristics:](init%28preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the preferred languages and media characteristics.
