> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/assistantcellconfiguration

# assistantCellConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The object that provides the configuration attributes for the assistant cell.

## Declaration

```swift
var assistantCellConfiguration: CPAssistantCellConfiguration? { get set }
```

<a id="discussion"></a>

## Discussion

In an audio, video, or communication app, this property tells CarPlay whether to configure an additional row with a Siri action. The object in this property tells CarPlay the type of action to perform and where to display the row in your list interface. If you’re not creating an audio, video, or communication app, leave the value of this property set to `nil`.

An audio or video app uses this cell to play media files, and a communication app uses this cell to initiate a call using Siri. CarPlay handles all interactions with the cell and reports results to your Intents extension using one of the following SiriKit intents:

The [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type tells your audio or video app to play the specified media file. The [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type tells your communication app to start a call.

If you modify this property when the list is visible, CarPlay automatically refreshes your app’s interface to reflect the new value.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](listheader.md): An optional header to display between the navigation bar and first section of content.
- [headerGridButtons](headergridbuttons.md): Buttons to display in the header area above the list content.

# assistantCellConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The object that provides the configuration attributes for the assistant cell.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPAssistantCellConfiguration * assistantCellConfiguration;
```

<a id="discussion"></a>

## Discussion

In an audio, video, or communication app, this property tells CarPlay whether to configure an additional row with a Siri action. The object in this property tells CarPlay the type of action to perform and where to display the row in your list interface. If you’re not creating an audio, video, or communication app, leave the value of this property set to `nil`.

An audio or video app uses this cell to play media files, and a communication app uses this cell to initiate a call using Siri. CarPlay handles all interactions with the cell and reports results to your Intents extension using one of the following SiriKit intents:

The [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type tells your audio or video app to play the specified media file. The [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type tells your communication app to start a call.

If you modify this property when the list is visible, CarPlay automatically refreshes your app’s interface to reflect the new value.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](listheader.md): An optional header to display between the navigation bar and first section of content.
- [headerGridButtons](headergridbuttons.md): Buttons to display in the header area above the list content.
