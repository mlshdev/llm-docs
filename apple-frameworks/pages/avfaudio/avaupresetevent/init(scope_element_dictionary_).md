> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaupresetevent/init(scope:element:dictionary:)](https://developer.apple.com/documentation/avfaudio/avaupresetevent/init(scope:element:dictionary:))

# init(scope:element:dictionary:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with the scope, element, and dictionary for the preset.

## Declaration

```swift
init(scope: UInt32, element: UInt32, dictionary presetDictionary: [AnyHashable : Any])
```

## Parameters

- `scope`: The audio unit scope.
- `element`: The element index in the scope.
- `presetDictionary`: The dictionary that contains the preset.

<a id="Discussion"></a>

## Discussion

The system copies the dictionary you specify and isn’t editable once it creates the event. The `scope` parameter must be [kAudioUnitScope_Global](../../audiotoolbox/kaudiounitscope_global.md), and the element index should be `0`.

# initWithScope:element:dictionary: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an event with the scope, element, and dictionary for the preset.

## Declaration

```objectivec
- (instancetype) initWithScope:(UInt32) scope element:(UInt32) element dictionary:(NSDictionary *) presetDictionary;
```

## Parameters

- `scope`: The audio unit scope.
- `element`: The element index in the scope.
- `presetDictionary`: The dictionary that contains the preset.

<a id="Discussion"></a>

## Discussion

The system copies the dictionary you specify and isn’t editable once it creates the event. The `scope` parameter must be [kAudioUnitScope_Global](../../audiotoolbox/kaudiounitscope_global.md), and the element index should be `0`.
