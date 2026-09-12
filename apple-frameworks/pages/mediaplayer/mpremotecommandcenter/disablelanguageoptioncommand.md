> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/disablelanguageoptioncommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/disablelanguageoptioncommand)

# disableLanguageOptionCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The command object for disabling a language option

## Declaration

```swift
var disableLanguageOptionCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for disabling the language option for the media item. In your handler, change the language option to the new value. You can disable the command if your app does not support it.

## See Also

### Enabling language options

- [enableLanguageOptionCommand](enablelanguageoptioncommand.md): The command object for enabling a language option.

# disableLanguageOptionCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

The command object for disabling a language option

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * disableLanguageOptionCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for disabling the language option for the media item. In your handler, change the language option to the new value. You can disable the command if your app does not support it.

## See Also

### Enabling language options

- [enableLanguageOptionCommand](enablelanguageoptioncommand.md): The command object for enabling a language option.
