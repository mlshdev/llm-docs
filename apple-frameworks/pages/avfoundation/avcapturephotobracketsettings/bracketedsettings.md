> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotobracketsettings/bracketedsettings](https://developer.apple.com/documentation/avfoundation/avcapturephotobracketsettings/bracketedsettings)

# bracketedSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array describing the number of and settings for images to produce in a bracketed capture.

## Declaration

```swift
var bracketedSettings: [AVCaptureBracketedStillImageSettings] { get }
```

<a id="Discussion"></a>

## Discussion

This array is read-only. You provide this array of bracket settings when creating a settings object with the `init(format:rawPixelFormatType:bracketedSettings:)` initializer.

## See Also

### Working with bracketed settings

- [isLensStabilizationEnabled](islensstabilizationenabled.md): A Boolean value that specifies whether to stabilize the lens for the duration of the bracketed capture.

# bracketedSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array describing the number of and settings for images to produce in a bracketed capture.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof AVCaptureBracketedStillImageSettings *> * bracketedSettings;
```

<a id="Discussion"></a>

## Discussion

This array is read-only. You provide this array of bracket settings when creating a settings object with the `init(format:rawPixelFormatType:bracketedSettings:)` initializer.

## See Also

### Working with bracketed settings

- [lensStabilizationEnabled](islensstabilizationenabled.md): A Boolean value that specifies whether to stabilize the lens for the duration of the bracketed capture.
