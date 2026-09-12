> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/init(contentsof:)](https://developer.apple.com/documentation/corehaptics/chhapticpattern/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a haptic pattern with the contents of an AHAP file.

## Declaration

```swift
init(contentsOf ahapURL: URL) throws
```

## Parameters

- `ahapURL`: A URL to an AHAP file that describes a pattern.

## See Also

### Creating a Haptic Pattern

- [init(events:parameterCurves:)](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [init(events:parameters:)](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [init(dictionary:)](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPattern.Key](key.md): Constants that define the keys you use to create a haptic pattern dictionary.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a haptic pattern with the contents of an AHAP file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) ahapURL error:(NSError **) outError;
```

## Parameters

- `ahapURL`: A URL to an AHAP file that describes a pattern.
- `outError`: Any error that occurs during haptic pattern initialization. If no error occurs, this value is `nil`.

## See Also

### Creating a Haptic Pattern

- [initWithEvents:parameterCurves:error:](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [initWithEvents:parameters:error:](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [initWithDictionary:error:](init%28dictionary_%29.md): Creates a haptic pattern from a property list dictionary.
- [CHHapticPatternKey](key.md): Constants that define the keys you use to create a haptic pattern dictionary.
