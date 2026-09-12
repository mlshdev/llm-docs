> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration/menableadvancedducking](https://developer.apple.com/documentation/audiotoolbox/auvoiceiootheraudioduckingconfiguration/menableadvancedducking)

# mEnableAdvancedDucking (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that specifies whether to enable advanced ducking.

## Declaration

```swift
var mEnableAdvancedDucking: DarwinBoolean
```

<a id="Discussion"></a>

## Discussion

Advanced ducking ducks other non-voice audio based on the presence of voice activity from local and remote chat participants.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a configuration

- [mDuckingLevel](mduckinglevel.md): The ducking level of other non-voice audio.

# mEnableAdvancedDucking (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A Boolean value that specifies whether to enable advanced ducking.

## Declaration

```objectivec
Boolean mEnableAdvancedDucking;
```

<a id="Discussion"></a>

## Discussion

Advanced ducking ducks other non-voice audio based on the presence of voice activity from local and remote chat participants.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a configuration

- [mDuckingLevel](mduckinglevel.md): The ducking level of other non-voice audio.
