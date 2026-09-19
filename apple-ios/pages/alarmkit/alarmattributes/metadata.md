> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmattributes/metadata

# metadata

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The additional data you can include in your attributes.

## Declaration

```swift
var metadata: Metadata?
```

<a id="discussion"></a>

## Discussion

The additional data can be information that describes extra UI features you want to include in your countdown UI.

## See Also

### Creating an alarm attribute

- [init(presentation:metadata:tintColor:)](init%28presentation_metadata_tintcolor_%29.md): Creates an instance of an alarm UI.
- [tintColor](tintcolor.md): The tint color applied to the templated UI.
- [presentation](presentation.md): The content required for the various states of the UI.
- [AlarmAttributes.ContentState](contentstate.md): The type alias for the structure that describes the content of an alarm.
