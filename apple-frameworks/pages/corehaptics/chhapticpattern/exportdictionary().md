> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticpattern/exportdictionary()](https://developer.apple.com/documentation/corehaptics/chhapticpattern/exportdictionary())

# exportDictionary() (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns the dictionary representation of the haptic pattern.

## Declaration

```swift
func exportDictionary() throws -> [CHHapticPattern.Key : Any]
```

# exportDictionaryAndReturnError: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Returns the dictionary representation of the haptic pattern.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) exportDictionaryAndReturnError:(NSError **) outError;
```
