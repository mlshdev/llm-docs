> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/playpattern(from:)-7u8se](https://developer.apple.com/documentation/corehaptics/chhapticengine/playpattern(from:)-7u8se)

# playPattern(from:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Plays a pattern from the specified data.

## Declaration

```swift
func playPattern(from data: Data) throws
```

## Parameters

- `data`: The raw data containing the haptic pattern, structured as an AHAP dictionary.

<a id="Discussion"></a>

## Discussion

Start the engine prior to calling this method to provide low-latency playback. If the engine isn’t already running when you call this method, the system starts it, which can result in a significant playback delay.

## See Also

### Playing a Pattern

- [playPattern(from:)](playpattern%28from_%29-6m9m5.md): Plays a pattern that’s defined in a file at the specified URL.

# playPatternFromData:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Plays a pattern from the specified data.

## Declaration

```objectivec
- (BOOL) playPatternFromData:(NSData *) data error:(NSError **) outError;
```

## Parameters

- `data`: The raw data containing the haptic pattern, structured as an AHAP dictionary.
- `outError`: An error in Objective-C that contains information about failed pattern playback, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Start the engine prior to calling this method to provide low-latency playback. If the engine isn’t already running when you call this method, the system starts it, which can result in a significant playback delay.

## See Also

### Playing a Pattern

- [playPatternFromURL:error:](playpattern%28from_%29-6m9m5.md): Plays a pattern that’s defined in a file at the specified URL.
