> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/init(dictionary:)](https://developer.apple.com/documentation/corehaptics/chhapticpattern/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic pattern from a property list dictionary.

## Declaration

```swift
init(dictionary patternDict: [CHHapticPattern.Key : Any]) throws
```

## Parameters

- `patternDict`: A dictionary that defines the haptic pattern and its parameters.

## See Also

### Creating a Haptic Pattern

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [init(events:parameterCurves:)](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [init(events:parameters:)](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [CHHapticPattern.Key](key.md): Constants that define the keys you use to create a haptic pattern dictionary.

# initWithDictionary:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic pattern from a property list dictionary.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,id> *) patternDict error:(NSError **) outError;
```

## Parameters

- `patternDict`: A dictionary that defines the haptic pattern and its parameters.
- `outError`: Any error that occurs during haptic pattern initialization. If no error occurs, this value is `nil`.

## See Also

### Creating a Haptic Pattern

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a haptic pattern with the contents of an AHAP file.
- [initWithEvents:parameterCurves:error:](init%28events_parametercurves_%29.md): Constructs a haptic pattern from a series of events and parameter curves.
- [initWithEvents:parameters:error:](init%28events_parameters_%29.md): Constructs a haptic pattern from a series of events and parameters.
- [CHHapticPatternKey](key.md): Constants that define the keys you use to create a haptic pattern dictionary.
