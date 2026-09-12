> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbusarray/replacebusses(_:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbusarray/replacebusses(_:))

# replaceBusses(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Replaces the current bus array with a copy of the supplied bus array.

## Declaration

```swift
func replaceBusses(_ busArray: [AUAudioUnitBus])
```

## Parameters

- `busArray`: The new bus array.

<a id="Discussion"></a>

## Discussion

The base class issues KVO notifications.

# replaceBusses: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Replaces the current bus array with a copy of the supplied bus array.

## Declaration

```objectivec
- (void) replaceBusses:(NSArray<AUAudioUnitBus *> *) busArray;
```

## Parameters

- `busArray`: The new bus array.

<a id="Discussion"></a>

## Discussion

The base class issues KVO notifications.
