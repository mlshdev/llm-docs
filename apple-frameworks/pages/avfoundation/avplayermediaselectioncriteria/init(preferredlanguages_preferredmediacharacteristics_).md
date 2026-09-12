> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayermediaselectioncriteria/init(preferredlanguages:preferredmediacharacteristics:)](https://developer.apple.com/documentation/avfoundation/avplayermediaselectioncriteria/init(preferredlanguages:preferredmediacharacteristics:))

# init(preferredLanguages:preferredMediaCharacteristics:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates media selection criteria with the preferred languages and media characteristics.

## Declaration

```swift
init(preferredLanguages: [String]?, preferredMediaCharacteristics: [AVMediaCharacteristic]?)
```

## Parameters

- `preferredLanguages`: An array of language identifier strings, in order of preference. This value may be `nil`.
- `preferredMediaCharacteristics`: An array of media characteristics, in order of preference. This value may be `nil`.

## See Also

### Creating media selection criteria

- [init(principalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics:)](init%28principalmediacharacteristics_preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.

# initWithPreferredLanguages:preferredMediaCharacteristics: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates media selection criteria with the preferred languages and media characteristics.

## Declaration

```objectivec
- (instancetype) initWithPreferredLanguages:(NSArray<NSString *> *) preferredLanguages preferredMediaCharacteristics:(NSArray<NSString *> *) preferredMediaCharacteristics;
```

## Parameters

- `preferredLanguages`: An array of language identifier strings, in order of preference. This value may be `nil`.
- `preferredMediaCharacteristics`: An array of media characteristics, in order of preference. This value may be `nil`.

## See Also

### Creating media selection criteria

- [initWithPrincipalMediaCharacteristics:preferredLanguages:preferredMediaCharacteristics:](init%28principalmediacharacteristics_preferredlanguages_preferredmediacharacteristics_%29.md): Creates media selection criteria with the principal media characteristics, and preferred languages and media characteristics.
