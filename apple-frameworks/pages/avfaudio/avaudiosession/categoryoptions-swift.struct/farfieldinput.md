> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/farfieldinput](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/farfieldinput)

# farFieldInput (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).

## Declaration

```swift
static var farFieldInput: AVAudioSession.CategoryOptions { get }
```

<a id="discussion"></a>

## Discussion

- This option requires `AVAudioSessionCategoryOptionAllowBluetoothHFP` to be set. Otherwise error will be returned.
- Support for this can be queried on input ports via the BluetoothMicrophone interface on a port, via its member `farFieldCapture.isSupported`.
- Active sessions can see if far-field input is enabled on a bluetooth audio device by querying the BluetoothMicrophone interface of the input port of the current route for: `farFieldCapture.isEnabled`.

## See Also

### Inspecting the category configuration

- [category](../category-swift.property.md): The current audio session category.
- [availableCategories](../availablecategories.md): The audio session categories available on the current device.
- [AVAudioSession.Category](../category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](../categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSession.CategoryOptions](../categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.

# AVAudioSessionCategoryOptionFarFieldInput (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+

This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).

## Declaration

```objectivec
AVAudioSessionCategoryOptionFarFieldInput
```

<a id="discussion"></a>

## Discussion

- This option requires `AVAudioSessionCategoryOptionAllowBluetoothHFP` to be set. Otherwise error will be returned.
- Support for this can be queried on input ports via the BluetoothMicrophone interface on a port, via its member `farFieldCapture.isSupported`.
- Active sessions can see if far-field input is enabled on a bluetooth audio device by querying the BluetoothMicrophone interface of the input port of the current route for: `farFieldCapture.isEnabled`.

## See Also

### Inspecting the category configuration

- [category](../category-swift.property.md): The current audio session category.
- [availableCategories](../availablecategories.md): The audio session categories available on the current device.
- [AVAudioSessionCategory](../category-swift.struct.md): Audio session category identifiers.
- [categoryOptions](../categoryoptions-swift.property.md): The set of options associated with the current audio session category.
- [AVAudioSessionCategoryOptions](../categoryoptions-swift.struct.md): Constants that specify optional audio behaviors.
