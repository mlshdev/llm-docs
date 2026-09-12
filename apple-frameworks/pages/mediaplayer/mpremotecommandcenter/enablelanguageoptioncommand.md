> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/enablelanguageoptioncommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/enablelanguageoptioncommand)

# enableLanguageOptionCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The command object for enabling a language option.

## Declaration

```swift
var enableLanguageOptionCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for enabling the language option for the media item. In your handler, change the language option to the new value. You can disable the command if your app does not support it.

## See Also

### Enabling language options

- [disableLanguageOptionCommand](disablelanguageoptioncommand.md): The command object for disabling a language option

# enableLanguageOptionCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The command object for enabling a language option.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * enableLanguageOptionCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for enabling the language option for the media item. In your handler, change the language option to the new value. You can disable the command if your app does not support it.

## See Also

### Enabling language options

- [disableLanguageOptionCommand](disablelanguageoptioncommand.md): The command object for disabling a language option
