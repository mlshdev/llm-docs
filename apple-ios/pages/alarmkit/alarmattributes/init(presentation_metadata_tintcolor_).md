> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmattributes/init(presentation:metadata:tintcolor:)](https://developer.apple.com/documentation/alarmkit/alarmattributes/init(presentation:metadata:tintcolor:))

# init(presentation:metadata:tintColor:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance of an alarm UI.

## Declaration

```swift
init(presentation: AlarmPresentation, metadata: Metadata? = nil, tintColor: Color)
```

## Parameters

- `presentation`: The content required for the various states of an alarm.
- `metadata`: The additional data that you can include in your attributes.
- `tintColor`: The tint color applied to the templated UI.

## See Also

### Creating an alarm attribute

- [tintColor](tintcolor.md): The tint color applied to the templated UI.
- [presentation](presentation.md): The content required for the various states of the UI.
- [metadata](metadata.md): The additional data you can include in your attributes.
- [AlarmAttributes.ContentState](contentstate.md): The type alias for the structure that describes the content of an alarm.
